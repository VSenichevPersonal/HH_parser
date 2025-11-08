import { Injectable, Logger } from '@nestjs/common';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import axiosRetry from 'axios-retry';
import Bottleneck from 'bottleneck';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface VacancySearchParams {
  text?: string;
  area?: number;
  employer_id?: number;
  per_page?: number;
  page?: number;
  order_by?: 'publication_time' | 'salary_desc' | 'salary_asc' | 'relevance';
  search_field?: string;
  experience?: string;
  employment?: string;
  schedule?: string;
  salary?: number;
  currency?: string;
  date_from?: string;
  date_to?: string;
}

export interface ResumeSearchParams {
  text?: string;
  area?: number;
  per_page?: number;
  page?: number;
  order_by?: string;
  search_field?: string;
  experience?: string;
  employment?: string;
  schedule?: string;
  salary?: number;
  currency?: string;
  age_from?: number;
  age_to?: number;
  gender?: string;
  relocation?: string;
}

export interface HHVacancy {
  id: string;
  name: string;
  employer: {
    id: string;
    name: string;
  };
  area: {
    id: string;
    name: string;
  };
  salary?: {
    from?: number;
    to?: number;
    currency: string;
    gross: boolean;
  };
  published_at: string;
  created_at: string;
  updated_at: string;
  archived: boolean;
  premium: boolean;
  has_test: boolean;
  response_letter_required: boolean;
  address?: any;
  alternate_url: string;
  snippet: {
    requirement?: string;
    responsibility?: string;
  };
  contacts?: any;
  schedule: {
    id: string;
    name: string;
  };
  employment: {
    id: string;
    name: string;
  };
  experience: {
    id: string;
    name: string;
  };
  key_skills: Array<{
    name: string;
  }>;
  specializations: Array<{
    id: string;
    name: string;
    profarea_id: string;
    profarea_name: string;
  }>;
  professional_roles: Array<{
    id: string;
    name: string;
  }>;
  accept_handicapped: boolean;
  accept_kids: boolean;
  accept_incomplete_resumes: boolean;
  working_days: Array<string>;
  working_time_intervals: Array<string>;
  working_time_modes: Array<string>;
  accept_temporary: boolean;
  languages: Array<{
    id: string;
    name: string;
    level: {
      id: string;
      name: string;
    };
  }>;
}

export interface HHResume {
  id: string;
  first_name: string;
  last_name: string;
  middle_name?: string;
  title: string;
  photo?: {
    small?: string;
    medium?: string;
    id?: string;
  };
  can_view_full_info: boolean;
  age: number;
  gender: {
    id: string;
    name: string;
  };
  area: {
    id: string;
    name: string;
    url: string;
  };
  relocation: {
    type: {
      id: string;
      name: string;
    };
  };
  business_trip_readiness: {
    id: string;
    name: string;
  };
  contact: Array<{
    type: {
      id: string;
      name: string;
    };
    value: {
      formatted: string;
    };
    preferred: boolean;
    comment?: string;
  }>;
  salary: {
    amount?: number;
    currency: string;
  };
  employments: Array<{
    id: string;
    name: string;
  }>;
  schedules: Array<{
    id: string;
    name: string;
  }>;
  experience: Array<{
    company?: string;
    company_id?: string;
    company_url?: string;
    area?: {
      id: string;
      name: string;
    };
    position: string;
    description?: string;
    start?: string;
    end?: string;
  }>;
  education: {
    primary: Array<{
      name: string;
      organization?: string;
      result?: string;
      year?: number;
    }>;
  };
  language: Array<{
    id: string;
    name: string;
    level: {
      id: string;
      name: string;
    };
  }>;
  skill_set: Array<string>;
  skills: string;
  metro_station?: {
    station_id: string;
    station_name: string;
    line_id: string;
    line_name: string;
  };
  resume_locale: {
    id: string;
    name: string;
  };
  certificate: Array<{
    achieved_at?: string;
    owner?: string;
    title: string;
    type: string;
    url?: string;
  }>;
  created_at: string;
  updated_at: string;
  total_experience: {
    months: number;
  };
}

@Injectable()
export class HHService {
  private readonly logger = new Logger(HHService.name);
  private readonly baseURL = 'https://api.hh.ru';
  private readonly httpClient: AxiosInstance;
  private readonly limiter: Bottleneck;

  constructor() {
    // Настраиваем rate limiter: максимум 8 RPS
    this.limiter = new Bottleneck({
      minTime: 125, // 1000ms / 8 = 125ms между запросами
      maxConcurrent: 1,
      reservoir: 8,
      reservoirRefreshAmount: 8,
      reservoirRefreshInterval: 1000,
    });

    // Настраиваем HTTP клиент
    this.httpClient = axios.create({
      baseURL: this.baseURL,
      timeout: 30000,
      headers: {
        'User-Agent': process.env.HH_USER_AGENT || 'HH-Parser/1.0 (dev@credos.ru)',
        'Accept': 'application/json',
      },
    });

    // Настраиваем retry логику
    axiosRetry(this.httpClient, {
      retries: 3,
      retryDelay: (retryCount) => {
        this.logger.warn(`HH API retry attempt ${retryCount}`);
        return axiosRetry.exponentialDelay(retryCount);
      },
      retryCondition: (error) => {
        // Повторяем при 5xx ошибках и 429 (rate limit)
        return Boolean(
          axiosRetry.isNetworkOrIdempotentRequestError(error) ||
          (error.response?.status && [429, 500, 502, 503, 504].includes(error.response.status))
        );
      },
    });

    this.logger.log('HH Service initialized with rate limiting');
  }

  /**
   * Поиск вакансий
   */
  async searchVacancies(params: VacancySearchParams = {}): Promise<{
    items: HHVacancy[];
    found: number;
    pages: number;
    per_page: number;
    page: number;
    clusters: any[];
    arguments: any;
    alternate_url: string;
  }> {
    try {
      const queryParams = {
        per_page: 100,
        page: 0,
        order_by: 'publication_time',
        ...params,
      };

      const response: AxiosResponse = await this.limiter.schedule(() =>
        this.httpClient.get('/vacancies', { params: queryParams })
      );

      this.logger.debug(`Vacancies search: ${response.data.found} found, page ${params.page || 0}`);

      // Сохраняем RAW данные
      await this.saveRawVacancyResponse(queryParams, response.data);

      return response.data;
    } catch (error) {
      this.logger.error(`Vacancy search failed:`, error.response?.data || error.message);
      throw error;
    }
  }

  /**
   * Получение детальной информации о вакансии
   */
  async getVacancy(id: string): Promise<HHVacancy> {
    try {
      const response: AxiosResponse = await this.limiter.schedule(() =>
        this.httpClient.get(`/vacancies/${id}`)
      );

      this.logger.debug(`Vacancy ${id} fetched`);

      // Сохраняем RAW данные
      await this.saveRawVacancy(id, response.data);

      return response.data;
    } catch (error) {
      if (error.response?.status === 404) {
        this.logger.warn(`Vacancy ${id} not found (archived/deleted)`);
        // Сохраняем информацию об удаленной вакансии
        await this.markVacancyAsArchived(id);
        throw new Error(`Vacancy ${id} not found`);
      }

      this.logger.error(`Vacancy ${id} fetch failed:`, error.response?.data || error.message);
      throw error;
    }
  }

  /**
   * Поиск резюме (требует авторизации)
   */
  async searchResumes(params: ResumeSearchParams = {}, managerToken: string): Promise<{
    items: HHResume[];
    found: number;
    pages: number;
    per_page: number;
    page: number;
    clusters: any[];
    arguments: any;
    alternate_url: string;
  }> {
    try {
      // Проверяем лимиты менеджера
      await this.checkManagerLimits(managerToken);

      const queryParams = {
        per_page: 100,
        page: 0,
        ...params,
      };

      const response: AxiosResponse = await this.limiter.schedule(() =>
        this.httpClient.get('/resumes', {
          params: queryParams,
          headers: {
            'Authorization': `Bearer ${managerToken}`,
          },
        })
      );

      this.logger.debug(`Resumes search: ${response.data.found} found, page ${params.page || 0}`);

      // Сохраняем RAW данные и обновляем счетчики
      await this.saveRawResumeResponse(queryParams, response.data, managerToken);

      return response.data;
    } catch (error) {
      this.logger.error(`Resume search failed:`, error.response?.data || error.message);
      throw error;
    }
  }

  /**
   * Получение детальной информации о резюме
   */
  async getResume(id: string, managerToken: string): Promise<HHResume> {
    try {
      // Проверяем лимиты менеджера
      await this.checkManagerLimits(managerToken);

      const response: AxiosResponse = await this.limiter.schedule(() =>
        this.httpClient.get(`/resumes/${id}`, {
          headers: {
            'Authorization': `Bearer ${managerToken}`,
          },
        })
      );

      this.logger.debug(`Resume ${id} fetched`);

      // Сохраняем RAW данные и обновляем счетчики
      await this.saveRawResume(id, response.data, managerToken);

      return response.data;
    } catch (error) {
      if (error.response?.status === 404) {
        this.logger.warn(`Resume ${id} not found`);
        throw new Error(`Resume ${id} not found`);
      }

      this.logger.error(`Resume ${id} fetch failed:`, error.response?.data || error.message);
      throw error;
    }
  }

  /**
   * Получение регионов (справочник)
   */
  async getAreas(): Promise<any[]> {
    try {
      const response: AxiosResponse = await this.limiter.schedule(() =>
        this.httpClient.get('/areas')
      );

      return response.data;
    } catch (error) {
      this.logger.error('Areas fetch failed:', error.response?.data || error.message);
      throw error;
    }
  }

  /**
   * Получение специализаций (справочник)
   */
  async getSpecializations(): Promise<any[]> {
    try {
      const response: AxiosResponse = await this.limiter.schedule(() =>
        this.httpClient.get('/specializations')
      );

      return response.data;
    } catch (error) {
      this.logger.error('Specializations fetch failed:', error.response?.data || error.message);
      throw error;
    }
  }

  /**
   * Получение профессиональных ролей (справочник)
   */
  async getProfessionalRoles(): Promise<any[]> {
    try {
      const response: AxiosResponse = await this.limiter.schedule(() =>
        this.httpClient.get('/professional_roles')
      );

      return response.data;
    } catch (error) {
      this.logger.error('Professional roles fetch failed:', error.response?.data || error.message);
      throw error;
    }
  }

  // ===== Вспомогательные методы =====

  private async saveRawVacancyResponse(params: any, data: any): Promise<void> {
    try {
      // Сохраняем как поисковый запрос
      await prisma.rawItem.upsert({
        where: {
          source_hhId: {
            source: 'vacancy_search',
            hhId: JSON.stringify(params),
          },
        },
        update: {
          payload: data,
          fetchedAt: new Date(),
        },
        create: {
          source: 'vacancy_search',
          hhId: JSON.stringify(params),
          payload: data,
        },
      });
    } catch (error) {
      this.logger.error('Failed to save raw vacancy search:', error);
    }
  }

  private async saveRawVacancy(id: string, data: HHVacancy): Promise<void> {
    try {
      await prisma.rawItem.upsert({
        where: {
          source_hhId: {
            source: 'vacancy',
            hhId: id,
          },
        },
        update: {
          payload: data,
          fetchedAt: new Date(),
        },
        create: {
          source: 'vacancy',
          hhId: id,
          payload: data,
        },
      });
    } catch (error) {
      this.logger.error(`Failed to save raw vacancy ${id}:`, error);
    }
  }

  private async markVacancyAsArchived(id: string): Promise<void> {
    try {
      await prisma.vacancy.updateMany({
        where: { id: parseInt(id) },
        data: { archived: true },
      });
    } catch (error) {
      this.logger.error(`Failed to mark vacancy ${id} as archived:`, error);
    }
  }

  private async checkManagerLimits(token: string): Promise<void> {
    // Получаем токен менеджера
    const managerToken = await prisma.managerToken.findFirst({
      where: { accessToken: token },
    });

    if (!managerToken) {
      throw new Error('Manager token not found');
    }

    // Проверяем дневные лимиты
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (managerToken.lastReset.getTime() < today.getTime()) {
      // Сбрасываем счетчик на новый день
      await prisma.managerToken.update({
        where: { managerId: managerToken.managerId },
        data: {
          usedToday: 0,
          lastReset: today,
        },
      });
    }

    if (managerToken.usedToday >= managerToken.dailyLimit) {
      throw new Error(`Daily limit exceeded for manager ${managerToken.managerId}`);
    }
  }

  private async saveRawResumeResponse(params: any, data: any, token: string): Promise<void> {
    try {
      await prisma.rawItem.upsert({
        where: {
          source_hhId: {
            source: 'resume_search',
            hhId: JSON.stringify(params),
          },
        },
        update: {
          payload: data,
          fetchedAt: new Date(),
        },
        create: {
          source: 'resume_search',
          hhId: JSON.stringify(params),
          payload: data,
        },
      });
    } catch (error) {
      this.logger.error('Failed to save raw resume search:', error);
    }
  }

  private async saveRawResume(id: string, data: HHResume, token: string): Promise<void> {
    try {
      // Получаем менеджера и обновляем счетчики
      const managerToken = await prisma.managerToken.findFirst({
        where: { accessToken: token },
      });

      if (managerToken) {
        // Сохраняем RAW данные
        await prisma.rawItem.upsert({
          where: {
            source_hhId: {
              source: 'resume',
              hhId: id,
            },
          },
          update: {
            payload: data,
            fetchedAt: new Date(),
          },
          create: {
            source: 'resume',
            hhId: id,
            payload: data,
          },
        });

        // Обновляем счетчик просмотров
        await prisma.managerToken.update({
          where: { managerId: managerToken.managerId },
          data: { usedToday: { increment: 1 } },
        });

        // Записываем в аудит
        await prisma.resumeViewAudit.create({
          data: {
            managerId: managerToken.managerId,
            resumeId: id,
          },
        });

        this.logger.debug(`Resume ${id} viewed by manager ${managerToken.managerId}`);
      }
    } catch (error) {
      this.logger.error(`Failed to save raw resume ${id}:`, error);
    }
  }
}

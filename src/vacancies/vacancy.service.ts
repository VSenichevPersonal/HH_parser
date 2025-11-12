import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

export interface VacancyFilters {
  page: number;
  limit: number;
  query?: string;
}

@Injectable()
export class VacancyService {
  private readonly logger = new Logger(VacancyService.name);
  private readonly prisma = new PrismaClient();

  async searchVacancies(filters: VacancyFilters) {
    const { page, limit, query } = filters;
    const skip = (page - 1) * limit;

    const where = query
      ? {
          OR: [
            { name: { contains: query, mode: 'insensitive' as const } },
            { description: { contains: query, mode: 'insensitive' as const } },
          ],
        }
      : {};

    const [total, items] = await Promise.all([
      this.prisma.vacancy.count({ where }),
      this.prisma.vacancy.findMany({
        where,
        orderBy: [{ publishedAt: 'desc' }],
        skip,
        take: limit,
        include: { employer: true, skills: true },
      }),
    ]);

    const totalPages = Math.ceil(total / limit) || 0;

    return {
      data: items,
      pagination: {
        page,
        limit,
        total,
        totalPages,
      },
    };
  }

  async getVacancyById(id: string) {
    const vacancy = await this.prisma.vacancy.findUnique({
      where: { id: BigInt(id) },
      include: { employer: true, skills: true },
    });

    if (!vacancy) {
      throw new NotFoundException('Vacancy not found');
    }

    return vacancy;
  }

  async getVacancyStats() {
    const total = await this.prisma.vacancy.count();
    const active = await this.prisma.vacancy.count({ where: { archived: false } });

    return {
      total,
      active,
      topEmployers: [],
      topSkills: [],
      topAreas: [],
      salaryStats: {},
    };
  }
}

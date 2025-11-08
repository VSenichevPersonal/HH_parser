"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var HHService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HHService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = __importDefault(require("axios"));
const axios_retry_1 = __importDefault(require("axios-retry"));
const bottleneck_1 = __importDefault(require("bottleneck"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let HHService = HHService_1 = class HHService {
    logger = new common_1.Logger(HHService_1.name);
    baseURL = 'https://api.hh.ru';
    httpClient;
    limiter;
    constructor() {
        this.limiter = new bottleneck_1.default({
            minTime: 125,
            maxConcurrent: 1,
            reservoir: 8,
            reservoirRefreshAmount: 8,
            reservoirRefreshInterval: 1000,
        });
        this.httpClient = axios_1.default.create({
            baseURL: this.baseURL,
            timeout: 30000,
            headers: {
                'User-Agent': process.env.HH_USER_AGENT || 'HH-Parser/1.0 (dev@credos.ru)',
                'Accept': 'application/json',
            },
        });
        (0, axios_retry_1.default)(this.httpClient, {
            retries: 3,
            retryDelay: (retryCount) => {
                this.logger.warn(`HH API retry attempt ${retryCount}`);
                return axios_retry_1.default.exponentialDelay(retryCount);
            },
            retryCondition: (error) => {
                return Boolean(axios_retry_1.default.isNetworkOrIdempotentRequestError(error) ||
                    (error.response?.status && [429, 500, 502, 503, 504].includes(error.response.status)));
            },
        });
        this.logger.log('HH Service initialized with rate limiting');
    }
    async searchVacancies(params = {}) {
        try {
            const queryParams = {
                per_page: 100,
                page: 0,
                order_by: 'publication_time',
                ...params,
            };
            const response = await this.limiter.schedule(() => this.httpClient.get('/vacancies', { params: queryParams }));
            this.logger.debug(`Vacancies search: ${response.data.found} found, page ${params.page || 0}`);
            await this.saveRawVacancyResponse(queryParams, response.data);
            return response.data;
        }
        catch (error) {
            this.logger.error(`Vacancy search failed:`, error.response?.data || error.message);
            throw error;
        }
    }
    async getVacancy(id) {
        try {
            const response = await this.limiter.schedule(() => this.httpClient.get(`/vacancies/${id}`));
            this.logger.debug(`Vacancy ${id} fetched`);
            await this.saveRawVacancy(id, response.data);
            return response.data;
        }
        catch (error) {
            if (error.response?.status === 404) {
                this.logger.warn(`Vacancy ${id} not found (archived/deleted)`);
                await this.markVacancyAsArchived(id);
                throw new Error(`Vacancy ${id} not found`);
            }
            this.logger.error(`Vacancy ${id} fetch failed:`, error.response?.data || error.message);
            throw error;
        }
    }
    async searchResumes(params = {}, managerToken) {
        try {
            await this.checkManagerLimits(managerToken);
            const queryParams = {
                per_page: 100,
                page: 0,
                ...params,
            };
            const response = await this.limiter.schedule(() => this.httpClient.get('/resumes', {
                params: queryParams,
                headers: {
                    'Authorization': `Bearer ${managerToken}`,
                },
            }));
            this.logger.debug(`Resumes search: ${response.data.found} found, page ${params.page || 0}`);
            await this.saveRawResumeResponse(queryParams, response.data, managerToken);
            return response.data;
        }
        catch (error) {
            this.logger.error(`Resume search failed:`, error.response?.data || error.message);
            throw error;
        }
    }
    async getResume(id, managerToken) {
        try {
            await this.checkManagerLimits(managerToken);
            const response = await this.limiter.schedule(() => this.httpClient.get(`/resumes/${id}`, {
                headers: {
                    'Authorization': `Bearer ${managerToken}`,
                },
            }));
            this.logger.debug(`Resume ${id} fetched`);
            await this.saveRawResume(id, response.data, managerToken);
            return response.data;
        }
        catch (error) {
            if (error.response?.status === 404) {
                this.logger.warn(`Resume ${id} not found`);
                throw new Error(`Resume ${id} not found`);
            }
            this.logger.error(`Resume ${id} fetch failed:`, error.response?.data || error.message);
            throw error;
        }
    }
    async getAreas() {
        try {
            const response = await this.limiter.schedule(() => this.httpClient.get('/areas'));
            return response.data;
        }
        catch (error) {
            this.logger.error('Areas fetch failed:', error.response?.data || error.message);
            throw error;
        }
    }
    async getSpecializations() {
        try {
            const response = await this.limiter.schedule(() => this.httpClient.get('/specializations'));
            return response.data;
        }
        catch (error) {
            this.logger.error('Specializations fetch failed:', error.response?.data || error.message);
            throw error;
        }
    }
    async getProfessionalRoles() {
        try {
            const response = await this.limiter.schedule(() => this.httpClient.get('/professional_roles'));
            return response.data;
        }
        catch (error) {
            this.logger.error('Professional roles fetch failed:', error.response?.data || error.message);
            throw error;
        }
    }
    async saveRawVacancyResponse(params, data) {
        try {
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
        }
        catch (error) {
            this.logger.error('Failed to save raw vacancy search:', error);
        }
    }
    async saveRawVacancy(id, data) {
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
        }
        catch (error) {
            this.logger.error(`Failed to save raw vacancy ${id}:`, error);
        }
    }
    async markVacancyAsArchived(id) {
        try {
            await prisma.vacancy.updateMany({
                where: { id: parseInt(id) },
                data: { archived: true },
            });
        }
        catch (error) {
            this.logger.error(`Failed to mark vacancy ${id} as archived:`, error);
        }
    }
    async checkManagerLimits(token) {
        const managerToken = await prisma.managerToken.findFirst({
            where: { accessToken: token },
        });
        if (!managerToken) {
            throw new Error('Manager token not found');
        }
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (managerToken.lastReset.getTime() < today.getTime()) {
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
    async saveRawResumeResponse(params, data, token) {
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
        }
        catch (error) {
            this.logger.error('Failed to save raw resume search:', error);
        }
    }
    async saveRawResume(id, data, token) {
        try {
            const managerToken = await prisma.managerToken.findFirst({
                where: { accessToken: token },
            });
            if (managerToken) {
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
                await prisma.managerToken.update({
                    where: { managerId: managerToken.managerId },
                    data: { usedToday: { increment: 1 } },
                });
                await prisma.resumeViewAudit.create({
                    data: {
                        managerId: managerToken.managerId,
                        resumeId: id,
                    },
                });
                this.logger.debug(`Resume ${id} viewed by manager ${managerToken.managerId}`);
            }
        }
        catch (error) {
            this.logger.error(`Failed to save raw resume ${id}:`, error);
        }
    }
};
exports.HHService = HHService;
exports.HHService = HHService = HHService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], HHService);
//# sourceMappingURL=hh.service.js.map
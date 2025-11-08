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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HHController = void 0;
const common_1 = require("@nestjs/common");
const hh_service_1 = require("./hh.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let HHController = class HHController {
    hhService;
    constructor(hhService) {
        this.hhService = hhService;
    }
    async searchVacancies(query) {
        return this.hhService.searchVacancies(query);
    }
    async getVacancy(id) {
        return this.hhService.getVacancy(id);
    }
    async searchResumes(query) {
        throw new Error('Resume search requires manager token');
    }
    async getResume(id) {
        throw new Error('Resume access requires manager token');
    }
    async getAreas() {
        return this.hhService.getAreas();
    }
    async getSpecializations() {
        return this.hhService.getSpecializations();
    }
    async getProfessionalRoles() {
        return this.hhService.getProfessionalRoles();
    }
    async runParsing(body) {
        return { message: 'Parsing started', profileId: body.profileId, entityType: body.entityType };
    }
};
exports.HHController = HHController;
__decorate([
    (0, common_1.Get)('vacancies'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HHController.prototype, "searchVacancies", null);
__decorate([
    (0, common_1.Get)('vacancies/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HHController.prototype, "getVacancy", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('resumes'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HHController.prototype, "searchResumes", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('resumes/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HHController.prototype, "getResume", null);
__decorate([
    (0, common_1.Get)('areas'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HHController.prototype, "getAreas", null);
__decorate([
    (0, common_1.Get)('specializations'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HHController.prototype, "getSpecializations", null);
__decorate([
    (0, common_1.Get)('professional-roles'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HHController.prototype, "getProfessionalRoles", null);
__decorate([
    (0, common_1.Post)('admin/run-parsing'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HHController.prototype, "runParsing", null);
exports.HHController = HHController = __decorate([
    (0, common_1.Controller)('api/hh'),
    __metadata("design:paramtypes", [hh_service_1.HHService])
], HHController);
//# sourceMappingURL=hh.controller.js.map
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.NullsOrder = exports.JsonNullValueFilter = exports.QueryMode = exports.JsonNullValueInput = exports.NullableJsonNullValueInput = exports.SortOrder = exports.SearchProfileScalarFieldEnum = exports.ResumeViewAuditScalarFieldEnum = exports.ResumeSkillScalarFieldEnum = exports.ResumeScalarFieldEnum = exports.ManagerTokenScalarFieldEnum = exports.UserScalarFieldEnum = exports.SyncStateScalarFieldEnum = exports.RawItemScalarFieldEnum = exports.VacancySkillScalarFieldEnum = exports.VacancyScalarFieldEnum = exports.EmployerScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = __importStar(require("@prisma/client/runtime/library"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "6.19.0",
    engine: "2ba551f319ab1df4bc874a89965d8b3641056773"
};
exports.NullTypes = {
    DbNull: runtime.objectEnumValues.classes.DbNull,
    JsonNull: runtime.objectEnumValues.classes.JsonNull,
    AnyNull: runtime.objectEnumValues.classes.AnyNull,
};
exports.DbNull = runtime.objectEnumValues.instances.DbNull;
exports.JsonNull = runtime.objectEnumValues.instances.JsonNull;
exports.AnyNull = runtime.objectEnumValues.instances.AnyNull;
exports.ModelName = {
    Employer: 'Employer',
    Vacancy: 'Vacancy',
    VacancySkill: 'VacancySkill',
    RawItem: 'RawItem',
    SyncState: 'SyncState',
    User: 'User',
    ManagerToken: 'ManagerToken',
    Resume: 'Resume',
    ResumeSkill: 'ResumeSkill',
    ResumeViewAudit: 'ResumeViewAudit',
    SearchProfile: 'SearchProfile'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.EmployerScalarFieldEnum = {
    id: 'id',
    name: 'name'
};
exports.VacancyScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    employerId: 'employerId',
    areaId: 'areaId',
    publishedAt: 'publishedAt',
    archived: 'archived',
    url: 'url',
    salaryFrom: 'salaryFrom',
    salaryTo: 'salaryTo',
    currency: 'currency',
    professionalRoles: 'professionalRoles',
    experience: 'experience',
    updatedAt: 'updatedAt'
};
exports.VacancySkillScalarFieldEnum = {
    vacancyId: 'vacancyId',
    skillName: 'skillName'
};
exports.RawItemScalarFieldEnum = {
    source: 'source',
    hhId: 'hhId',
    payload: 'payload',
    fetchedAt: 'fetchedAt'
};
exports.SyncStateScalarFieldEnum = {
    source: 'source',
    lastSeen: 'lastSeen',
    page: 'page'
};
exports.UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    emailVerified: 'emailVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ManagerTokenScalarFieldEnum = {
    managerId: 'managerId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    dailyLimit: 'dailyLimit',
    usedToday: 'usedToday',
    lastReset: 'lastReset',
    updatedAt: 'updatedAt'
};
exports.ResumeScalarFieldEnum = {
    id: 'id',
    title: 'title',
    areaId: 'areaId',
    areaName: 'areaName',
    experienceYears: 'experienceYears',
    salaryDesired: 'salaryDesired',
    currency: 'currency',
    updatedAt: 'updatedAt',
    rawSource: 'rawSource',
    rawId: 'rawId'
};
exports.ResumeSkillScalarFieldEnum = {
    resumeId: 'resumeId',
    skillName: 'skillName'
};
exports.ResumeViewAuditScalarFieldEnum = {
    id: 'id',
    managerId: 'managerId',
    resumeId: 'resumeId',
    viewedAt: 'viewedAt'
};
exports.SearchProfileScalarFieldEnum = {
    id: 'id',
    name: 'name',
    entityType: 'entityType',
    params: 'params',
    enabled: 'enabled',
    scheduleCron: 'scheduleCron',
    lastRun: 'lastRun',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullableJsonNullValueInput = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull
};
exports.JsonNullValueInput = {
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map
import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.AnyNull);
};
export declare const DbNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const JsonNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const AnyNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const ModelName: {
    readonly Employer: "Employer";
    readonly Vacancy: "Vacancy";
    readonly VacancySkill: "VacancySkill";
    readonly RawItem: "RawItem";
    readonly SyncState: "SyncState";
    readonly User: "User";
    readonly ManagerToken: "ManagerToken";
    readonly Resume: "Resume";
    readonly ResumeSkill: "ResumeSkill";
    readonly ResumeViewAudit: "ResumeViewAudit";
    readonly SearchProfile: "SearchProfile";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const EmployerScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
};
export type EmployerScalarFieldEnum = (typeof EmployerScalarFieldEnum)[keyof typeof EmployerScalarFieldEnum];
export declare const VacancyScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly employerId: "employerId";
    readonly areaId: "areaId";
    readonly publishedAt: "publishedAt";
    readonly archived: "archived";
    readonly url: "url";
    readonly salaryFrom: "salaryFrom";
    readonly salaryTo: "salaryTo";
    readonly currency: "currency";
    readonly professionalRoles: "professionalRoles";
    readonly experience: "experience";
    readonly updatedAt: "updatedAt";
};
export type VacancyScalarFieldEnum = (typeof VacancyScalarFieldEnum)[keyof typeof VacancyScalarFieldEnum];
export declare const VacancySkillScalarFieldEnum: {
    readonly vacancyId: "vacancyId";
    readonly skillName: "skillName";
};
export type VacancySkillScalarFieldEnum = (typeof VacancySkillScalarFieldEnum)[keyof typeof VacancySkillScalarFieldEnum];
export declare const RawItemScalarFieldEnum: {
    readonly source: "source";
    readonly hhId: "hhId";
    readonly payload: "payload";
    readonly fetchedAt: "fetchedAt";
};
export type RawItemScalarFieldEnum = (typeof RawItemScalarFieldEnum)[keyof typeof RawItemScalarFieldEnum];
export declare const SyncStateScalarFieldEnum: {
    readonly source: "source";
    readonly lastSeen: "lastSeen";
    readonly page: "page";
};
export type SyncStateScalarFieldEnum = (typeof SyncStateScalarFieldEnum)[keyof typeof SyncStateScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly password: "password";
    readonly role: "role";
    readonly emailVerified: "emailVerified";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const ManagerTokenScalarFieldEnum: {
    readonly managerId: "managerId";
    readonly accessToken: "accessToken";
    readonly refreshToken: "refreshToken";
    readonly dailyLimit: "dailyLimit";
    readonly usedToday: "usedToday";
    readonly lastReset: "lastReset";
    readonly updatedAt: "updatedAt";
};
export type ManagerTokenScalarFieldEnum = (typeof ManagerTokenScalarFieldEnum)[keyof typeof ManagerTokenScalarFieldEnum];
export declare const ResumeScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly areaId: "areaId";
    readonly areaName: "areaName";
    readonly experienceYears: "experienceYears";
    readonly salaryDesired: "salaryDesired";
    readonly currency: "currency";
    readonly updatedAt: "updatedAt";
    readonly rawSource: "rawSource";
    readonly rawId: "rawId";
};
export type ResumeScalarFieldEnum = (typeof ResumeScalarFieldEnum)[keyof typeof ResumeScalarFieldEnum];
export declare const ResumeSkillScalarFieldEnum: {
    readonly resumeId: "resumeId";
    readonly skillName: "skillName";
};
export type ResumeSkillScalarFieldEnum = (typeof ResumeSkillScalarFieldEnum)[keyof typeof ResumeSkillScalarFieldEnum];
export declare const ResumeViewAuditScalarFieldEnum: {
    readonly id: "id";
    readonly managerId: "managerId";
    readonly resumeId: "resumeId";
    readonly viewedAt: "viewedAt";
};
export type ResumeViewAuditScalarFieldEnum = (typeof ResumeViewAuditScalarFieldEnum)[keyof typeof ResumeViewAuditScalarFieldEnum];
export declare const SearchProfileScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly entityType: "entityType";
    readonly params: "params";
    readonly enabled: "enabled";
    readonly scheduleCron: "scheduleCron";
    readonly lastRun: "lastRun";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SearchProfileScalarFieldEnum = (typeof SearchProfileScalarFieldEnum)[keyof typeof SearchProfileScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    readonly JsonNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const JsonNullValueFilter: {
    readonly DbNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    readonly JsonNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    readonly AnyNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

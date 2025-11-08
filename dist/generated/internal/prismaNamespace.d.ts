import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Metrics = runtime.Metrics;
export type Metric<T> = runtime.Metric<T>;
export type MetricHistogram = runtime.MetricHistogram;
export type MetricHistogramBucket = runtime.MetricHistogramBucket;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
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
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "employer" | "vacancy" | "vacancySkill" | "rawItem" | "syncState" | "user" | "managerToken" | "resume" | "resumeSkill" | "resumeViewAudit" | "searchProfile";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Employer: {
            payload: Prisma.$EmployerPayload<ExtArgs>;
            fields: Prisma.EmployerFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EmployerFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployerPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EmployerFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployerPayload>;
                };
                findFirst: {
                    args: Prisma.EmployerFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployerPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EmployerFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployerPayload>;
                };
                findMany: {
                    args: Prisma.EmployerFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployerPayload>[];
                };
                create: {
                    args: Prisma.EmployerCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployerPayload>;
                };
                createMany: {
                    args: Prisma.EmployerCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EmployerCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployerPayload>[];
                };
                delete: {
                    args: Prisma.EmployerDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployerPayload>;
                };
                update: {
                    args: Prisma.EmployerUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployerPayload>;
                };
                deleteMany: {
                    args: Prisma.EmployerDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EmployerUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EmployerUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployerPayload>[];
                };
                upsert: {
                    args: Prisma.EmployerUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployerPayload>;
                };
                aggregate: {
                    args: Prisma.EmployerAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEmployer>;
                };
                groupBy: {
                    args: Prisma.EmployerGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EmployerGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EmployerCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EmployerCountAggregateOutputType> | number;
                };
            };
        };
        Vacancy: {
            payload: Prisma.$VacancyPayload<ExtArgs>;
            fields: Prisma.VacancyFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.VacancyFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VacancyPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.VacancyFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VacancyPayload>;
                };
                findFirst: {
                    args: Prisma.VacancyFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VacancyPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.VacancyFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VacancyPayload>;
                };
                findMany: {
                    args: Prisma.VacancyFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VacancyPayload>[];
                };
                create: {
                    args: Prisma.VacancyCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VacancyPayload>;
                };
                createMany: {
                    args: Prisma.VacancyCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.VacancyCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VacancyPayload>[];
                };
                delete: {
                    args: Prisma.VacancyDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VacancyPayload>;
                };
                update: {
                    args: Prisma.VacancyUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VacancyPayload>;
                };
                deleteMany: {
                    args: Prisma.VacancyDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.VacancyUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.VacancyUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VacancyPayload>[];
                };
                upsert: {
                    args: Prisma.VacancyUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VacancyPayload>;
                };
                aggregate: {
                    args: Prisma.VacancyAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVacancy>;
                };
                groupBy: {
                    args: Prisma.VacancyGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VacancyGroupByOutputType>[];
                };
                count: {
                    args: Prisma.VacancyCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VacancyCountAggregateOutputType> | number;
                };
            };
        };
        VacancySkill: {
            payload: Prisma.$VacancySkillPayload<ExtArgs>;
            fields: Prisma.VacancySkillFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.VacancySkillFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VacancySkillPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.VacancySkillFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VacancySkillPayload>;
                };
                findFirst: {
                    args: Prisma.VacancySkillFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VacancySkillPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.VacancySkillFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VacancySkillPayload>;
                };
                findMany: {
                    args: Prisma.VacancySkillFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VacancySkillPayload>[];
                };
                create: {
                    args: Prisma.VacancySkillCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VacancySkillPayload>;
                };
                createMany: {
                    args: Prisma.VacancySkillCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.VacancySkillCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VacancySkillPayload>[];
                };
                delete: {
                    args: Prisma.VacancySkillDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VacancySkillPayload>;
                };
                update: {
                    args: Prisma.VacancySkillUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VacancySkillPayload>;
                };
                deleteMany: {
                    args: Prisma.VacancySkillDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.VacancySkillUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.VacancySkillUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VacancySkillPayload>[];
                };
                upsert: {
                    args: Prisma.VacancySkillUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VacancySkillPayload>;
                };
                aggregate: {
                    args: Prisma.VacancySkillAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVacancySkill>;
                };
                groupBy: {
                    args: Prisma.VacancySkillGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VacancySkillGroupByOutputType>[];
                };
                count: {
                    args: Prisma.VacancySkillCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VacancySkillCountAggregateOutputType> | number;
                };
            };
        };
        RawItem: {
            payload: Prisma.$RawItemPayload<ExtArgs>;
            fields: Prisma.RawItemFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RawItemFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RawItemPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RawItemFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RawItemPayload>;
                };
                findFirst: {
                    args: Prisma.RawItemFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RawItemPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RawItemFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RawItemPayload>;
                };
                findMany: {
                    args: Prisma.RawItemFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RawItemPayload>[];
                };
                create: {
                    args: Prisma.RawItemCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RawItemPayload>;
                };
                createMany: {
                    args: Prisma.RawItemCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RawItemCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RawItemPayload>[];
                };
                delete: {
                    args: Prisma.RawItemDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RawItemPayload>;
                };
                update: {
                    args: Prisma.RawItemUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RawItemPayload>;
                };
                deleteMany: {
                    args: Prisma.RawItemDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RawItemUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RawItemUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RawItemPayload>[];
                };
                upsert: {
                    args: Prisma.RawItemUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RawItemPayload>;
                };
                aggregate: {
                    args: Prisma.RawItemAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRawItem>;
                };
                groupBy: {
                    args: Prisma.RawItemGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RawItemGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RawItemCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RawItemCountAggregateOutputType> | number;
                };
            };
        };
        SyncState: {
            payload: Prisma.$SyncStatePayload<ExtArgs>;
            fields: Prisma.SyncStateFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SyncStateFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SyncStatePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SyncStateFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SyncStatePayload>;
                };
                findFirst: {
                    args: Prisma.SyncStateFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SyncStatePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SyncStateFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SyncStatePayload>;
                };
                findMany: {
                    args: Prisma.SyncStateFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SyncStatePayload>[];
                };
                create: {
                    args: Prisma.SyncStateCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SyncStatePayload>;
                };
                createMany: {
                    args: Prisma.SyncStateCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SyncStateCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SyncStatePayload>[];
                };
                delete: {
                    args: Prisma.SyncStateDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SyncStatePayload>;
                };
                update: {
                    args: Prisma.SyncStateUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SyncStatePayload>;
                };
                deleteMany: {
                    args: Prisma.SyncStateDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SyncStateUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SyncStateUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SyncStatePayload>[];
                };
                upsert: {
                    args: Prisma.SyncStateUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SyncStatePayload>;
                };
                aggregate: {
                    args: Prisma.SyncStateAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSyncState>;
                };
                groupBy: {
                    args: Prisma.SyncStateGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SyncStateGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SyncStateCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SyncStateCountAggregateOutputType> | number;
                };
            };
        };
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        ManagerToken: {
            payload: Prisma.$ManagerTokenPayload<ExtArgs>;
            fields: Prisma.ManagerTokenFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ManagerTokenFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ManagerTokenPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ManagerTokenFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ManagerTokenPayload>;
                };
                findFirst: {
                    args: Prisma.ManagerTokenFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ManagerTokenPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ManagerTokenFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ManagerTokenPayload>;
                };
                findMany: {
                    args: Prisma.ManagerTokenFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ManagerTokenPayload>[];
                };
                create: {
                    args: Prisma.ManagerTokenCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ManagerTokenPayload>;
                };
                createMany: {
                    args: Prisma.ManagerTokenCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ManagerTokenCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ManagerTokenPayload>[];
                };
                delete: {
                    args: Prisma.ManagerTokenDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ManagerTokenPayload>;
                };
                update: {
                    args: Prisma.ManagerTokenUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ManagerTokenPayload>;
                };
                deleteMany: {
                    args: Prisma.ManagerTokenDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ManagerTokenUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ManagerTokenUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ManagerTokenPayload>[];
                };
                upsert: {
                    args: Prisma.ManagerTokenUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ManagerTokenPayload>;
                };
                aggregate: {
                    args: Prisma.ManagerTokenAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateManagerToken>;
                };
                groupBy: {
                    args: Prisma.ManagerTokenGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ManagerTokenGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ManagerTokenCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ManagerTokenCountAggregateOutputType> | number;
                };
            };
        };
        Resume: {
            payload: Prisma.$ResumePayload<ExtArgs>;
            fields: Prisma.ResumeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ResumeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ResumeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumePayload>;
                };
                findFirst: {
                    args: Prisma.ResumeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ResumeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumePayload>;
                };
                findMany: {
                    args: Prisma.ResumeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumePayload>[];
                };
                create: {
                    args: Prisma.ResumeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumePayload>;
                };
                createMany: {
                    args: Prisma.ResumeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ResumeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumePayload>[];
                };
                delete: {
                    args: Prisma.ResumeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumePayload>;
                };
                update: {
                    args: Prisma.ResumeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumePayload>;
                };
                deleteMany: {
                    args: Prisma.ResumeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ResumeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ResumeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumePayload>[];
                };
                upsert: {
                    args: Prisma.ResumeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumePayload>;
                };
                aggregate: {
                    args: Prisma.ResumeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateResume>;
                };
                groupBy: {
                    args: Prisma.ResumeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ResumeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ResumeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ResumeCountAggregateOutputType> | number;
                };
            };
        };
        ResumeSkill: {
            payload: Prisma.$ResumeSkillPayload<ExtArgs>;
            fields: Prisma.ResumeSkillFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ResumeSkillFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumeSkillPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ResumeSkillFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumeSkillPayload>;
                };
                findFirst: {
                    args: Prisma.ResumeSkillFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumeSkillPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ResumeSkillFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumeSkillPayload>;
                };
                findMany: {
                    args: Prisma.ResumeSkillFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumeSkillPayload>[];
                };
                create: {
                    args: Prisma.ResumeSkillCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumeSkillPayload>;
                };
                createMany: {
                    args: Prisma.ResumeSkillCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ResumeSkillCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumeSkillPayload>[];
                };
                delete: {
                    args: Prisma.ResumeSkillDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumeSkillPayload>;
                };
                update: {
                    args: Prisma.ResumeSkillUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumeSkillPayload>;
                };
                deleteMany: {
                    args: Prisma.ResumeSkillDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ResumeSkillUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ResumeSkillUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumeSkillPayload>[];
                };
                upsert: {
                    args: Prisma.ResumeSkillUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumeSkillPayload>;
                };
                aggregate: {
                    args: Prisma.ResumeSkillAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateResumeSkill>;
                };
                groupBy: {
                    args: Prisma.ResumeSkillGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ResumeSkillGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ResumeSkillCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ResumeSkillCountAggregateOutputType> | number;
                };
            };
        };
        ResumeViewAudit: {
            payload: Prisma.$ResumeViewAuditPayload<ExtArgs>;
            fields: Prisma.ResumeViewAuditFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ResumeViewAuditFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumeViewAuditPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ResumeViewAuditFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumeViewAuditPayload>;
                };
                findFirst: {
                    args: Prisma.ResumeViewAuditFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumeViewAuditPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ResumeViewAuditFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumeViewAuditPayload>;
                };
                findMany: {
                    args: Prisma.ResumeViewAuditFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumeViewAuditPayload>[];
                };
                create: {
                    args: Prisma.ResumeViewAuditCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumeViewAuditPayload>;
                };
                createMany: {
                    args: Prisma.ResumeViewAuditCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ResumeViewAuditCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumeViewAuditPayload>[];
                };
                delete: {
                    args: Prisma.ResumeViewAuditDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumeViewAuditPayload>;
                };
                update: {
                    args: Prisma.ResumeViewAuditUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumeViewAuditPayload>;
                };
                deleteMany: {
                    args: Prisma.ResumeViewAuditDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ResumeViewAuditUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ResumeViewAuditUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumeViewAuditPayload>[];
                };
                upsert: {
                    args: Prisma.ResumeViewAuditUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumeViewAuditPayload>;
                };
                aggregate: {
                    args: Prisma.ResumeViewAuditAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateResumeViewAudit>;
                };
                groupBy: {
                    args: Prisma.ResumeViewAuditGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ResumeViewAuditGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ResumeViewAuditCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ResumeViewAuditCountAggregateOutputType> | number;
                };
            };
        };
        SearchProfile: {
            payload: Prisma.$SearchProfilePayload<ExtArgs>;
            fields: Prisma.SearchProfileFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SearchProfileFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SearchProfilePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SearchProfileFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SearchProfilePayload>;
                };
                findFirst: {
                    args: Prisma.SearchProfileFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SearchProfilePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SearchProfileFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SearchProfilePayload>;
                };
                findMany: {
                    args: Prisma.SearchProfileFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SearchProfilePayload>[];
                };
                create: {
                    args: Prisma.SearchProfileCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SearchProfilePayload>;
                };
                createMany: {
                    args: Prisma.SearchProfileCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SearchProfileCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SearchProfilePayload>[];
                };
                delete: {
                    args: Prisma.SearchProfileDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SearchProfilePayload>;
                };
                update: {
                    args: Prisma.SearchProfileUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SearchProfilePayload>;
                };
                deleteMany: {
                    args: Prisma.SearchProfileDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SearchProfileUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SearchProfileUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SearchProfilePayload>[];
                };
                upsert: {
                    args: Prisma.SearchProfileUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SearchProfilePayload>;
                };
                aggregate: {
                    args: Prisma.SearchProfileAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSearchProfile>;
                };
                groupBy: {
                    args: Prisma.SearchProfileGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SearchProfileGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SearchProfileCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SearchProfileCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
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
export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>;
export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>;
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export type Datasource = {
    url?: string;
};
export type Datasources = {
    db?: Datasource;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientOptions {
    datasources?: Datasources;
    datasourceUrl?: string;
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    adapter?: runtime.SqlDriverAdapterFactory | null;
    omit?: GlobalOmitConfig;
}
export type GlobalOmitConfig = {
    employer?: Prisma.EmployerOmit;
    vacancy?: Prisma.VacancyOmit;
    vacancySkill?: Prisma.VacancySkillOmit;
    rawItem?: Prisma.RawItemOmit;
    syncState?: Prisma.SyncStateOmit;
    user?: Prisma.UserOmit;
    managerToken?: Prisma.ManagerTokenOmit;
    resume?: Prisma.ResumeOmit;
    resumeSkill?: Prisma.ResumeSkillOmit;
    resumeViewAudit?: Prisma.ResumeViewAuditOmit;
    searchProfile?: Prisma.SearchProfileOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;

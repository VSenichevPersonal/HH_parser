import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ManagerTokenModel = runtime.Types.Result.DefaultSelection<Prisma.$ManagerTokenPayload>;
export type AggregateManagerToken = {
    _count: ManagerTokenCountAggregateOutputType | null;
    _avg: ManagerTokenAvgAggregateOutputType | null;
    _sum: ManagerTokenSumAggregateOutputType | null;
    _min: ManagerTokenMinAggregateOutputType | null;
    _max: ManagerTokenMaxAggregateOutputType | null;
};
export type ManagerTokenAvgAggregateOutputType = {
    managerId: number | null;
    dailyLimit: number | null;
    usedToday: number | null;
};
export type ManagerTokenSumAggregateOutputType = {
    managerId: bigint | null;
    dailyLimit: number | null;
    usedToday: number | null;
};
export type ManagerTokenMinAggregateOutputType = {
    managerId: bigint | null;
    accessToken: string | null;
    refreshToken: string | null;
    dailyLimit: number | null;
    usedToday: number | null;
    lastReset: Date | null;
    updatedAt: Date | null;
};
export type ManagerTokenMaxAggregateOutputType = {
    managerId: bigint | null;
    accessToken: string | null;
    refreshToken: string | null;
    dailyLimit: number | null;
    usedToday: number | null;
    lastReset: Date | null;
    updatedAt: Date | null;
};
export type ManagerTokenCountAggregateOutputType = {
    managerId: number;
    accessToken: number;
    refreshToken: number;
    dailyLimit: number;
    usedToday: number;
    lastReset: number;
    updatedAt: number;
    _all: number;
};
export type ManagerTokenAvgAggregateInputType = {
    managerId?: true;
    dailyLimit?: true;
    usedToday?: true;
};
export type ManagerTokenSumAggregateInputType = {
    managerId?: true;
    dailyLimit?: true;
    usedToday?: true;
};
export type ManagerTokenMinAggregateInputType = {
    managerId?: true;
    accessToken?: true;
    refreshToken?: true;
    dailyLimit?: true;
    usedToday?: true;
    lastReset?: true;
    updatedAt?: true;
};
export type ManagerTokenMaxAggregateInputType = {
    managerId?: true;
    accessToken?: true;
    refreshToken?: true;
    dailyLimit?: true;
    usedToday?: true;
    lastReset?: true;
    updatedAt?: true;
};
export type ManagerTokenCountAggregateInputType = {
    managerId?: true;
    accessToken?: true;
    refreshToken?: true;
    dailyLimit?: true;
    usedToday?: true;
    lastReset?: true;
    updatedAt?: true;
    _all?: true;
};
export type ManagerTokenAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ManagerTokenWhereInput;
    orderBy?: Prisma.ManagerTokenOrderByWithRelationInput | Prisma.ManagerTokenOrderByWithRelationInput[];
    cursor?: Prisma.ManagerTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ManagerTokenCountAggregateInputType;
    _avg?: ManagerTokenAvgAggregateInputType;
    _sum?: ManagerTokenSumAggregateInputType;
    _min?: ManagerTokenMinAggregateInputType;
    _max?: ManagerTokenMaxAggregateInputType;
};
export type GetManagerTokenAggregateType<T extends ManagerTokenAggregateArgs> = {
    [P in keyof T & keyof AggregateManagerToken]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateManagerToken[P]> : Prisma.GetScalarType<T[P], AggregateManagerToken[P]>;
};
export type ManagerTokenGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ManagerTokenWhereInput;
    orderBy?: Prisma.ManagerTokenOrderByWithAggregationInput | Prisma.ManagerTokenOrderByWithAggregationInput[];
    by: Prisma.ManagerTokenScalarFieldEnum[] | Prisma.ManagerTokenScalarFieldEnum;
    having?: Prisma.ManagerTokenScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ManagerTokenCountAggregateInputType | true;
    _avg?: ManagerTokenAvgAggregateInputType;
    _sum?: ManagerTokenSumAggregateInputType;
    _min?: ManagerTokenMinAggregateInputType;
    _max?: ManagerTokenMaxAggregateInputType;
};
export type ManagerTokenGroupByOutputType = {
    managerId: bigint;
    accessToken: string;
    refreshToken: string | null;
    dailyLimit: number;
    usedToday: number;
    lastReset: Date;
    updatedAt: Date;
    _count: ManagerTokenCountAggregateOutputType | null;
    _avg: ManagerTokenAvgAggregateOutputType | null;
    _sum: ManagerTokenSumAggregateOutputType | null;
    _min: ManagerTokenMinAggregateOutputType | null;
    _max: ManagerTokenMaxAggregateOutputType | null;
};
type GetManagerTokenGroupByPayload<T extends ManagerTokenGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ManagerTokenGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ManagerTokenGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ManagerTokenGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ManagerTokenGroupByOutputType[P]>;
}>>;
export type ManagerTokenWhereInput = {
    AND?: Prisma.ManagerTokenWhereInput | Prisma.ManagerTokenWhereInput[];
    OR?: Prisma.ManagerTokenWhereInput[];
    NOT?: Prisma.ManagerTokenWhereInput | Prisma.ManagerTokenWhereInput[];
    managerId?: Prisma.BigIntFilter<"ManagerToken"> | bigint | number;
    accessToken?: Prisma.StringFilter<"ManagerToken"> | string;
    refreshToken?: Prisma.StringNullableFilter<"ManagerToken"> | string | null;
    dailyLimit?: Prisma.IntFilter<"ManagerToken"> | number;
    usedToday?: Prisma.IntFilter<"ManagerToken"> | number;
    lastReset?: Prisma.DateTimeFilter<"ManagerToken"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ManagerToken"> | Date | string;
    resumeAudits?: Prisma.ResumeViewAuditListRelationFilter;
};
export type ManagerTokenOrderByWithRelationInput = {
    managerId?: Prisma.SortOrder;
    accessToken?: Prisma.SortOrder;
    refreshToken?: Prisma.SortOrderInput | Prisma.SortOrder;
    dailyLimit?: Prisma.SortOrder;
    usedToday?: Prisma.SortOrder;
    lastReset?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    resumeAudits?: Prisma.ResumeViewAuditOrderByRelationAggregateInput;
};
export type ManagerTokenWhereUniqueInput = Prisma.AtLeast<{
    managerId?: bigint | number;
    AND?: Prisma.ManagerTokenWhereInput | Prisma.ManagerTokenWhereInput[];
    OR?: Prisma.ManagerTokenWhereInput[];
    NOT?: Prisma.ManagerTokenWhereInput | Prisma.ManagerTokenWhereInput[];
    accessToken?: Prisma.StringFilter<"ManagerToken"> | string;
    refreshToken?: Prisma.StringNullableFilter<"ManagerToken"> | string | null;
    dailyLimit?: Prisma.IntFilter<"ManagerToken"> | number;
    usedToday?: Prisma.IntFilter<"ManagerToken"> | number;
    lastReset?: Prisma.DateTimeFilter<"ManagerToken"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ManagerToken"> | Date | string;
    resumeAudits?: Prisma.ResumeViewAuditListRelationFilter;
}, "managerId">;
export type ManagerTokenOrderByWithAggregationInput = {
    managerId?: Prisma.SortOrder;
    accessToken?: Prisma.SortOrder;
    refreshToken?: Prisma.SortOrderInput | Prisma.SortOrder;
    dailyLimit?: Prisma.SortOrder;
    usedToday?: Prisma.SortOrder;
    lastReset?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ManagerTokenCountOrderByAggregateInput;
    _avg?: Prisma.ManagerTokenAvgOrderByAggregateInput;
    _max?: Prisma.ManagerTokenMaxOrderByAggregateInput;
    _min?: Prisma.ManagerTokenMinOrderByAggregateInput;
    _sum?: Prisma.ManagerTokenSumOrderByAggregateInput;
};
export type ManagerTokenScalarWhereWithAggregatesInput = {
    AND?: Prisma.ManagerTokenScalarWhereWithAggregatesInput | Prisma.ManagerTokenScalarWhereWithAggregatesInput[];
    OR?: Prisma.ManagerTokenScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ManagerTokenScalarWhereWithAggregatesInput | Prisma.ManagerTokenScalarWhereWithAggregatesInput[];
    managerId?: Prisma.BigIntWithAggregatesFilter<"ManagerToken"> | bigint | number;
    accessToken?: Prisma.StringWithAggregatesFilter<"ManagerToken"> | string;
    refreshToken?: Prisma.StringNullableWithAggregatesFilter<"ManagerToken"> | string | null;
    dailyLimit?: Prisma.IntWithAggregatesFilter<"ManagerToken"> | number;
    usedToday?: Prisma.IntWithAggregatesFilter<"ManagerToken"> | number;
    lastReset?: Prisma.DateTimeWithAggregatesFilter<"ManagerToken"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ManagerToken"> | Date | string;
};
export type ManagerTokenCreateInput = {
    managerId: bigint | number;
    accessToken: string;
    refreshToken?: string | null;
    dailyLimit?: number;
    usedToday?: number;
    lastReset?: Date | string;
    updatedAt?: Date | string;
    resumeAudits?: Prisma.ResumeViewAuditCreateNestedManyWithoutManagerInput;
};
export type ManagerTokenUncheckedCreateInput = {
    managerId: bigint | number;
    accessToken: string;
    refreshToken?: string | null;
    dailyLimit?: number;
    usedToday?: number;
    lastReset?: Date | string;
    updatedAt?: Date | string;
    resumeAudits?: Prisma.ResumeViewAuditUncheckedCreateNestedManyWithoutManagerInput;
};
export type ManagerTokenUpdateInput = {
    managerId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    accessToken?: Prisma.StringFieldUpdateOperationsInput | string;
    refreshToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dailyLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    usedToday?: Prisma.IntFieldUpdateOperationsInput | number;
    lastReset?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resumeAudits?: Prisma.ResumeViewAuditUpdateManyWithoutManagerNestedInput;
};
export type ManagerTokenUncheckedUpdateInput = {
    managerId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    accessToken?: Prisma.StringFieldUpdateOperationsInput | string;
    refreshToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dailyLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    usedToday?: Prisma.IntFieldUpdateOperationsInput | number;
    lastReset?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resumeAudits?: Prisma.ResumeViewAuditUncheckedUpdateManyWithoutManagerNestedInput;
};
export type ManagerTokenCreateManyInput = {
    managerId: bigint | number;
    accessToken: string;
    refreshToken?: string | null;
    dailyLimit?: number;
    usedToday?: number;
    lastReset?: Date | string;
    updatedAt?: Date | string;
};
export type ManagerTokenUpdateManyMutationInput = {
    managerId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    accessToken?: Prisma.StringFieldUpdateOperationsInput | string;
    refreshToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dailyLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    usedToday?: Prisma.IntFieldUpdateOperationsInput | number;
    lastReset?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ManagerTokenUncheckedUpdateManyInput = {
    managerId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    accessToken?: Prisma.StringFieldUpdateOperationsInput | string;
    refreshToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dailyLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    usedToday?: Prisma.IntFieldUpdateOperationsInput | number;
    lastReset?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ManagerTokenCountOrderByAggregateInput = {
    managerId?: Prisma.SortOrder;
    accessToken?: Prisma.SortOrder;
    refreshToken?: Prisma.SortOrder;
    dailyLimit?: Prisma.SortOrder;
    usedToday?: Prisma.SortOrder;
    lastReset?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ManagerTokenAvgOrderByAggregateInput = {
    managerId?: Prisma.SortOrder;
    dailyLimit?: Prisma.SortOrder;
    usedToday?: Prisma.SortOrder;
};
export type ManagerTokenMaxOrderByAggregateInput = {
    managerId?: Prisma.SortOrder;
    accessToken?: Prisma.SortOrder;
    refreshToken?: Prisma.SortOrder;
    dailyLimit?: Prisma.SortOrder;
    usedToday?: Prisma.SortOrder;
    lastReset?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ManagerTokenMinOrderByAggregateInput = {
    managerId?: Prisma.SortOrder;
    accessToken?: Prisma.SortOrder;
    refreshToken?: Prisma.SortOrder;
    dailyLimit?: Prisma.SortOrder;
    usedToday?: Prisma.SortOrder;
    lastReset?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ManagerTokenSumOrderByAggregateInput = {
    managerId?: Prisma.SortOrder;
    dailyLimit?: Prisma.SortOrder;
    usedToday?: Prisma.SortOrder;
};
export type ManagerTokenScalarRelationFilter = {
    is?: Prisma.ManagerTokenWhereInput;
    isNot?: Prisma.ManagerTokenWhereInput;
};
export type ManagerTokenCreateNestedOneWithoutResumeAuditsInput = {
    create?: Prisma.XOR<Prisma.ManagerTokenCreateWithoutResumeAuditsInput, Prisma.ManagerTokenUncheckedCreateWithoutResumeAuditsInput>;
    connectOrCreate?: Prisma.ManagerTokenCreateOrConnectWithoutResumeAuditsInput;
    connect?: Prisma.ManagerTokenWhereUniqueInput;
};
export type ManagerTokenUpdateOneRequiredWithoutResumeAuditsNestedInput = {
    create?: Prisma.XOR<Prisma.ManagerTokenCreateWithoutResumeAuditsInput, Prisma.ManagerTokenUncheckedCreateWithoutResumeAuditsInput>;
    connectOrCreate?: Prisma.ManagerTokenCreateOrConnectWithoutResumeAuditsInput;
    upsert?: Prisma.ManagerTokenUpsertWithoutResumeAuditsInput;
    connect?: Prisma.ManagerTokenWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ManagerTokenUpdateToOneWithWhereWithoutResumeAuditsInput, Prisma.ManagerTokenUpdateWithoutResumeAuditsInput>, Prisma.ManagerTokenUncheckedUpdateWithoutResumeAuditsInput>;
};
export type ManagerTokenCreateWithoutResumeAuditsInput = {
    managerId: bigint | number;
    accessToken: string;
    refreshToken?: string | null;
    dailyLimit?: number;
    usedToday?: number;
    lastReset?: Date | string;
    updatedAt?: Date | string;
};
export type ManagerTokenUncheckedCreateWithoutResumeAuditsInput = {
    managerId: bigint | number;
    accessToken: string;
    refreshToken?: string | null;
    dailyLimit?: number;
    usedToday?: number;
    lastReset?: Date | string;
    updatedAt?: Date | string;
};
export type ManagerTokenCreateOrConnectWithoutResumeAuditsInput = {
    where: Prisma.ManagerTokenWhereUniqueInput;
    create: Prisma.XOR<Prisma.ManagerTokenCreateWithoutResumeAuditsInput, Prisma.ManagerTokenUncheckedCreateWithoutResumeAuditsInput>;
};
export type ManagerTokenUpsertWithoutResumeAuditsInput = {
    update: Prisma.XOR<Prisma.ManagerTokenUpdateWithoutResumeAuditsInput, Prisma.ManagerTokenUncheckedUpdateWithoutResumeAuditsInput>;
    create: Prisma.XOR<Prisma.ManagerTokenCreateWithoutResumeAuditsInput, Prisma.ManagerTokenUncheckedCreateWithoutResumeAuditsInput>;
    where?: Prisma.ManagerTokenWhereInput;
};
export type ManagerTokenUpdateToOneWithWhereWithoutResumeAuditsInput = {
    where?: Prisma.ManagerTokenWhereInput;
    data: Prisma.XOR<Prisma.ManagerTokenUpdateWithoutResumeAuditsInput, Prisma.ManagerTokenUncheckedUpdateWithoutResumeAuditsInput>;
};
export type ManagerTokenUpdateWithoutResumeAuditsInput = {
    managerId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    accessToken?: Prisma.StringFieldUpdateOperationsInput | string;
    refreshToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dailyLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    usedToday?: Prisma.IntFieldUpdateOperationsInput | number;
    lastReset?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ManagerTokenUncheckedUpdateWithoutResumeAuditsInput = {
    managerId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    accessToken?: Prisma.StringFieldUpdateOperationsInput | string;
    refreshToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dailyLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    usedToday?: Prisma.IntFieldUpdateOperationsInput | number;
    lastReset?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ManagerTokenCountOutputType = {
    resumeAudits: number;
};
export type ManagerTokenCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    resumeAudits?: boolean | ManagerTokenCountOutputTypeCountResumeAuditsArgs;
};
export type ManagerTokenCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ManagerTokenCountOutputTypeSelect<ExtArgs> | null;
};
export type ManagerTokenCountOutputTypeCountResumeAuditsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ResumeViewAuditWhereInput;
};
export type ManagerTokenSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    managerId?: boolean;
    accessToken?: boolean;
    refreshToken?: boolean;
    dailyLimit?: boolean;
    usedToday?: boolean;
    lastReset?: boolean;
    updatedAt?: boolean;
    resumeAudits?: boolean | Prisma.ManagerToken$resumeAuditsArgs<ExtArgs>;
    _count?: boolean | Prisma.ManagerTokenCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["managerToken"]>;
export type ManagerTokenSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    managerId?: boolean;
    accessToken?: boolean;
    refreshToken?: boolean;
    dailyLimit?: boolean;
    usedToday?: boolean;
    lastReset?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["managerToken"]>;
export type ManagerTokenSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    managerId?: boolean;
    accessToken?: boolean;
    refreshToken?: boolean;
    dailyLimit?: boolean;
    usedToday?: boolean;
    lastReset?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["managerToken"]>;
export type ManagerTokenSelectScalar = {
    managerId?: boolean;
    accessToken?: boolean;
    refreshToken?: boolean;
    dailyLimit?: boolean;
    usedToday?: boolean;
    lastReset?: boolean;
    updatedAt?: boolean;
};
export type ManagerTokenOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"managerId" | "accessToken" | "refreshToken" | "dailyLimit" | "usedToday" | "lastReset" | "updatedAt", ExtArgs["result"]["managerToken"]>;
export type ManagerTokenInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    resumeAudits?: boolean | Prisma.ManagerToken$resumeAuditsArgs<ExtArgs>;
    _count?: boolean | Prisma.ManagerTokenCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ManagerTokenIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ManagerTokenIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ManagerTokenPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ManagerToken";
    objects: {
        resumeAudits: Prisma.$ResumeViewAuditPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        managerId: bigint;
        accessToken: string;
        refreshToken: string | null;
        dailyLimit: number;
        usedToday: number;
        lastReset: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["managerToken"]>;
    composites: {};
};
export type ManagerTokenGetPayload<S extends boolean | null | undefined | ManagerTokenDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ManagerTokenPayload, S>;
export type ManagerTokenCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ManagerTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ManagerTokenCountAggregateInputType | true;
};
export interface ManagerTokenDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ManagerToken'];
        meta: {
            name: 'ManagerToken';
        };
    };
    findUnique<T extends ManagerTokenFindUniqueArgs>(args: Prisma.SelectSubset<T, ManagerTokenFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ManagerTokenClient<runtime.Types.Result.GetResult<Prisma.$ManagerTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ManagerTokenFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ManagerTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ManagerTokenClient<runtime.Types.Result.GetResult<Prisma.$ManagerTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ManagerTokenFindFirstArgs>(args?: Prisma.SelectSubset<T, ManagerTokenFindFirstArgs<ExtArgs>>): Prisma.Prisma__ManagerTokenClient<runtime.Types.Result.GetResult<Prisma.$ManagerTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ManagerTokenFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ManagerTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ManagerTokenClient<runtime.Types.Result.GetResult<Prisma.$ManagerTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ManagerTokenFindManyArgs>(args?: Prisma.SelectSubset<T, ManagerTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ManagerTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ManagerTokenCreateArgs>(args: Prisma.SelectSubset<T, ManagerTokenCreateArgs<ExtArgs>>): Prisma.Prisma__ManagerTokenClient<runtime.Types.Result.GetResult<Prisma.$ManagerTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ManagerTokenCreateManyArgs>(args?: Prisma.SelectSubset<T, ManagerTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ManagerTokenCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ManagerTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ManagerTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ManagerTokenDeleteArgs>(args: Prisma.SelectSubset<T, ManagerTokenDeleteArgs<ExtArgs>>): Prisma.Prisma__ManagerTokenClient<runtime.Types.Result.GetResult<Prisma.$ManagerTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ManagerTokenUpdateArgs>(args: Prisma.SelectSubset<T, ManagerTokenUpdateArgs<ExtArgs>>): Prisma.Prisma__ManagerTokenClient<runtime.Types.Result.GetResult<Prisma.$ManagerTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ManagerTokenDeleteManyArgs>(args?: Prisma.SelectSubset<T, ManagerTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ManagerTokenUpdateManyArgs>(args: Prisma.SelectSubset<T, ManagerTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ManagerTokenUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ManagerTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ManagerTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ManagerTokenUpsertArgs>(args: Prisma.SelectSubset<T, ManagerTokenUpsertArgs<ExtArgs>>): Prisma.Prisma__ManagerTokenClient<runtime.Types.Result.GetResult<Prisma.$ManagerTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ManagerTokenCountArgs>(args?: Prisma.Subset<T, ManagerTokenCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ManagerTokenCountAggregateOutputType> : number>;
    aggregate<T extends ManagerTokenAggregateArgs>(args: Prisma.Subset<T, ManagerTokenAggregateArgs>): Prisma.PrismaPromise<GetManagerTokenAggregateType<T>>;
    groupBy<T extends ManagerTokenGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ManagerTokenGroupByArgs['orderBy'];
    } : {
        orderBy?: ManagerTokenGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ManagerTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManagerTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ManagerTokenFieldRefs;
}
export interface Prisma__ManagerTokenClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    resumeAudits<T extends Prisma.ManagerToken$resumeAuditsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ManagerToken$resumeAuditsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ResumeViewAuditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ManagerTokenFieldRefs {
    readonly managerId: Prisma.FieldRef<"ManagerToken", 'BigInt'>;
    readonly accessToken: Prisma.FieldRef<"ManagerToken", 'String'>;
    readonly refreshToken: Prisma.FieldRef<"ManagerToken", 'String'>;
    readonly dailyLimit: Prisma.FieldRef<"ManagerToken", 'Int'>;
    readonly usedToday: Prisma.FieldRef<"ManagerToken", 'Int'>;
    readonly lastReset: Prisma.FieldRef<"ManagerToken", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ManagerToken", 'DateTime'>;
}
export type ManagerTokenFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ManagerTokenSelect<ExtArgs> | null;
    omit?: Prisma.ManagerTokenOmit<ExtArgs> | null;
    include?: Prisma.ManagerTokenInclude<ExtArgs> | null;
    where: Prisma.ManagerTokenWhereUniqueInput;
};
export type ManagerTokenFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ManagerTokenSelect<ExtArgs> | null;
    omit?: Prisma.ManagerTokenOmit<ExtArgs> | null;
    include?: Prisma.ManagerTokenInclude<ExtArgs> | null;
    where: Prisma.ManagerTokenWhereUniqueInput;
};
export type ManagerTokenFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ManagerTokenSelect<ExtArgs> | null;
    omit?: Prisma.ManagerTokenOmit<ExtArgs> | null;
    include?: Prisma.ManagerTokenInclude<ExtArgs> | null;
    where?: Prisma.ManagerTokenWhereInput;
    orderBy?: Prisma.ManagerTokenOrderByWithRelationInput | Prisma.ManagerTokenOrderByWithRelationInput[];
    cursor?: Prisma.ManagerTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ManagerTokenScalarFieldEnum | Prisma.ManagerTokenScalarFieldEnum[];
};
export type ManagerTokenFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ManagerTokenSelect<ExtArgs> | null;
    omit?: Prisma.ManagerTokenOmit<ExtArgs> | null;
    include?: Prisma.ManagerTokenInclude<ExtArgs> | null;
    where?: Prisma.ManagerTokenWhereInput;
    orderBy?: Prisma.ManagerTokenOrderByWithRelationInput | Prisma.ManagerTokenOrderByWithRelationInput[];
    cursor?: Prisma.ManagerTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ManagerTokenScalarFieldEnum | Prisma.ManagerTokenScalarFieldEnum[];
};
export type ManagerTokenFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ManagerTokenSelect<ExtArgs> | null;
    omit?: Prisma.ManagerTokenOmit<ExtArgs> | null;
    include?: Prisma.ManagerTokenInclude<ExtArgs> | null;
    where?: Prisma.ManagerTokenWhereInput;
    orderBy?: Prisma.ManagerTokenOrderByWithRelationInput | Prisma.ManagerTokenOrderByWithRelationInput[];
    cursor?: Prisma.ManagerTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ManagerTokenScalarFieldEnum | Prisma.ManagerTokenScalarFieldEnum[];
};
export type ManagerTokenCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ManagerTokenSelect<ExtArgs> | null;
    omit?: Prisma.ManagerTokenOmit<ExtArgs> | null;
    include?: Prisma.ManagerTokenInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ManagerTokenCreateInput, Prisma.ManagerTokenUncheckedCreateInput>;
};
export type ManagerTokenCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ManagerTokenCreateManyInput | Prisma.ManagerTokenCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ManagerTokenCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ManagerTokenSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ManagerTokenOmit<ExtArgs> | null;
    data: Prisma.ManagerTokenCreateManyInput | Prisma.ManagerTokenCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ManagerTokenUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ManagerTokenSelect<ExtArgs> | null;
    omit?: Prisma.ManagerTokenOmit<ExtArgs> | null;
    include?: Prisma.ManagerTokenInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ManagerTokenUpdateInput, Prisma.ManagerTokenUncheckedUpdateInput>;
    where: Prisma.ManagerTokenWhereUniqueInput;
};
export type ManagerTokenUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ManagerTokenUpdateManyMutationInput, Prisma.ManagerTokenUncheckedUpdateManyInput>;
    where?: Prisma.ManagerTokenWhereInput;
    limit?: number;
};
export type ManagerTokenUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ManagerTokenSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ManagerTokenOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ManagerTokenUpdateManyMutationInput, Prisma.ManagerTokenUncheckedUpdateManyInput>;
    where?: Prisma.ManagerTokenWhereInput;
    limit?: number;
};
export type ManagerTokenUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ManagerTokenSelect<ExtArgs> | null;
    omit?: Prisma.ManagerTokenOmit<ExtArgs> | null;
    include?: Prisma.ManagerTokenInclude<ExtArgs> | null;
    where: Prisma.ManagerTokenWhereUniqueInput;
    create: Prisma.XOR<Prisma.ManagerTokenCreateInput, Prisma.ManagerTokenUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ManagerTokenUpdateInput, Prisma.ManagerTokenUncheckedUpdateInput>;
};
export type ManagerTokenDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ManagerTokenSelect<ExtArgs> | null;
    omit?: Prisma.ManagerTokenOmit<ExtArgs> | null;
    include?: Prisma.ManagerTokenInclude<ExtArgs> | null;
    where: Prisma.ManagerTokenWhereUniqueInput;
};
export type ManagerTokenDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ManagerTokenWhereInput;
    limit?: number;
};
export type ManagerToken$resumeAuditsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeViewAuditSelect<ExtArgs> | null;
    omit?: Prisma.ResumeViewAuditOmit<ExtArgs> | null;
    include?: Prisma.ResumeViewAuditInclude<ExtArgs> | null;
    where?: Prisma.ResumeViewAuditWhereInput;
    orderBy?: Prisma.ResumeViewAuditOrderByWithRelationInput | Prisma.ResumeViewAuditOrderByWithRelationInput[];
    cursor?: Prisma.ResumeViewAuditWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ResumeViewAuditScalarFieldEnum | Prisma.ResumeViewAuditScalarFieldEnum[];
};
export type ManagerTokenDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ManagerTokenSelect<ExtArgs> | null;
    omit?: Prisma.ManagerTokenOmit<ExtArgs> | null;
    include?: Prisma.ManagerTokenInclude<ExtArgs> | null;
};
export {};

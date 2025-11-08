import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ResumeViewAuditModel = runtime.Types.Result.DefaultSelection<Prisma.$ResumeViewAuditPayload>;
export type AggregateResumeViewAudit = {
    _count: ResumeViewAuditCountAggregateOutputType | null;
    _avg: ResumeViewAuditAvgAggregateOutputType | null;
    _sum: ResumeViewAuditSumAggregateOutputType | null;
    _min: ResumeViewAuditMinAggregateOutputType | null;
    _max: ResumeViewAuditMaxAggregateOutputType | null;
};
export type ResumeViewAuditAvgAggregateOutputType = {
    id: number | null;
    managerId: number | null;
};
export type ResumeViewAuditSumAggregateOutputType = {
    id: bigint | null;
    managerId: bigint | null;
};
export type ResumeViewAuditMinAggregateOutputType = {
    id: bigint | null;
    managerId: bigint | null;
    resumeId: string | null;
    viewedAt: Date | null;
};
export type ResumeViewAuditMaxAggregateOutputType = {
    id: bigint | null;
    managerId: bigint | null;
    resumeId: string | null;
    viewedAt: Date | null;
};
export type ResumeViewAuditCountAggregateOutputType = {
    id: number;
    managerId: number;
    resumeId: number;
    viewedAt: number;
    _all: number;
};
export type ResumeViewAuditAvgAggregateInputType = {
    id?: true;
    managerId?: true;
};
export type ResumeViewAuditSumAggregateInputType = {
    id?: true;
    managerId?: true;
};
export type ResumeViewAuditMinAggregateInputType = {
    id?: true;
    managerId?: true;
    resumeId?: true;
    viewedAt?: true;
};
export type ResumeViewAuditMaxAggregateInputType = {
    id?: true;
    managerId?: true;
    resumeId?: true;
    viewedAt?: true;
};
export type ResumeViewAuditCountAggregateInputType = {
    id?: true;
    managerId?: true;
    resumeId?: true;
    viewedAt?: true;
    _all?: true;
};
export type ResumeViewAuditAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ResumeViewAuditWhereInput;
    orderBy?: Prisma.ResumeViewAuditOrderByWithRelationInput | Prisma.ResumeViewAuditOrderByWithRelationInput[];
    cursor?: Prisma.ResumeViewAuditWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ResumeViewAuditCountAggregateInputType;
    _avg?: ResumeViewAuditAvgAggregateInputType;
    _sum?: ResumeViewAuditSumAggregateInputType;
    _min?: ResumeViewAuditMinAggregateInputType;
    _max?: ResumeViewAuditMaxAggregateInputType;
};
export type GetResumeViewAuditAggregateType<T extends ResumeViewAuditAggregateArgs> = {
    [P in keyof T & keyof AggregateResumeViewAudit]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateResumeViewAudit[P]> : Prisma.GetScalarType<T[P], AggregateResumeViewAudit[P]>;
};
export type ResumeViewAuditGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ResumeViewAuditWhereInput;
    orderBy?: Prisma.ResumeViewAuditOrderByWithAggregationInput | Prisma.ResumeViewAuditOrderByWithAggregationInput[];
    by: Prisma.ResumeViewAuditScalarFieldEnum[] | Prisma.ResumeViewAuditScalarFieldEnum;
    having?: Prisma.ResumeViewAuditScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ResumeViewAuditCountAggregateInputType | true;
    _avg?: ResumeViewAuditAvgAggregateInputType;
    _sum?: ResumeViewAuditSumAggregateInputType;
    _min?: ResumeViewAuditMinAggregateInputType;
    _max?: ResumeViewAuditMaxAggregateInputType;
};
export type ResumeViewAuditGroupByOutputType = {
    id: bigint;
    managerId: bigint;
    resumeId: string;
    viewedAt: Date;
    _count: ResumeViewAuditCountAggregateOutputType | null;
    _avg: ResumeViewAuditAvgAggregateOutputType | null;
    _sum: ResumeViewAuditSumAggregateOutputType | null;
    _min: ResumeViewAuditMinAggregateOutputType | null;
    _max: ResumeViewAuditMaxAggregateOutputType | null;
};
type GetResumeViewAuditGroupByPayload<T extends ResumeViewAuditGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ResumeViewAuditGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ResumeViewAuditGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ResumeViewAuditGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ResumeViewAuditGroupByOutputType[P]>;
}>>;
export type ResumeViewAuditWhereInput = {
    AND?: Prisma.ResumeViewAuditWhereInput | Prisma.ResumeViewAuditWhereInput[];
    OR?: Prisma.ResumeViewAuditWhereInput[];
    NOT?: Prisma.ResumeViewAuditWhereInput | Prisma.ResumeViewAuditWhereInput[];
    id?: Prisma.BigIntFilter<"ResumeViewAudit"> | bigint | number;
    managerId?: Prisma.BigIntFilter<"ResumeViewAudit"> | bigint | number;
    resumeId?: Prisma.StringFilter<"ResumeViewAudit"> | string;
    viewedAt?: Prisma.DateTimeFilter<"ResumeViewAudit"> | Date | string;
    manager?: Prisma.XOR<Prisma.ManagerTokenScalarRelationFilter, Prisma.ManagerTokenWhereInput>;
    resume?: Prisma.XOR<Prisma.ResumeScalarRelationFilter, Prisma.ResumeWhereInput>;
};
export type ResumeViewAuditOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    managerId?: Prisma.SortOrder;
    resumeId?: Prisma.SortOrder;
    viewedAt?: Prisma.SortOrder;
    manager?: Prisma.ManagerTokenOrderByWithRelationInput;
    resume?: Prisma.ResumeOrderByWithRelationInput;
};
export type ResumeViewAuditWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.ResumeViewAuditWhereInput | Prisma.ResumeViewAuditWhereInput[];
    OR?: Prisma.ResumeViewAuditWhereInput[];
    NOT?: Prisma.ResumeViewAuditWhereInput | Prisma.ResumeViewAuditWhereInput[];
    managerId?: Prisma.BigIntFilter<"ResumeViewAudit"> | bigint | number;
    resumeId?: Prisma.StringFilter<"ResumeViewAudit"> | string;
    viewedAt?: Prisma.DateTimeFilter<"ResumeViewAudit"> | Date | string;
    manager?: Prisma.XOR<Prisma.ManagerTokenScalarRelationFilter, Prisma.ManagerTokenWhereInput>;
    resume?: Prisma.XOR<Prisma.ResumeScalarRelationFilter, Prisma.ResumeWhereInput>;
}, "id">;
export type ResumeViewAuditOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    managerId?: Prisma.SortOrder;
    resumeId?: Prisma.SortOrder;
    viewedAt?: Prisma.SortOrder;
    _count?: Prisma.ResumeViewAuditCountOrderByAggregateInput;
    _avg?: Prisma.ResumeViewAuditAvgOrderByAggregateInput;
    _max?: Prisma.ResumeViewAuditMaxOrderByAggregateInput;
    _min?: Prisma.ResumeViewAuditMinOrderByAggregateInput;
    _sum?: Prisma.ResumeViewAuditSumOrderByAggregateInput;
};
export type ResumeViewAuditScalarWhereWithAggregatesInput = {
    AND?: Prisma.ResumeViewAuditScalarWhereWithAggregatesInput | Prisma.ResumeViewAuditScalarWhereWithAggregatesInput[];
    OR?: Prisma.ResumeViewAuditScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ResumeViewAuditScalarWhereWithAggregatesInput | Prisma.ResumeViewAuditScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"ResumeViewAudit"> | bigint | number;
    managerId?: Prisma.BigIntWithAggregatesFilter<"ResumeViewAudit"> | bigint | number;
    resumeId?: Prisma.StringWithAggregatesFilter<"ResumeViewAudit"> | string;
    viewedAt?: Prisma.DateTimeWithAggregatesFilter<"ResumeViewAudit"> | Date | string;
};
export type ResumeViewAuditCreateInput = {
    id?: bigint | number;
    viewedAt?: Date | string;
    manager: Prisma.ManagerTokenCreateNestedOneWithoutResumeAuditsInput;
    resume: Prisma.ResumeCreateNestedOneWithoutViewAuditsInput;
};
export type ResumeViewAuditUncheckedCreateInput = {
    id?: bigint | number;
    managerId: bigint | number;
    resumeId: string;
    viewedAt?: Date | string;
};
export type ResumeViewAuditUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    viewedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    manager?: Prisma.ManagerTokenUpdateOneRequiredWithoutResumeAuditsNestedInput;
    resume?: Prisma.ResumeUpdateOneRequiredWithoutViewAuditsNestedInput;
};
export type ResumeViewAuditUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    managerId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    resumeId?: Prisma.StringFieldUpdateOperationsInput | string;
    viewedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ResumeViewAuditCreateManyInput = {
    id?: bigint | number;
    managerId: bigint | number;
    resumeId: string;
    viewedAt?: Date | string;
};
export type ResumeViewAuditUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    viewedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ResumeViewAuditUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    managerId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    resumeId?: Prisma.StringFieldUpdateOperationsInput | string;
    viewedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ResumeViewAuditListRelationFilter = {
    every?: Prisma.ResumeViewAuditWhereInput;
    some?: Prisma.ResumeViewAuditWhereInput;
    none?: Prisma.ResumeViewAuditWhereInput;
};
export type ResumeViewAuditOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ResumeViewAuditCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    managerId?: Prisma.SortOrder;
    resumeId?: Prisma.SortOrder;
    viewedAt?: Prisma.SortOrder;
};
export type ResumeViewAuditAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    managerId?: Prisma.SortOrder;
};
export type ResumeViewAuditMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    managerId?: Prisma.SortOrder;
    resumeId?: Prisma.SortOrder;
    viewedAt?: Prisma.SortOrder;
};
export type ResumeViewAuditMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    managerId?: Prisma.SortOrder;
    resumeId?: Prisma.SortOrder;
    viewedAt?: Prisma.SortOrder;
};
export type ResumeViewAuditSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    managerId?: Prisma.SortOrder;
};
export type ResumeViewAuditCreateNestedManyWithoutManagerInput = {
    create?: Prisma.XOR<Prisma.ResumeViewAuditCreateWithoutManagerInput, Prisma.ResumeViewAuditUncheckedCreateWithoutManagerInput> | Prisma.ResumeViewAuditCreateWithoutManagerInput[] | Prisma.ResumeViewAuditUncheckedCreateWithoutManagerInput[];
    connectOrCreate?: Prisma.ResumeViewAuditCreateOrConnectWithoutManagerInput | Prisma.ResumeViewAuditCreateOrConnectWithoutManagerInput[];
    createMany?: Prisma.ResumeViewAuditCreateManyManagerInputEnvelope;
    connect?: Prisma.ResumeViewAuditWhereUniqueInput | Prisma.ResumeViewAuditWhereUniqueInput[];
};
export type ResumeViewAuditUncheckedCreateNestedManyWithoutManagerInput = {
    create?: Prisma.XOR<Prisma.ResumeViewAuditCreateWithoutManagerInput, Prisma.ResumeViewAuditUncheckedCreateWithoutManagerInput> | Prisma.ResumeViewAuditCreateWithoutManagerInput[] | Prisma.ResumeViewAuditUncheckedCreateWithoutManagerInput[];
    connectOrCreate?: Prisma.ResumeViewAuditCreateOrConnectWithoutManagerInput | Prisma.ResumeViewAuditCreateOrConnectWithoutManagerInput[];
    createMany?: Prisma.ResumeViewAuditCreateManyManagerInputEnvelope;
    connect?: Prisma.ResumeViewAuditWhereUniqueInput | Prisma.ResumeViewAuditWhereUniqueInput[];
};
export type ResumeViewAuditUpdateManyWithoutManagerNestedInput = {
    create?: Prisma.XOR<Prisma.ResumeViewAuditCreateWithoutManagerInput, Prisma.ResumeViewAuditUncheckedCreateWithoutManagerInput> | Prisma.ResumeViewAuditCreateWithoutManagerInput[] | Prisma.ResumeViewAuditUncheckedCreateWithoutManagerInput[];
    connectOrCreate?: Prisma.ResumeViewAuditCreateOrConnectWithoutManagerInput | Prisma.ResumeViewAuditCreateOrConnectWithoutManagerInput[];
    upsert?: Prisma.ResumeViewAuditUpsertWithWhereUniqueWithoutManagerInput | Prisma.ResumeViewAuditUpsertWithWhereUniqueWithoutManagerInput[];
    createMany?: Prisma.ResumeViewAuditCreateManyManagerInputEnvelope;
    set?: Prisma.ResumeViewAuditWhereUniqueInput | Prisma.ResumeViewAuditWhereUniqueInput[];
    disconnect?: Prisma.ResumeViewAuditWhereUniqueInput | Prisma.ResumeViewAuditWhereUniqueInput[];
    delete?: Prisma.ResumeViewAuditWhereUniqueInput | Prisma.ResumeViewAuditWhereUniqueInput[];
    connect?: Prisma.ResumeViewAuditWhereUniqueInput | Prisma.ResumeViewAuditWhereUniqueInput[];
    update?: Prisma.ResumeViewAuditUpdateWithWhereUniqueWithoutManagerInput | Prisma.ResumeViewAuditUpdateWithWhereUniqueWithoutManagerInput[];
    updateMany?: Prisma.ResumeViewAuditUpdateManyWithWhereWithoutManagerInput | Prisma.ResumeViewAuditUpdateManyWithWhereWithoutManagerInput[];
    deleteMany?: Prisma.ResumeViewAuditScalarWhereInput | Prisma.ResumeViewAuditScalarWhereInput[];
};
export type ResumeViewAuditUncheckedUpdateManyWithoutManagerNestedInput = {
    create?: Prisma.XOR<Prisma.ResumeViewAuditCreateWithoutManagerInput, Prisma.ResumeViewAuditUncheckedCreateWithoutManagerInput> | Prisma.ResumeViewAuditCreateWithoutManagerInput[] | Prisma.ResumeViewAuditUncheckedCreateWithoutManagerInput[];
    connectOrCreate?: Prisma.ResumeViewAuditCreateOrConnectWithoutManagerInput | Prisma.ResumeViewAuditCreateOrConnectWithoutManagerInput[];
    upsert?: Prisma.ResumeViewAuditUpsertWithWhereUniqueWithoutManagerInput | Prisma.ResumeViewAuditUpsertWithWhereUniqueWithoutManagerInput[];
    createMany?: Prisma.ResumeViewAuditCreateManyManagerInputEnvelope;
    set?: Prisma.ResumeViewAuditWhereUniqueInput | Prisma.ResumeViewAuditWhereUniqueInput[];
    disconnect?: Prisma.ResumeViewAuditWhereUniqueInput | Prisma.ResumeViewAuditWhereUniqueInput[];
    delete?: Prisma.ResumeViewAuditWhereUniqueInput | Prisma.ResumeViewAuditWhereUniqueInput[];
    connect?: Prisma.ResumeViewAuditWhereUniqueInput | Prisma.ResumeViewAuditWhereUniqueInput[];
    update?: Prisma.ResumeViewAuditUpdateWithWhereUniqueWithoutManagerInput | Prisma.ResumeViewAuditUpdateWithWhereUniqueWithoutManagerInput[];
    updateMany?: Prisma.ResumeViewAuditUpdateManyWithWhereWithoutManagerInput | Prisma.ResumeViewAuditUpdateManyWithWhereWithoutManagerInput[];
    deleteMany?: Prisma.ResumeViewAuditScalarWhereInput | Prisma.ResumeViewAuditScalarWhereInput[];
};
export type ResumeViewAuditCreateNestedManyWithoutResumeInput = {
    create?: Prisma.XOR<Prisma.ResumeViewAuditCreateWithoutResumeInput, Prisma.ResumeViewAuditUncheckedCreateWithoutResumeInput> | Prisma.ResumeViewAuditCreateWithoutResumeInput[] | Prisma.ResumeViewAuditUncheckedCreateWithoutResumeInput[];
    connectOrCreate?: Prisma.ResumeViewAuditCreateOrConnectWithoutResumeInput | Prisma.ResumeViewAuditCreateOrConnectWithoutResumeInput[];
    createMany?: Prisma.ResumeViewAuditCreateManyResumeInputEnvelope;
    connect?: Prisma.ResumeViewAuditWhereUniqueInput | Prisma.ResumeViewAuditWhereUniqueInput[];
};
export type ResumeViewAuditUncheckedCreateNestedManyWithoutResumeInput = {
    create?: Prisma.XOR<Prisma.ResumeViewAuditCreateWithoutResumeInput, Prisma.ResumeViewAuditUncheckedCreateWithoutResumeInput> | Prisma.ResumeViewAuditCreateWithoutResumeInput[] | Prisma.ResumeViewAuditUncheckedCreateWithoutResumeInput[];
    connectOrCreate?: Prisma.ResumeViewAuditCreateOrConnectWithoutResumeInput | Prisma.ResumeViewAuditCreateOrConnectWithoutResumeInput[];
    createMany?: Prisma.ResumeViewAuditCreateManyResumeInputEnvelope;
    connect?: Prisma.ResumeViewAuditWhereUniqueInput | Prisma.ResumeViewAuditWhereUniqueInput[];
};
export type ResumeViewAuditUpdateManyWithoutResumeNestedInput = {
    create?: Prisma.XOR<Prisma.ResumeViewAuditCreateWithoutResumeInput, Prisma.ResumeViewAuditUncheckedCreateWithoutResumeInput> | Prisma.ResumeViewAuditCreateWithoutResumeInput[] | Prisma.ResumeViewAuditUncheckedCreateWithoutResumeInput[];
    connectOrCreate?: Prisma.ResumeViewAuditCreateOrConnectWithoutResumeInput | Prisma.ResumeViewAuditCreateOrConnectWithoutResumeInput[];
    upsert?: Prisma.ResumeViewAuditUpsertWithWhereUniqueWithoutResumeInput | Prisma.ResumeViewAuditUpsertWithWhereUniqueWithoutResumeInput[];
    createMany?: Prisma.ResumeViewAuditCreateManyResumeInputEnvelope;
    set?: Prisma.ResumeViewAuditWhereUniqueInput | Prisma.ResumeViewAuditWhereUniqueInput[];
    disconnect?: Prisma.ResumeViewAuditWhereUniqueInput | Prisma.ResumeViewAuditWhereUniqueInput[];
    delete?: Prisma.ResumeViewAuditWhereUniqueInput | Prisma.ResumeViewAuditWhereUniqueInput[];
    connect?: Prisma.ResumeViewAuditWhereUniqueInput | Prisma.ResumeViewAuditWhereUniqueInput[];
    update?: Prisma.ResumeViewAuditUpdateWithWhereUniqueWithoutResumeInput | Prisma.ResumeViewAuditUpdateWithWhereUniqueWithoutResumeInput[];
    updateMany?: Prisma.ResumeViewAuditUpdateManyWithWhereWithoutResumeInput | Prisma.ResumeViewAuditUpdateManyWithWhereWithoutResumeInput[];
    deleteMany?: Prisma.ResumeViewAuditScalarWhereInput | Prisma.ResumeViewAuditScalarWhereInput[];
};
export type ResumeViewAuditUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: Prisma.XOR<Prisma.ResumeViewAuditCreateWithoutResumeInput, Prisma.ResumeViewAuditUncheckedCreateWithoutResumeInput> | Prisma.ResumeViewAuditCreateWithoutResumeInput[] | Prisma.ResumeViewAuditUncheckedCreateWithoutResumeInput[];
    connectOrCreate?: Prisma.ResumeViewAuditCreateOrConnectWithoutResumeInput | Prisma.ResumeViewAuditCreateOrConnectWithoutResumeInput[];
    upsert?: Prisma.ResumeViewAuditUpsertWithWhereUniqueWithoutResumeInput | Prisma.ResumeViewAuditUpsertWithWhereUniqueWithoutResumeInput[];
    createMany?: Prisma.ResumeViewAuditCreateManyResumeInputEnvelope;
    set?: Prisma.ResumeViewAuditWhereUniqueInput | Prisma.ResumeViewAuditWhereUniqueInput[];
    disconnect?: Prisma.ResumeViewAuditWhereUniqueInput | Prisma.ResumeViewAuditWhereUniqueInput[];
    delete?: Prisma.ResumeViewAuditWhereUniqueInput | Prisma.ResumeViewAuditWhereUniqueInput[];
    connect?: Prisma.ResumeViewAuditWhereUniqueInput | Prisma.ResumeViewAuditWhereUniqueInput[];
    update?: Prisma.ResumeViewAuditUpdateWithWhereUniqueWithoutResumeInput | Prisma.ResumeViewAuditUpdateWithWhereUniqueWithoutResumeInput[];
    updateMany?: Prisma.ResumeViewAuditUpdateManyWithWhereWithoutResumeInput | Prisma.ResumeViewAuditUpdateManyWithWhereWithoutResumeInput[];
    deleteMany?: Prisma.ResumeViewAuditScalarWhereInput | Prisma.ResumeViewAuditScalarWhereInput[];
};
export type ResumeViewAuditCreateWithoutManagerInput = {
    id?: bigint | number;
    viewedAt?: Date | string;
    resume: Prisma.ResumeCreateNestedOneWithoutViewAuditsInput;
};
export type ResumeViewAuditUncheckedCreateWithoutManagerInput = {
    id?: bigint | number;
    resumeId: string;
    viewedAt?: Date | string;
};
export type ResumeViewAuditCreateOrConnectWithoutManagerInput = {
    where: Prisma.ResumeViewAuditWhereUniqueInput;
    create: Prisma.XOR<Prisma.ResumeViewAuditCreateWithoutManagerInput, Prisma.ResumeViewAuditUncheckedCreateWithoutManagerInput>;
};
export type ResumeViewAuditCreateManyManagerInputEnvelope = {
    data: Prisma.ResumeViewAuditCreateManyManagerInput | Prisma.ResumeViewAuditCreateManyManagerInput[];
    skipDuplicates?: boolean;
};
export type ResumeViewAuditUpsertWithWhereUniqueWithoutManagerInput = {
    where: Prisma.ResumeViewAuditWhereUniqueInput;
    update: Prisma.XOR<Prisma.ResumeViewAuditUpdateWithoutManagerInput, Prisma.ResumeViewAuditUncheckedUpdateWithoutManagerInput>;
    create: Prisma.XOR<Prisma.ResumeViewAuditCreateWithoutManagerInput, Prisma.ResumeViewAuditUncheckedCreateWithoutManagerInput>;
};
export type ResumeViewAuditUpdateWithWhereUniqueWithoutManagerInput = {
    where: Prisma.ResumeViewAuditWhereUniqueInput;
    data: Prisma.XOR<Prisma.ResumeViewAuditUpdateWithoutManagerInput, Prisma.ResumeViewAuditUncheckedUpdateWithoutManagerInput>;
};
export type ResumeViewAuditUpdateManyWithWhereWithoutManagerInput = {
    where: Prisma.ResumeViewAuditScalarWhereInput;
    data: Prisma.XOR<Prisma.ResumeViewAuditUpdateManyMutationInput, Prisma.ResumeViewAuditUncheckedUpdateManyWithoutManagerInput>;
};
export type ResumeViewAuditScalarWhereInput = {
    AND?: Prisma.ResumeViewAuditScalarWhereInput | Prisma.ResumeViewAuditScalarWhereInput[];
    OR?: Prisma.ResumeViewAuditScalarWhereInput[];
    NOT?: Prisma.ResumeViewAuditScalarWhereInput | Prisma.ResumeViewAuditScalarWhereInput[];
    id?: Prisma.BigIntFilter<"ResumeViewAudit"> | bigint | number;
    managerId?: Prisma.BigIntFilter<"ResumeViewAudit"> | bigint | number;
    resumeId?: Prisma.StringFilter<"ResumeViewAudit"> | string;
    viewedAt?: Prisma.DateTimeFilter<"ResumeViewAudit"> | Date | string;
};
export type ResumeViewAuditCreateWithoutResumeInput = {
    id?: bigint | number;
    viewedAt?: Date | string;
    manager: Prisma.ManagerTokenCreateNestedOneWithoutResumeAuditsInput;
};
export type ResumeViewAuditUncheckedCreateWithoutResumeInput = {
    id?: bigint | number;
    managerId: bigint | number;
    viewedAt?: Date | string;
};
export type ResumeViewAuditCreateOrConnectWithoutResumeInput = {
    where: Prisma.ResumeViewAuditWhereUniqueInput;
    create: Prisma.XOR<Prisma.ResumeViewAuditCreateWithoutResumeInput, Prisma.ResumeViewAuditUncheckedCreateWithoutResumeInput>;
};
export type ResumeViewAuditCreateManyResumeInputEnvelope = {
    data: Prisma.ResumeViewAuditCreateManyResumeInput | Prisma.ResumeViewAuditCreateManyResumeInput[];
    skipDuplicates?: boolean;
};
export type ResumeViewAuditUpsertWithWhereUniqueWithoutResumeInput = {
    where: Prisma.ResumeViewAuditWhereUniqueInput;
    update: Prisma.XOR<Prisma.ResumeViewAuditUpdateWithoutResumeInput, Prisma.ResumeViewAuditUncheckedUpdateWithoutResumeInput>;
    create: Prisma.XOR<Prisma.ResumeViewAuditCreateWithoutResumeInput, Prisma.ResumeViewAuditUncheckedCreateWithoutResumeInput>;
};
export type ResumeViewAuditUpdateWithWhereUniqueWithoutResumeInput = {
    where: Prisma.ResumeViewAuditWhereUniqueInput;
    data: Prisma.XOR<Prisma.ResumeViewAuditUpdateWithoutResumeInput, Prisma.ResumeViewAuditUncheckedUpdateWithoutResumeInput>;
};
export type ResumeViewAuditUpdateManyWithWhereWithoutResumeInput = {
    where: Prisma.ResumeViewAuditScalarWhereInput;
    data: Prisma.XOR<Prisma.ResumeViewAuditUpdateManyMutationInput, Prisma.ResumeViewAuditUncheckedUpdateManyWithoutResumeInput>;
};
export type ResumeViewAuditCreateManyManagerInput = {
    id?: bigint | number;
    resumeId: string;
    viewedAt?: Date | string;
};
export type ResumeViewAuditUpdateWithoutManagerInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    viewedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resume?: Prisma.ResumeUpdateOneRequiredWithoutViewAuditsNestedInput;
};
export type ResumeViewAuditUncheckedUpdateWithoutManagerInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    resumeId?: Prisma.StringFieldUpdateOperationsInput | string;
    viewedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ResumeViewAuditUncheckedUpdateManyWithoutManagerInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    resumeId?: Prisma.StringFieldUpdateOperationsInput | string;
    viewedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ResumeViewAuditCreateManyResumeInput = {
    id?: bigint | number;
    managerId: bigint | number;
    viewedAt?: Date | string;
};
export type ResumeViewAuditUpdateWithoutResumeInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    viewedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    manager?: Prisma.ManagerTokenUpdateOneRequiredWithoutResumeAuditsNestedInput;
};
export type ResumeViewAuditUncheckedUpdateWithoutResumeInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    managerId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    viewedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ResumeViewAuditUncheckedUpdateManyWithoutResumeInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    managerId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    viewedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ResumeViewAuditSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    managerId?: boolean;
    resumeId?: boolean;
    viewedAt?: boolean;
    manager?: boolean | Prisma.ManagerTokenDefaultArgs<ExtArgs>;
    resume?: boolean | Prisma.ResumeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["resumeViewAudit"]>;
export type ResumeViewAuditSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    managerId?: boolean;
    resumeId?: boolean;
    viewedAt?: boolean;
    manager?: boolean | Prisma.ManagerTokenDefaultArgs<ExtArgs>;
    resume?: boolean | Prisma.ResumeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["resumeViewAudit"]>;
export type ResumeViewAuditSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    managerId?: boolean;
    resumeId?: boolean;
    viewedAt?: boolean;
    manager?: boolean | Prisma.ManagerTokenDefaultArgs<ExtArgs>;
    resume?: boolean | Prisma.ResumeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["resumeViewAudit"]>;
export type ResumeViewAuditSelectScalar = {
    id?: boolean;
    managerId?: boolean;
    resumeId?: boolean;
    viewedAt?: boolean;
};
export type ResumeViewAuditOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "managerId" | "resumeId" | "viewedAt", ExtArgs["result"]["resumeViewAudit"]>;
export type ResumeViewAuditInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    manager?: boolean | Prisma.ManagerTokenDefaultArgs<ExtArgs>;
    resume?: boolean | Prisma.ResumeDefaultArgs<ExtArgs>;
};
export type ResumeViewAuditIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    manager?: boolean | Prisma.ManagerTokenDefaultArgs<ExtArgs>;
    resume?: boolean | Prisma.ResumeDefaultArgs<ExtArgs>;
};
export type ResumeViewAuditIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    manager?: boolean | Prisma.ManagerTokenDefaultArgs<ExtArgs>;
    resume?: boolean | Prisma.ResumeDefaultArgs<ExtArgs>;
};
export type $ResumeViewAuditPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ResumeViewAudit";
    objects: {
        manager: Prisma.$ManagerTokenPayload<ExtArgs>;
        resume: Prisma.$ResumePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        managerId: bigint;
        resumeId: string;
        viewedAt: Date;
    }, ExtArgs["result"]["resumeViewAudit"]>;
    composites: {};
};
export type ResumeViewAuditGetPayload<S extends boolean | null | undefined | ResumeViewAuditDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ResumeViewAuditPayload, S>;
export type ResumeViewAuditCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ResumeViewAuditFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ResumeViewAuditCountAggregateInputType | true;
};
export interface ResumeViewAuditDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ResumeViewAudit'];
        meta: {
            name: 'ResumeViewAudit';
        };
    };
    findUnique<T extends ResumeViewAuditFindUniqueArgs>(args: Prisma.SelectSubset<T, ResumeViewAuditFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ResumeViewAuditClient<runtime.Types.Result.GetResult<Prisma.$ResumeViewAuditPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ResumeViewAuditFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ResumeViewAuditFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ResumeViewAuditClient<runtime.Types.Result.GetResult<Prisma.$ResumeViewAuditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ResumeViewAuditFindFirstArgs>(args?: Prisma.SelectSubset<T, ResumeViewAuditFindFirstArgs<ExtArgs>>): Prisma.Prisma__ResumeViewAuditClient<runtime.Types.Result.GetResult<Prisma.$ResumeViewAuditPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ResumeViewAuditFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ResumeViewAuditFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ResumeViewAuditClient<runtime.Types.Result.GetResult<Prisma.$ResumeViewAuditPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ResumeViewAuditFindManyArgs>(args?: Prisma.SelectSubset<T, ResumeViewAuditFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ResumeViewAuditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ResumeViewAuditCreateArgs>(args: Prisma.SelectSubset<T, ResumeViewAuditCreateArgs<ExtArgs>>): Prisma.Prisma__ResumeViewAuditClient<runtime.Types.Result.GetResult<Prisma.$ResumeViewAuditPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ResumeViewAuditCreateManyArgs>(args?: Prisma.SelectSubset<T, ResumeViewAuditCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ResumeViewAuditCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ResumeViewAuditCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ResumeViewAuditPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ResumeViewAuditDeleteArgs>(args: Prisma.SelectSubset<T, ResumeViewAuditDeleteArgs<ExtArgs>>): Prisma.Prisma__ResumeViewAuditClient<runtime.Types.Result.GetResult<Prisma.$ResumeViewAuditPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ResumeViewAuditUpdateArgs>(args: Prisma.SelectSubset<T, ResumeViewAuditUpdateArgs<ExtArgs>>): Prisma.Prisma__ResumeViewAuditClient<runtime.Types.Result.GetResult<Prisma.$ResumeViewAuditPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ResumeViewAuditDeleteManyArgs>(args?: Prisma.SelectSubset<T, ResumeViewAuditDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ResumeViewAuditUpdateManyArgs>(args: Prisma.SelectSubset<T, ResumeViewAuditUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ResumeViewAuditUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ResumeViewAuditUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ResumeViewAuditPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ResumeViewAuditUpsertArgs>(args: Prisma.SelectSubset<T, ResumeViewAuditUpsertArgs<ExtArgs>>): Prisma.Prisma__ResumeViewAuditClient<runtime.Types.Result.GetResult<Prisma.$ResumeViewAuditPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ResumeViewAuditCountArgs>(args?: Prisma.Subset<T, ResumeViewAuditCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ResumeViewAuditCountAggregateOutputType> : number>;
    aggregate<T extends ResumeViewAuditAggregateArgs>(args: Prisma.Subset<T, ResumeViewAuditAggregateArgs>): Prisma.PrismaPromise<GetResumeViewAuditAggregateType<T>>;
    groupBy<T extends ResumeViewAuditGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ResumeViewAuditGroupByArgs['orderBy'];
    } : {
        orderBy?: ResumeViewAuditGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ResumeViewAuditGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResumeViewAuditGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ResumeViewAuditFieldRefs;
}
export interface Prisma__ResumeViewAuditClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    manager<T extends Prisma.ManagerTokenDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ManagerTokenDefaultArgs<ExtArgs>>): Prisma.Prisma__ManagerTokenClient<runtime.Types.Result.GetResult<Prisma.$ManagerTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    resume<T extends Prisma.ResumeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ResumeDefaultArgs<ExtArgs>>): Prisma.Prisma__ResumeClient<runtime.Types.Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ResumeViewAuditFieldRefs {
    readonly id: Prisma.FieldRef<"ResumeViewAudit", 'BigInt'>;
    readonly managerId: Prisma.FieldRef<"ResumeViewAudit", 'BigInt'>;
    readonly resumeId: Prisma.FieldRef<"ResumeViewAudit", 'String'>;
    readonly viewedAt: Prisma.FieldRef<"ResumeViewAudit", 'DateTime'>;
}
export type ResumeViewAuditFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeViewAuditSelect<ExtArgs> | null;
    omit?: Prisma.ResumeViewAuditOmit<ExtArgs> | null;
    include?: Prisma.ResumeViewAuditInclude<ExtArgs> | null;
    where: Prisma.ResumeViewAuditWhereUniqueInput;
};
export type ResumeViewAuditFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeViewAuditSelect<ExtArgs> | null;
    omit?: Prisma.ResumeViewAuditOmit<ExtArgs> | null;
    include?: Prisma.ResumeViewAuditInclude<ExtArgs> | null;
    where: Prisma.ResumeViewAuditWhereUniqueInput;
};
export type ResumeViewAuditFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ResumeViewAuditFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ResumeViewAuditFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ResumeViewAuditCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeViewAuditSelect<ExtArgs> | null;
    omit?: Prisma.ResumeViewAuditOmit<ExtArgs> | null;
    include?: Prisma.ResumeViewAuditInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ResumeViewAuditCreateInput, Prisma.ResumeViewAuditUncheckedCreateInput>;
};
export type ResumeViewAuditCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ResumeViewAuditCreateManyInput | Prisma.ResumeViewAuditCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ResumeViewAuditCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeViewAuditSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ResumeViewAuditOmit<ExtArgs> | null;
    data: Prisma.ResumeViewAuditCreateManyInput | Prisma.ResumeViewAuditCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ResumeViewAuditIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ResumeViewAuditUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeViewAuditSelect<ExtArgs> | null;
    omit?: Prisma.ResumeViewAuditOmit<ExtArgs> | null;
    include?: Prisma.ResumeViewAuditInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ResumeViewAuditUpdateInput, Prisma.ResumeViewAuditUncheckedUpdateInput>;
    where: Prisma.ResumeViewAuditWhereUniqueInput;
};
export type ResumeViewAuditUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ResumeViewAuditUpdateManyMutationInput, Prisma.ResumeViewAuditUncheckedUpdateManyInput>;
    where?: Prisma.ResumeViewAuditWhereInput;
    limit?: number;
};
export type ResumeViewAuditUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeViewAuditSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ResumeViewAuditOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ResumeViewAuditUpdateManyMutationInput, Prisma.ResumeViewAuditUncheckedUpdateManyInput>;
    where?: Prisma.ResumeViewAuditWhereInput;
    limit?: number;
    include?: Prisma.ResumeViewAuditIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ResumeViewAuditUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeViewAuditSelect<ExtArgs> | null;
    omit?: Prisma.ResumeViewAuditOmit<ExtArgs> | null;
    include?: Prisma.ResumeViewAuditInclude<ExtArgs> | null;
    where: Prisma.ResumeViewAuditWhereUniqueInput;
    create: Prisma.XOR<Prisma.ResumeViewAuditCreateInput, Prisma.ResumeViewAuditUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ResumeViewAuditUpdateInput, Prisma.ResumeViewAuditUncheckedUpdateInput>;
};
export type ResumeViewAuditDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeViewAuditSelect<ExtArgs> | null;
    omit?: Prisma.ResumeViewAuditOmit<ExtArgs> | null;
    include?: Prisma.ResumeViewAuditInclude<ExtArgs> | null;
    where: Prisma.ResumeViewAuditWhereUniqueInput;
};
export type ResumeViewAuditDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ResumeViewAuditWhereInput;
    limit?: number;
};
export type ResumeViewAuditDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeViewAuditSelect<ExtArgs> | null;
    omit?: Prisma.ResumeViewAuditOmit<ExtArgs> | null;
    include?: Prisma.ResumeViewAuditInclude<ExtArgs> | null;
};
export {};

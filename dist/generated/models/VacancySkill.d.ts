import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type VacancySkillModel = runtime.Types.Result.DefaultSelection<Prisma.$VacancySkillPayload>;
export type AggregateVacancySkill = {
    _count: VacancySkillCountAggregateOutputType | null;
    _avg: VacancySkillAvgAggregateOutputType | null;
    _sum: VacancySkillSumAggregateOutputType | null;
    _min: VacancySkillMinAggregateOutputType | null;
    _max: VacancySkillMaxAggregateOutputType | null;
};
export type VacancySkillAvgAggregateOutputType = {
    vacancyId: number | null;
};
export type VacancySkillSumAggregateOutputType = {
    vacancyId: bigint | null;
};
export type VacancySkillMinAggregateOutputType = {
    vacancyId: bigint | null;
    skillName: string | null;
};
export type VacancySkillMaxAggregateOutputType = {
    vacancyId: bigint | null;
    skillName: string | null;
};
export type VacancySkillCountAggregateOutputType = {
    vacancyId: number;
    skillName: number;
    _all: number;
};
export type VacancySkillAvgAggregateInputType = {
    vacancyId?: true;
};
export type VacancySkillSumAggregateInputType = {
    vacancyId?: true;
};
export type VacancySkillMinAggregateInputType = {
    vacancyId?: true;
    skillName?: true;
};
export type VacancySkillMaxAggregateInputType = {
    vacancyId?: true;
    skillName?: true;
};
export type VacancySkillCountAggregateInputType = {
    vacancyId?: true;
    skillName?: true;
    _all?: true;
};
export type VacancySkillAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VacancySkillWhereInput;
    orderBy?: Prisma.VacancySkillOrderByWithRelationInput | Prisma.VacancySkillOrderByWithRelationInput[];
    cursor?: Prisma.VacancySkillWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | VacancySkillCountAggregateInputType;
    _avg?: VacancySkillAvgAggregateInputType;
    _sum?: VacancySkillSumAggregateInputType;
    _min?: VacancySkillMinAggregateInputType;
    _max?: VacancySkillMaxAggregateInputType;
};
export type GetVacancySkillAggregateType<T extends VacancySkillAggregateArgs> = {
    [P in keyof T & keyof AggregateVacancySkill]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVacancySkill[P]> : Prisma.GetScalarType<T[P], AggregateVacancySkill[P]>;
};
export type VacancySkillGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VacancySkillWhereInput;
    orderBy?: Prisma.VacancySkillOrderByWithAggregationInput | Prisma.VacancySkillOrderByWithAggregationInput[];
    by: Prisma.VacancySkillScalarFieldEnum[] | Prisma.VacancySkillScalarFieldEnum;
    having?: Prisma.VacancySkillScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VacancySkillCountAggregateInputType | true;
    _avg?: VacancySkillAvgAggregateInputType;
    _sum?: VacancySkillSumAggregateInputType;
    _min?: VacancySkillMinAggregateInputType;
    _max?: VacancySkillMaxAggregateInputType;
};
export type VacancySkillGroupByOutputType = {
    vacancyId: bigint;
    skillName: string;
    _count: VacancySkillCountAggregateOutputType | null;
    _avg: VacancySkillAvgAggregateOutputType | null;
    _sum: VacancySkillSumAggregateOutputType | null;
    _min: VacancySkillMinAggregateOutputType | null;
    _max: VacancySkillMaxAggregateOutputType | null;
};
type GetVacancySkillGroupByPayload<T extends VacancySkillGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VacancySkillGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VacancySkillGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VacancySkillGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VacancySkillGroupByOutputType[P]>;
}>>;
export type VacancySkillWhereInput = {
    AND?: Prisma.VacancySkillWhereInput | Prisma.VacancySkillWhereInput[];
    OR?: Prisma.VacancySkillWhereInput[];
    NOT?: Prisma.VacancySkillWhereInput | Prisma.VacancySkillWhereInput[];
    vacancyId?: Prisma.BigIntFilter<"VacancySkill"> | bigint | number;
    skillName?: Prisma.StringFilter<"VacancySkill"> | string;
    vacancy?: Prisma.XOR<Prisma.VacancyScalarRelationFilter, Prisma.VacancyWhereInput>;
};
export type VacancySkillOrderByWithRelationInput = {
    vacancyId?: Prisma.SortOrder;
    skillName?: Prisma.SortOrder;
    vacancy?: Prisma.VacancyOrderByWithRelationInput;
};
export type VacancySkillWhereUniqueInput = Prisma.AtLeast<{
    vacancyId_skillName?: Prisma.VacancySkillVacancyIdSkillNameCompoundUniqueInput;
    AND?: Prisma.VacancySkillWhereInput | Prisma.VacancySkillWhereInput[];
    OR?: Prisma.VacancySkillWhereInput[];
    NOT?: Prisma.VacancySkillWhereInput | Prisma.VacancySkillWhereInput[];
    vacancyId?: Prisma.BigIntFilter<"VacancySkill"> | bigint | number;
    skillName?: Prisma.StringFilter<"VacancySkill"> | string;
    vacancy?: Prisma.XOR<Prisma.VacancyScalarRelationFilter, Prisma.VacancyWhereInput>;
}, "vacancyId_skillName">;
export type VacancySkillOrderByWithAggregationInput = {
    vacancyId?: Prisma.SortOrder;
    skillName?: Prisma.SortOrder;
    _count?: Prisma.VacancySkillCountOrderByAggregateInput;
    _avg?: Prisma.VacancySkillAvgOrderByAggregateInput;
    _max?: Prisma.VacancySkillMaxOrderByAggregateInput;
    _min?: Prisma.VacancySkillMinOrderByAggregateInput;
    _sum?: Prisma.VacancySkillSumOrderByAggregateInput;
};
export type VacancySkillScalarWhereWithAggregatesInput = {
    AND?: Prisma.VacancySkillScalarWhereWithAggregatesInput | Prisma.VacancySkillScalarWhereWithAggregatesInput[];
    OR?: Prisma.VacancySkillScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VacancySkillScalarWhereWithAggregatesInput | Prisma.VacancySkillScalarWhereWithAggregatesInput[];
    vacancyId?: Prisma.BigIntWithAggregatesFilter<"VacancySkill"> | bigint | number;
    skillName?: Prisma.StringWithAggregatesFilter<"VacancySkill"> | string;
};
export type VacancySkillCreateInput = {
    skillName: string;
    vacancy: Prisma.VacancyCreateNestedOneWithoutSkillsInput;
};
export type VacancySkillUncheckedCreateInput = {
    vacancyId: bigint | number;
    skillName: string;
};
export type VacancySkillUpdateInput = {
    skillName?: Prisma.StringFieldUpdateOperationsInput | string;
    vacancy?: Prisma.VacancyUpdateOneRequiredWithoutSkillsNestedInput;
};
export type VacancySkillUncheckedUpdateInput = {
    vacancyId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    skillName?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type VacancySkillCreateManyInput = {
    vacancyId: bigint | number;
    skillName: string;
};
export type VacancySkillUpdateManyMutationInput = {
    skillName?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type VacancySkillUncheckedUpdateManyInput = {
    vacancyId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    skillName?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type VacancySkillListRelationFilter = {
    every?: Prisma.VacancySkillWhereInput;
    some?: Prisma.VacancySkillWhereInput;
    none?: Prisma.VacancySkillWhereInput;
};
export type VacancySkillOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type VacancySkillVacancyIdSkillNameCompoundUniqueInput = {
    vacancyId: bigint | number;
    skillName: string;
};
export type VacancySkillCountOrderByAggregateInput = {
    vacancyId?: Prisma.SortOrder;
    skillName?: Prisma.SortOrder;
};
export type VacancySkillAvgOrderByAggregateInput = {
    vacancyId?: Prisma.SortOrder;
};
export type VacancySkillMaxOrderByAggregateInput = {
    vacancyId?: Prisma.SortOrder;
    skillName?: Prisma.SortOrder;
};
export type VacancySkillMinOrderByAggregateInput = {
    vacancyId?: Prisma.SortOrder;
    skillName?: Prisma.SortOrder;
};
export type VacancySkillSumOrderByAggregateInput = {
    vacancyId?: Prisma.SortOrder;
};
export type VacancySkillCreateNestedManyWithoutVacancyInput = {
    create?: Prisma.XOR<Prisma.VacancySkillCreateWithoutVacancyInput, Prisma.VacancySkillUncheckedCreateWithoutVacancyInput> | Prisma.VacancySkillCreateWithoutVacancyInput[] | Prisma.VacancySkillUncheckedCreateWithoutVacancyInput[];
    connectOrCreate?: Prisma.VacancySkillCreateOrConnectWithoutVacancyInput | Prisma.VacancySkillCreateOrConnectWithoutVacancyInput[];
    createMany?: Prisma.VacancySkillCreateManyVacancyInputEnvelope;
    connect?: Prisma.VacancySkillWhereUniqueInput | Prisma.VacancySkillWhereUniqueInput[];
};
export type VacancySkillUncheckedCreateNestedManyWithoutVacancyInput = {
    create?: Prisma.XOR<Prisma.VacancySkillCreateWithoutVacancyInput, Prisma.VacancySkillUncheckedCreateWithoutVacancyInput> | Prisma.VacancySkillCreateWithoutVacancyInput[] | Prisma.VacancySkillUncheckedCreateWithoutVacancyInput[];
    connectOrCreate?: Prisma.VacancySkillCreateOrConnectWithoutVacancyInput | Prisma.VacancySkillCreateOrConnectWithoutVacancyInput[];
    createMany?: Prisma.VacancySkillCreateManyVacancyInputEnvelope;
    connect?: Prisma.VacancySkillWhereUniqueInput | Prisma.VacancySkillWhereUniqueInput[];
};
export type VacancySkillUpdateManyWithoutVacancyNestedInput = {
    create?: Prisma.XOR<Prisma.VacancySkillCreateWithoutVacancyInput, Prisma.VacancySkillUncheckedCreateWithoutVacancyInput> | Prisma.VacancySkillCreateWithoutVacancyInput[] | Prisma.VacancySkillUncheckedCreateWithoutVacancyInput[];
    connectOrCreate?: Prisma.VacancySkillCreateOrConnectWithoutVacancyInput | Prisma.VacancySkillCreateOrConnectWithoutVacancyInput[];
    upsert?: Prisma.VacancySkillUpsertWithWhereUniqueWithoutVacancyInput | Prisma.VacancySkillUpsertWithWhereUniqueWithoutVacancyInput[];
    createMany?: Prisma.VacancySkillCreateManyVacancyInputEnvelope;
    set?: Prisma.VacancySkillWhereUniqueInput | Prisma.VacancySkillWhereUniqueInput[];
    disconnect?: Prisma.VacancySkillWhereUniqueInput | Prisma.VacancySkillWhereUniqueInput[];
    delete?: Prisma.VacancySkillWhereUniqueInput | Prisma.VacancySkillWhereUniqueInput[];
    connect?: Prisma.VacancySkillWhereUniqueInput | Prisma.VacancySkillWhereUniqueInput[];
    update?: Prisma.VacancySkillUpdateWithWhereUniqueWithoutVacancyInput | Prisma.VacancySkillUpdateWithWhereUniqueWithoutVacancyInput[];
    updateMany?: Prisma.VacancySkillUpdateManyWithWhereWithoutVacancyInput | Prisma.VacancySkillUpdateManyWithWhereWithoutVacancyInput[];
    deleteMany?: Prisma.VacancySkillScalarWhereInput | Prisma.VacancySkillScalarWhereInput[];
};
export type VacancySkillUncheckedUpdateManyWithoutVacancyNestedInput = {
    create?: Prisma.XOR<Prisma.VacancySkillCreateWithoutVacancyInput, Prisma.VacancySkillUncheckedCreateWithoutVacancyInput> | Prisma.VacancySkillCreateWithoutVacancyInput[] | Prisma.VacancySkillUncheckedCreateWithoutVacancyInput[];
    connectOrCreate?: Prisma.VacancySkillCreateOrConnectWithoutVacancyInput | Prisma.VacancySkillCreateOrConnectWithoutVacancyInput[];
    upsert?: Prisma.VacancySkillUpsertWithWhereUniqueWithoutVacancyInput | Prisma.VacancySkillUpsertWithWhereUniqueWithoutVacancyInput[];
    createMany?: Prisma.VacancySkillCreateManyVacancyInputEnvelope;
    set?: Prisma.VacancySkillWhereUniqueInput | Prisma.VacancySkillWhereUniqueInput[];
    disconnect?: Prisma.VacancySkillWhereUniqueInput | Prisma.VacancySkillWhereUniqueInput[];
    delete?: Prisma.VacancySkillWhereUniqueInput | Prisma.VacancySkillWhereUniqueInput[];
    connect?: Prisma.VacancySkillWhereUniqueInput | Prisma.VacancySkillWhereUniqueInput[];
    update?: Prisma.VacancySkillUpdateWithWhereUniqueWithoutVacancyInput | Prisma.VacancySkillUpdateWithWhereUniqueWithoutVacancyInput[];
    updateMany?: Prisma.VacancySkillUpdateManyWithWhereWithoutVacancyInput | Prisma.VacancySkillUpdateManyWithWhereWithoutVacancyInput[];
    deleteMany?: Prisma.VacancySkillScalarWhereInput | Prisma.VacancySkillScalarWhereInput[];
};
export type VacancySkillCreateWithoutVacancyInput = {
    skillName: string;
};
export type VacancySkillUncheckedCreateWithoutVacancyInput = {
    skillName: string;
};
export type VacancySkillCreateOrConnectWithoutVacancyInput = {
    where: Prisma.VacancySkillWhereUniqueInput;
    create: Prisma.XOR<Prisma.VacancySkillCreateWithoutVacancyInput, Prisma.VacancySkillUncheckedCreateWithoutVacancyInput>;
};
export type VacancySkillCreateManyVacancyInputEnvelope = {
    data: Prisma.VacancySkillCreateManyVacancyInput | Prisma.VacancySkillCreateManyVacancyInput[];
    skipDuplicates?: boolean;
};
export type VacancySkillUpsertWithWhereUniqueWithoutVacancyInput = {
    where: Prisma.VacancySkillWhereUniqueInput;
    update: Prisma.XOR<Prisma.VacancySkillUpdateWithoutVacancyInput, Prisma.VacancySkillUncheckedUpdateWithoutVacancyInput>;
    create: Prisma.XOR<Prisma.VacancySkillCreateWithoutVacancyInput, Prisma.VacancySkillUncheckedCreateWithoutVacancyInput>;
};
export type VacancySkillUpdateWithWhereUniqueWithoutVacancyInput = {
    where: Prisma.VacancySkillWhereUniqueInput;
    data: Prisma.XOR<Prisma.VacancySkillUpdateWithoutVacancyInput, Prisma.VacancySkillUncheckedUpdateWithoutVacancyInput>;
};
export type VacancySkillUpdateManyWithWhereWithoutVacancyInput = {
    where: Prisma.VacancySkillScalarWhereInput;
    data: Prisma.XOR<Prisma.VacancySkillUpdateManyMutationInput, Prisma.VacancySkillUncheckedUpdateManyWithoutVacancyInput>;
};
export type VacancySkillScalarWhereInput = {
    AND?: Prisma.VacancySkillScalarWhereInput | Prisma.VacancySkillScalarWhereInput[];
    OR?: Prisma.VacancySkillScalarWhereInput[];
    NOT?: Prisma.VacancySkillScalarWhereInput | Prisma.VacancySkillScalarWhereInput[];
    vacancyId?: Prisma.BigIntFilter<"VacancySkill"> | bigint | number;
    skillName?: Prisma.StringFilter<"VacancySkill"> | string;
};
export type VacancySkillCreateManyVacancyInput = {
    skillName: string;
};
export type VacancySkillUpdateWithoutVacancyInput = {
    skillName?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type VacancySkillUncheckedUpdateWithoutVacancyInput = {
    skillName?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type VacancySkillUncheckedUpdateManyWithoutVacancyInput = {
    skillName?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type VacancySkillSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    vacancyId?: boolean;
    skillName?: boolean;
    vacancy?: boolean | Prisma.VacancyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vacancySkill"]>;
export type VacancySkillSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    vacancyId?: boolean;
    skillName?: boolean;
    vacancy?: boolean | Prisma.VacancyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vacancySkill"]>;
export type VacancySkillSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    vacancyId?: boolean;
    skillName?: boolean;
    vacancy?: boolean | Prisma.VacancyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vacancySkill"]>;
export type VacancySkillSelectScalar = {
    vacancyId?: boolean;
    skillName?: boolean;
};
export type VacancySkillOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"vacancyId" | "skillName", ExtArgs["result"]["vacancySkill"]>;
export type VacancySkillInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    vacancy?: boolean | Prisma.VacancyDefaultArgs<ExtArgs>;
};
export type VacancySkillIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    vacancy?: boolean | Prisma.VacancyDefaultArgs<ExtArgs>;
};
export type VacancySkillIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    vacancy?: boolean | Prisma.VacancyDefaultArgs<ExtArgs>;
};
export type $VacancySkillPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "VacancySkill";
    objects: {
        vacancy: Prisma.$VacancyPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        vacancyId: bigint;
        skillName: string;
    }, ExtArgs["result"]["vacancySkill"]>;
    composites: {};
};
export type VacancySkillGetPayload<S extends boolean | null | undefined | VacancySkillDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VacancySkillPayload, S>;
export type VacancySkillCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VacancySkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VacancySkillCountAggregateInputType | true;
};
export interface VacancySkillDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['VacancySkill'];
        meta: {
            name: 'VacancySkill';
        };
    };
    findUnique<T extends VacancySkillFindUniqueArgs>(args: Prisma.SelectSubset<T, VacancySkillFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VacancySkillClient<runtime.Types.Result.GetResult<Prisma.$VacancySkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends VacancySkillFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VacancySkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VacancySkillClient<runtime.Types.Result.GetResult<Prisma.$VacancySkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends VacancySkillFindFirstArgs>(args?: Prisma.SelectSubset<T, VacancySkillFindFirstArgs<ExtArgs>>): Prisma.Prisma__VacancySkillClient<runtime.Types.Result.GetResult<Prisma.$VacancySkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends VacancySkillFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VacancySkillFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VacancySkillClient<runtime.Types.Result.GetResult<Prisma.$VacancySkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends VacancySkillFindManyArgs>(args?: Prisma.SelectSubset<T, VacancySkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VacancySkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends VacancySkillCreateArgs>(args: Prisma.SelectSubset<T, VacancySkillCreateArgs<ExtArgs>>): Prisma.Prisma__VacancySkillClient<runtime.Types.Result.GetResult<Prisma.$VacancySkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends VacancySkillCreateManyArgs>(args?: Prisma.SelectSubset<T, VacancySkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends VacancySkillCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, VacancySkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VacancySkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends VacancySkillDeleteArgs>(args: Prisma.SelectSubset<T, VacancySkillDeleteArgs<ExtArgs>>): Prisma.Prisma__VacancySkillClient<runtime.Types.Result.GetResult<Prisma.$VacancySkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends VacancySkillUpdateArgs>(args: Prisma.SelectSubset<T, VacancySkillUpdateArgs<ExtArgs>>): Prisma.Prisma__VacancySkillClient<runtime.Types.Result.GetResult<Prisma.$VacancySkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends VacancySkillDeleteManyArgs>(args?: Prisma.SelectSubset<T, VacancySkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends VacancySkillUpdateManyArgs>(args: Prisma.SelectSubset<T, VacancySkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends VacancySkillUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, VacancySkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VacancySkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends VacancySkillUpsertArgs>(args: Prisma.SelectSubset<T, VacancySkillUpsertArgs<ExtArgs>>): Prisma.Prisma__VacancySkillClient<runtime.Types.Result.GetResult<Prisma.$VacancySkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends VacancySkillCountArgs>(args?: Prisma.Subset<T, VacancySkillCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VacancySkillCountAggregateOutputType> : number>;
    aggregate<T extends VacancySkillAggregateArgs>(args: Prisma.Subset<T, VacancySkillAggregateArgs>): Prisma.PrismaPromise<GetVacancySkillAggregateType<T>>;
    groupBy<T extends VacancySkillGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VacancySkillGroupByArgs['orderBy'];
    } : {
        orderBy?: VacancySkillGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VacancySkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVacancySkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: VacancySkillFieldRefs;
}
export interface Prisma__VacancySkillClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    vacancy<T extends Prisma.VacancyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VacancyDefaultArgs<ExtArgs>>): Prisma.Prisma__VacancyClient<runtime.Types.Result.GetResult<Prisma.$VacancyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface VacancySkillFieldRefs {
    readonly vacancyId: Prisma.FieldRef<"VacancySkill", 'BigInt'>;
    readonly skillName: Prisma.FieldRef<"VacancySkill", 'String'>;
}
export type VacancySkillFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VacancySkillSelect<ExtArgs> | null;
    omit?: Prisma.VacancySkillOmit<ExtArgs> | null;
    include?: Prisma.VacancySkillInclude<ExtArgs> | null;
    where: Prisma.VacancySkillWhereUniqueInput;
};
export type VacancySkillFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VacancySkillSelect<ExtArgs> | null;
    omit?: Prisma.VacancySkillOmit<ExtArgs> | null;
    include?: Prisma.VacancySkillInclude<ExtArgs> | null;
    where: Prisma.VacancySkillWhereUniqueInput;
};
export type VacancySkillFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VacancySkillSelect<ExtArgs> | null;
    omit?: Prisma.VacancySkillOmit<ExtArgs> | null;
    include?: Prisma.VacancySkillInclude<ExtArgs> | null;
    where?: Prisma.VacancySkillWhereInput;
    orderBy?: Prisma.VacancySkillOrderByWithRelationInput | Prisma.VacancySkillOrderByWithRelationInput[];
    cursor?: Prisma.VacancySkillWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VacancySkillScalarFieldEnum | Prisma.VacancySkillScalarFieldEnum[];
};
export type VacancySkillFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VacancySkillSelect<ExtArgs> | null;
    omit?: Prisma.VacancySkillOmit<ExtArgs> | null;
    include?: Prisma.VacancySkillInclude<ExtArgs> | null;
    where?: Prisma.VacancySkillWhereInput;
    orderBy?: Prisma.VacancySkillOrderByWithRelationInput | Prisma.VacancySkillOrderByWithRelationInput[];
    cursor?: Prisma.VacancySkillWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VacancySkillScalarFieldEnum | Prisma.VacancySkillScalarFieldEnum[];
};
export type VacancySkillFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VacancySkillSelect<ExtArgs> | null;
    omit?: Prisma.VacancySkillOmit<ExtArgs> | null;
    include?: Prisma.VacancySkillInclude<ExtArgs> | null;
    where?: Prisma.VacancySkillWhereInput;
    orderBy?: Prisma.VacancySkillOrderByWithRelationInput | Prisma.VacancySkillOrderByWithRelationInput[];
    cursor?: Prisma.VacancySkillWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VacancySkillScalarFieldEnum | Prisma.VacancySkillScalarFieldEnum[];
};
export type VacancySkillCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VacancySkillSelect<ExtArgs> | null;
    omit?: Prisma.VacancySkillOmit<ExtArgs> | null;
    include?: Prisma.VacancySkillInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VacancySkillCreateInput, Prisma.VacancySkillUncheckedCreateInput>;
};
export type VacancySkillCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.VacancySkillCreateManyInput | Prisma.VacancySkillCreateManyInput[];
    skipDuplicates?: boolean;
};
export type VacancySkillCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VacancySkillSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VacancySkillOmit<ExtArgs> | null;
    data: Prisma.VacancySkillCreateManyInput | Prisma.VacancySkillCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.VacancySkillIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type VacancySkillUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VacancySkillSelect<ExtArgs> | null;
    omit?: Prisma.VacancySkillOmit<ExtArgs> | null;
    include?: Prisma.VacancySkillInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VacancySkillUpdateInput, Prisma.VacancySkillUncheckedUpdateInput>;
    where: Prisma.VacancySkillWhereUniqueInput;
};
export type VacancySkillUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.VacancySkillUpdateManyMutationInput, Prisma.VacancySkillUncheckedUpdateManyInput>;
    where?: Prisma.VacancySkillWhereInput;
    limit?: number;
};
export type VacancySkillUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VacancySkillSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VacancySkillOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VacancySkillUpdateManyMutationInput, Prisma.VacancySkillUncheckedUpdateManyInput>;
    where?: Prisma.VacancySkillWhereInput;
    limit?: number;
    include?: Prisma.VacancySkillIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type VacancySkillUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VacancySkillSelect<ExtArgs> | null;
    omit?: Prisma.VacancySkillOmit<ExtArgs> | null;
    include?: Prisma.VacancySkillInclude<ExtArgs> | null;
    where: Prisma.VacancySkillWhereUniqueInput;
    create: Prisma.XOR<Prisma.VacancySkillCreateInput, Prisma.VacancySkillUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.VacancySkillUpdateInput, Prisma.VacancySkillUncheckedUpdateInput>;
};
export type VacancySkillDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VacancySkillSelect<ExtArgs> | null;
    omit?: Prisma.VacancySkillOmit<ExtArgs> | null;
    include?: Prisma.VacancySkillInclude<ExtArgs> | null;
    where: Prisma.VacancySkillWhereUniqueInput;
};
export type VacancySkillDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VacancySkillWhereInput;
    limit?: number;
};
export type VacancySkillDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VacancySkillSelect<ExtArgs> | null;
    omit?: Prisma.VacancySkillOmit<ExtArgs> | null;
    include?: Prisma.VacancySkillInclude<ExtArgs> | null;
};
export {};

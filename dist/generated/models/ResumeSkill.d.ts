import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ResumeSkillModel = runtime.Types.Result.DefaultSelection<Prisma.$ResumeSkillPayload>;
export type AggregateResumeSkill = {
    _count: ResumeSkillCountAggregateOutputType | null;
    _min: ResumeSkillMinAggregateOutputType | null;
    _max: ResumeSkillMaxAggregateOutputType | null;
};
export type ResumeSkillMinAggregateOutputType = {
    resumeId: string | null;
    skillName: string | null;
};
export type ResumeSkillMaxAggregateOutputType = {
    resumeId: string | null;
    skillName: string | null;
};
export type ResumeSkillCountAggregateOutputType = {
    resumeId: number;
    skillName: number;
    _all: number;
};
export type ResumeSkillMinAggregateInputType = {
    resumeId?: true;
    skillName?: true;
};
export type ResumeSkillMaxAggregateInputType = {
    resumeId?: true;
    skillName?: true;
};
export type ResumeSkillCountAggregateInputType = {
    resumeId?: true;
    skillName?: true;
    _all?: true;
};
export type ResumeSkillAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ResumeSkillWhereInput;
    orderBy?: Prisma.ResumeSkillOrderByWithRelationInput | Prisma.ResumeSkillOrderByWithRelationInput[];
    cursor?: Prisma.ResumeSkillWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ResumeSkillCountAggregateInputType;
    _min?: ResumeSkillMinAggregateInputType;
    _max?: ResumeSkillMaxAggregateInputType;
};
export type GetResumeSkillAggregateType<T extends ResumeSkillAggregateArgs> = {
    [P in keyof T & keyof AggregateResumeSkill]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateResumeSkill[P]> : Prisma.GetScalarType<T[P], AggregateResumeSkill[P]>;
};
export type ResumeSkillGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ResumeSkillWhereInput;
    orderBy?: Prisma.ResumeSkillOrderByWithAggregationInput | Prisma.ResumeSkillOrderByWithAggregationInput[];
    by: Prisma.ResumeSkillScalarFieldEnum[] | Prisma.ResumeSkillScalarFieldEnum;
    having?: Prisma.ResumeSkillScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ResumeSkillCountAggregateInputType | true;
    _min?: ResumeSkillMinAggregateInputType;
    _max?: ResumeSkillMaxAggregateInputType;
};
export type ResumeSkillGroupByOutputType = {
    resumeId: string;
    skillName: string;
    _count: ResumeSkillCountAggregateOutputType | null;
    _min: ResumeSkillMinAggregateOutputType | null;
    _max: ResumeSkillMaxAggregateOutputType | null;
};
type GetResumeSkillGroupByPayload<T extends ResumeSkillGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ResumeSkillGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ResumeSkillGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ResumeSkillGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ResumeSkillGroupByOutputType[P]>;
}>>;
export type ResumeSkillWhereInput = {
    AND?: Prisma.ResumeSkillWhereInput | Prisma.ResumeSkillWhereInput[];
    OR?: Prisma.ResumeSkillWhereInput[];
    NOT?: Prisma.ResumeSkillWhereInput | Prisma.ResumeSkillWhereInput[];
    resumeId?: Prisma.StringFilter<"ResumeSkill"> | string;
    skillName?: Prisma.StringFilter<"ResumeSkill"> | string;
    resume?: Prisma.XOR<Prisma.ResumeScalarRelationFilter, Prisma.ResumeWhereInput>;
};
export type ResumeSkillOrderByWithRelationInput = {
    resumeId?: Prisma.SortOrder;
    skillName?: Prisma.SortOrder;
    resume?: Prisma.ResumeOrderByWithRelationInput;
};
export type ResumeSkillWhereUniqueInput = Prisma.AtLeast<{
    resumeId_skillName?: Prisma.ResumeSkillResumeIdSkillNameCompoundUniqueInput;
    AND?: Prisma.ResumeSkillWhereInput | Prisma.ResumeSkillWhereInput[];
    OR?: Prisma.ResumeSkillWhereInput[];
    NOT?: Prisma.ResumeSkillWhereInput | Prisma.ResumeSkillWhereInput[];
    resumeId?: Prisma.StringFilter<"ResumeSkill"> | string;
    skillName?: Prisma.StringFilter<"ResumeSkill"> | string;
    resume?: Prisma.XOR<Prisma.ResumeScalarRelationFilter, Prisma.ResumeWhereInput>;
}, "resumeId_skillName">;
export type ResumeSkillOrderByWithAggregationInput = {
    resumeId?: Prisma.SortOrder;
    skillName?: Prisma.SortOrder;
    _count?: Prisma.ResumeSkillCountOrderByAggregateInput;
    _max?: Prisma.ResumeSkillMaxOrderByAggregateInput;
    _min?: Prisma.ResumeSkillMinOrderByAggregateInput;
};
export type ResumeSkillScalarWhereWithAggregatesInput = {
    AND?: Prisma.ResumeSkillScalarWhereWithAggregatesInput | Prisma.ResumeSkillScalarWhereWithAggregatesInput[];
    OR?: Prisma.ResumeSkillScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ResumeSkillScalarWhereWithAggregatesInput | Prisma.ResumeSkillScalarWhereWithAggregatesInput[];
    resumeId?: Prisma.StringWithAggregatesFilter<"ResumeSkill"> | string;
    skillName?: Prisma.StringWithAggregatesFilter<"ResumeSkill"> | string;
};
export type ResumeSkillCreateInput = {
    skillName: string;
    resume: Prisma.ResumeCreateNestedOneWithoutSkillsInput;
};
export type ResumeSkillUncheckedCreateInput = {
    resumeId: string;
    skillName: string;
};
export type ResumeSkillUpdateInput = {
    skillName?: Prisma.StringFieldUpdateOperationsInput | string;
    resume?: Prisma.ResumeUpdateOneRequiredWithoutSkillsNestedInput;
};
export type ResumeSkillUncheckedUpdateInput = {
    resumeId?: Prisma.StringFieldUpdateOperationsInput | string;
    skillName?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ResumeSkillCreateManyInput = {
    resumeId: string;
    skillName: string;
};
export type ResumeSkillUpdateManyMutationInput = {
    skillName?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ResumeSkillUncheckedUpdateManyInput = {
    resumeId?: Prisma.StringFieldUpdateOperationsInput | string;
    skillName?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ResumeSkillListRelationFilter = {
    every?: Prisma.ResumeSkillWhereInput;
    some?: Prisma.ResumeSkillWhereInput;
    none?: Prisma.ResumeSkillWhereInput;
};
export type ResumeSkillOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ResumeSkillResumeIdSkillNameCompoundUniqueInput = {
    resumeId: string;
    skillName: string;
};
export type ResumeSkillCountOrderByAggregateInput = {
    resumeId?: Prisma.SortOrder;
    skillName?: Prisma.SortOrder;
};
export type ResumeSkillMaxOrderByAggregateInput = {
    resumeId?: Prisma.SortOrder;
    skillName?: Prisma.SortOrder;
};
export type ResumeSkillMinOrderByAggregateInput = {
    resumeId?: Prisma.SortOrder;
    skillName?: Prisma.SortOrder;
};
export type ResumeSkillCreateNestedManyWithoutResumeInput = {
    create?: Prisma.XOR<Prisma.ResumeSkillCreateWithoutResumeInput, Prisma.ResumeSkillUncheckedCreateWithoutResumeInput> | Prisma.ResumeSkillCreateWithoutResumeInput[] | Prisma.ResumeSkillUncheckedCreateWithoutResumeInput[];
    connectOrCreate?: Prisma.ResumeSkillCreateOrConnectWithoutResumeInput | Prisma.ResumeSkillCreateOrConnectWithoutResumeInput[];
    createMany?: Prisma.ResumeSkillCreateManyResumeInputEnvelope;
    connect?: Prisma.ResumeSkillWhereUniqueInput | Prisma.ResumeSkillWhereUniqueInput[];
};
export type ResumeSkillUncheckedCreateNestedManyWithoutResumeInput = {
    create?: Prisma.XOR<Prisma.ResumeSkillCreateWithoutResumeInput, Prisma.ResumeSkillUncheckedCreateWithoutResumeInput> | Prisma.ResumeSkillCreateWithoutResumeInput[] | Prisma.ResumeSkillUncheckedCreateWithoutResumeInput[];
    connectOrCreate?: Prisma.ResumeSkillCreateOrConnectWithoutResumeInput | Prisma.ResumeSkillCreateOrConnectWithoutResumeInput[];
    createMany?: Prisma.ResumeSkillCreateManyResumeInputEnvelope;
    connect?: Prisma.ResumeSkillWhereUniqueInput | Prisma.ResumeSkillWhereUniqueInput[];
};
export type ResumeSkillUpdateManyWithoutResumeNestedInput = {
    create?: Prisma.XOR<Prisma.ResumeSkillCreateWithoutResumeInput, Prisma.ResumeSkillUncheckedCreateWithoutResumeInput> | Prisma.ResumeSkillCreateWithoutResumeInput[] | Prisma.ResumeSkillUncheckedCreateWithoutResumeInput[];
    connectOrCreate?: Prisma.ResumeSkillCreateOrConnectWithoutResumeInput | Prisma.ResumeSkillCreateOrConnectWithoutResumeInput[];
    upsert?: Prisma.ResumeSkillUpsertWithWhereUniqueWithoutResumeInput | Prisma.ResumeSkillUpsertWithWhereUniqueWithoutResumeInput[];
    createMany?: Prisma.ResumeSkillCreateManyResumeInputEnvelope;
    set?: Prisma.ResumeSkillWhereUniqueInput | Prisma.ResumeSkillWhereUniqueInput[];
    disconnect?: Prisma.ResumeSkillWhereUniqueInput | Prisma.ResumeSkillWhereUniqueInput[];
    delete?: Prisma.ResumeSkillWhereUniqueInput | Prisma.ResumeSkillWhereUniqueInput[];
    connect?: Prisma.ResumeSkillWhereUniqueInput | Prisma.ResumeSkillWhereUniqueInput[];
    update?: Prisma.ResumeSkillUpdateWithWhereUniqueWithoutResumeInput | Prisma.ResumeSkillUpdateWithWhereUniqueWithoutResumeInput[];
    updateMany?: Prisma.ResumeSkillUpdateManyWithWhereWithoutResumeInput | Prisma.ResumeSkillUpdateManyWithWhereWithoutResumeInput[];
    deleteMany?: Prisma.ResumeSkillScalarWhereInput | Prisma.ResumeSkillScalarWhereInput[];
};
export type ResumeSkillUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: Prisma.XOR<Prisma.ResumeSkillCreateWithoutResumeInput, Prisma.ResumeSkillUncheckedCreateWithoutResumeInput> | Prisma.ResumeSkillCreateWithoutResumeInput[] | Prisma.ResumeSkillUncheckedCreateWithoutResumeInput[];
    connectOrCreate?: Prisma.ResumeSkillCreateOrConnectWithoutResumeInput | Prisma.ResumeSkillCreateOrConnectWithoutResumeInput[];
    upsert?: Prisma.ResumeSkillUpsertWithWhereUniqueWithoutResumeInput | Prisma.ResumeSkillUpsertWithWhereUniqueWithoutResumeInput[];
    createMany?: Prisma.ResumeSkillCreateManyResumeInputEnvelope;
    set?: Prisma.ResumeSkillWhereUniqueInput | Prisma.ResumeSkillWhereUniqueInput[];
    disconnect?: Prisma.ResumeSkillWhereUniqueInput | Prisma.ResumeSkillWhereUniqueInput[];
    delete?: Prisma.ResumeSkillWhereUniqueInput | Prisma.ResumeSkillWhereUniqueInput[];
    connect?: Prisma.ResumeSkillWhereUniqueInput | Prisma.ResumeSkillWhereUniqueInput[];
    update?: Prisma.ResumeSkillUpdateWithWhereUniqueWithoutResumeInput | Prisma.ResumeSkillUpdateWithWhereUniqueWithoutResumeInput[];
    updateMany?: Prisma.ResumeSkillUpdateManyWithWhereWithoutResumeInput | Prisma.ResumeSkillUpdateManyWithWhereWithoutResumeInput[];
    deleteMany?: Prisma.ResumeSkillScalarWhereInput | Prisma.ResumeSkillScalarWhereInput[];
};
export type ResumeSkillCreateWithoutResumeInput = {
    skillName: string;
};
export type ResumeSkillUncheckedCreateWithoutResumeInput = {
    skillName: string;
};
export type ResumeSkillCreateOrConnectWithoutResumeInput = {
    where: Prisma.ResumeSkillWhereUniqueInput;
    create: Prisma.XOR<Prisma.ResumeSkillCreateWithoutResumeInput, Prisma.ResumeSkillUncheckedCreateWithoutResumeInput>;
};
export type ResumeSkillCreateManyResumeInputEnvelope = {
    data: Prisma.ResumeSkillCreateManyResumeInput | Prisma.ResumeSkillCreateManyResumeInput[];
    skipDuplicates?: boolean;
};
export type ResumeSkillUpsertWithWhereUniqueWithoutResumeInput = {
    where: Prisma.ResumeSkillWhereUniqueInput;
    update: Prisma.XOR<Prisma.ResumeSkillUpdateWithoutResumeInput, Prisma.ResumeSkillUncheckedUpdateWithoutResumeInput>;
    create: Prisma.XOR<Prisma.ResumeSkillCreateWithoutResumeInput, Prisma.ResumeSkillUncheckedCreateWithoutResumeInput>;
};
export type ResumeSkillUpdateWithWhereUniqueWithoutResumeInput = {
    where: Prisma.ResumeSkillWhereUniqueInput;
    data: Prisma.XOR<Prisma.ResumeSkillUpdateWithoutResumeInput, Prisma.ResumeSkillUncheckedUpdateWithoutResumeInput>;
};
export type ResumeSkillUpdateManyWithWhereWithoutResumeInput = {
    where: Prisma.ResumeSkillScalarWhereInput;
    data: Prisma.XOR<Prisma.ResumeSkillUpdateManyMutationInput, Prisma.ResumeSkillUncheckedUpdateManyWithoutResumeInput>;
};
export type ResumeSkillScalarWhereInput = {
    AND?: Prisma.ResumeSkillScalarWhereInput | Prisma.ResumeSkillScalarWhereInput[];
    OR?: Prisma.ResumeSkillScalarWhereInput[];
    NOT?: Prisma.ResumeSkillScalarWhereInput | Prisma.ResumeSkillScalarWhereInput[];
    resumeId?: Prisma.StringFilter<"ResumeSkill"> | string;
    skillName?: Prisma.StringFilter<"ResumeSkill"> | string;
};
export type ResumeSkillCreateManyResumeInput = {
    skillName: string;
};
export type ResumeSkillUpdateWithoutResumeInput = {
    skillName?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ResumeSkillUncheckedUpdateWithoutResumeInput = {
    skillName?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ResumeSkillUncheckedUpdateManyWithoutResumeInput = {
    skillName?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ResumeSkillSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    resumeId?: boolean;
    skillName?: boolean;
    resume?: boolean | Prisma.ResumeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["resumeSkill"]>;
export type ResumeSkillSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    resumeId?: boolean;
    skillName?: boolean;
    resume?: boolean | Prisma.ResumeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["resumeSkill"]>;
export type ResumeSkillSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    resumeId?: boolean;
    skillName?: boolean;
    resume?: boolean | Prisma.ResumeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["resumeSkill"]>;
export type ResumeSkillSelectScalar = {
    resumeId?: boolean;
    skillName?: boolean;
};
export type ResumeSkillOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"resumeId" | "skillName", ExtArgs["result"]["resumeSkill"]>;
export type ResumeSkillInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    resume?: boolean | Prisma.ResumeDefaultArgs<ExtArgs>;
};
export type ResumeSkillIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    resume?: boolean | Prisma.ResumeDefaultArgs<ExtArgs>;
};
export type ResumeSkillIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    resume?: boolean | Prisma.ResumeDefaultArgs<ExtArgs>;
};
export type $ResumeSkillPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ResumeSkill";
    objects: {
        resume: Prisma.$ResumePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        resumeId: string;
        skillName: string;
    }, ExtArgs["result"]["resumeSkill"]>;
    composites: {};
};
export type ResumeSkillGetPayload<S extends boolean | null | undefined | ResumeSkillDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ResumeSkillPayload, S>;
export type ResumeSkillCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ResumeSkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ResumeSkillCountAggregateInputType | true;
};
export interface ResumeSkillDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ResumeSkill'];
        meta: {
            name: 'ResumeSkill';
        };
    };
    findUnique<T extends ResumeSkillFindUniqueArgs>(args: Prisma.SelectSubset<T, ResumeSkillFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ResumeSkillClient<runtime.Types.Result.GetResult<Prisma.$ResumeSkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ResumeSkillFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ResumeSkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ResumeSkillClient<runtime.Types.Result.GetResult<Prisma.$ResumeSkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ResumeSkillFindFirstArgs>(args?: Prisma.SelectSubset<T, ResumeSkillFindFirstArgs<ExtArgs>>): Prisma.Prisma__ResumeSkillClient<runtime.Types.Result.GetResult<Prisma.$ResumeSkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ResumeSkillFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ResumeSkillFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ResumeSkillClient<runtime.Types.Result.GetResult<Prisma.$ResumeSkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ResumeSkillFindManyArgs>(args?: Prisma.SelectSubset<T, ResumeSkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ResumeSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ResumeSkillCreateArgs>(args: Prisma.SelectSubset<T, ResumeSkillCreateArgs<ExtArgs>>): Prisma.Prisma__ResumeSkillClient<runtime.Types.Result.GetResult<Prisma.$ResumeSkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ResumeSkillCreateManyArgs>(args?: Prisma.SelectSubset<T, ResumeSkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ResumeSkillCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ResumeSkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ResumeSkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ResumeSkillDeleteArgs>(args: Prisma.SelectSubset<T, ResumeSkillDeleteArgs<ExtArgs>>): Prisma.Prisma__ResumeSkillClient<runtime.Types.Result.GetResult<Prisma.$ResumeSkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ResumeSkillUpdateArgs>(args: Prisma.SelectSubset<T, ResumeSkillUpdateArgs<ExtArgs>>): Prisma.Prisma__ResumeSkillClient<runtime.Types.Result.GetResult<Prisma.$ResumeSkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ResumeSkillDeleteManyArgs>(args?: Prisma.SelectSubset<T, ResumeSkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ResumeSkillUpdateManyArgs>(args: Prisma.SelectSubset<T, ResumeSkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ResumeSkillUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ResumeSkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ResumeSkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ResumeSkillUpsertArgs>(args: Prisma.SelectSubset<T, ResumeSkillUpsertArgs<ExtArgs>>): Prisma.Prisma__ResumeSkillClient<runtime.Types.Result.GetResult<Prisma.$ResumeSkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ResumeSkillCountArgs>(args?: Prisma.Subset<T, ResumeSkillCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ResumeSkillCountAggregateOutputType> : number>;
    aggregate<T extends ResumeSkillAggregateArgs>(args: Prisma.Subset<T, ResumeSkillAggregateArgs>): Prisma.PrismaPromise<GetResumeSkillAggregateType<T>>;
    groupBy<T extends ResumeSkillGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ResumeSkillGroupByArgs['orderBy'];
    } : {
        orderBy?: ResumeSkillGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ResumeSkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResumeSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ResumeSkillFieldRefs;
}
export interface Prisma__ResumeSkillClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    resume<T extends Prisma.ResumeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ResumeDefaultArgs<ExtArgs>>): Prisma.Prisma__ResumeClient<runtime.Types.Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ResumeSkillFieldRefs {
    readonly resumeId: Prisma.FieldRef<"ResumeSkill", 'String'>;
    readonly skillName: Prisma.FieldRef<"ResumeSkill", 'String'>;
}
export type ResumeSkillFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSkillSelect<ExtArgs> | null;
    omit?: Prisma.ResumeSkillOmit<ExtArgs> | null;
    include?: Prisma.ResumeSkillInclude<ExtArgs> | null;
    where: Prisma.ResumeSkillWhereUniqueInput;
};
export type ResumeSkillFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSkillSelect<ExtArgs> | null;
    omit?: Prisma.ResumeSkillOmit<ExtArgs> | null;
    include?: Prisma.ResumeSkillInclude<ExtArgs> | null;
    where: Prisma.ResumeSkillWhereUniqueInput;
};
export type ResumeSkillFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSkillSelect<ExtArgs> | null;
    omit?: Prisma.ResumeSkillOmit<ExtArgs> | null;
    include?: Prisma.ResumeSkillInclude<ExtArgs> | null;
    where?: Prisma.ResumeSkillWhereInput;
    orderBy?: Prisma.ResumeSkillOrderByWithRelationInput | Prisma.ResumeSkillOrderByWithRelationInput[];
    cursor?: Prisma.ResumeSkillWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ResumeSkillScalarFieldEnum | Prisma.ResumeSkillScalarFieldEnum[];
};
export type ResumeSkillFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSkillSelect<ExtArgs> | null;
    omit?: Prisma.ResumeSkillOmit<ExtArgs> | null;
    include?: Prisma.ResumeSkillInclude<ExtArgs> | null;
    where?: Prisma.ResumeSkillWhereInput;
    orderBy?: Prisma.ResumeSkillOrderByWithRelationInput | Prisma.ResumeSkillOrderByWithRelationInput[];
    cursor?: Prisma.ResumeSkillWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ResumeSkillScalarFieldEnum | Prisma.ResumeSkillScalarFieldEnum[];
};
export type ResumeSkillFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSkillSelect<ExtArgs> | null;
    omit?: Prisma.ResumeSkillOmit<ExtArgs> | null;
    include?: Prisma.ResumeSkillInclude<ExtArgs> | null;
    where?: Prisma.ResumeSkillWhereInput;
    orderBy?: Prisma.ResumeSkillOrderByWithRelationInput | Prisma.ResumeSkillOrderByWithRelationInput[];
    cursor?: Prisma.ResumeSkillWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ResumeSkillScalarFieldEnum | Prisma.ResumeSkillScalarFieldEnum[];
};
export type ResumeSkillCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSkillSelect<ExtArgs> | null;
    omit?: Prisma.ResumeSkillOmit<ExtArgs> | null;
    include?: Prisma.ResumeSkillInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ResumeSkillCreateInput, Prisma.ResumeSkillUncheckedCreateInput>;
};
export type ResumeSkillCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ResumeSkillCreateManyInput | Prisma.ResumeSkillCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ResumeSkillCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSkillSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ResumeSkillOmit<ExtArgs> | null;
    data: Prisma.ResumeSkillCreateManyInput | Prisma.ResumeSkillCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ResumeSkillIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ResumeSkillUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSkillSelect<ExtArgs> | null;
    omit?: Prisma.ResumeSkillOmit<ExtArgs> | null;
    include?: Prisma.ResumeSkillInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ResumeSkillUpdateInput, Prisma.ResumeSkillUncheckedUpdateInput>;
    where: Prisma.ResumeSkillWhereUniqueInput;
};
export type ResumeSkillUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ResumeSkillUpdateManyMutationInput, Prisma.ResumeSkillUncheckedUpdateManyInput>;
    where?: Prisma.ResumeSkillWhereInput;
    limit?: number;
};
export type ResumeSkillUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSkillSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ResumeSkillOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ResumeSkillUpdateManyMutationInput, Prisma.ResumeSkillUncheckedUpdateManyInput>;
    where?: Prisma.ResumeSkillWhereInput;
    limit?: number;
    include?: Prisma.ResumeSkillIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ResumeSkillUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSkillSelect<ExtArgs> | null;
    omit?: Prisma.ResumeSkillOmit<ExtArgs> | null;
    include?: Prisma.ResumeSkillInclude<ExtArgs> | null;
    where: Prisma.ResumeSkillWhereUniqueInput;
    create: Prisma.XOR<Prisma.ResumeSkillCreateInput, Prisma.ResumeSkillUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ResumeSkillUpdateInput, Prisma.ResumeSkillUncheckedUpdateInput>;
};
export type ResumeSkillDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSkillSelect<ExtArgs> | null;
    omit?: Prisma.ResumeSkillOmit<ExtArgs> | null;
    include?: Prisma.ResumeSkillInclude<ExtArgs> | null;
    where: Prisma.ResumeSkillWhereUniqueInput;
};
export type ResumeSkillDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ResumeSkillWhereInput;
    limit?: number;
};
export type ResumeSkillDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSkillSelect<ExtArgs> | null;
    omit?: Prisma.ResumeSkillOmit<ExtArgs> | null;
    include?: Prisma.ResumeSkillInclude<ExtArgs> | null;
};
export {};

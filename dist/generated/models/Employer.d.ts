import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EmployerModel = runtime.Types.Result.DefaultSelection<Prisma.$EmployerPayload>;
export type AggregateEmployer = {
    _count: EmployerCountAggregateOutputType | null;
    _avg: EmployerAvgAggregateOutputType | null;
    _sum: EmployerSumAggregateOutputType | null;
    _min: EmployerMinAggregateOutputType | null;
    _max: EmployerMaxAggregateOutputType | null;
};
export type EmployerAvgAggregateOutputType = {
    id: number | null;
};
export type EmployerSumAggregateOutputType = {
    id: bigint | null;
};
export type EmployerMinAggregateOutputType = {
    id: bigint | null;
    name: string | null;
};
export type EmployerMaxAggregateOutputType = {
    id: bigint | null;
    name: string | null;
};
export type EmployerCountAggregateOutputType = {
    id: number;
    name: number;
    _all: number;
};
export type EmployerAvgAggregateInputType = {
    id?: true;
};
export type EmployerSumAggregateInputType = {
    id?: true;
};
export type EmployerMinAggregateInputType = {
    id?: true;
    name?: true;
};
export type EmployerMaxAggregateInputType = {
    id?: true;
    name?: true;
};
export type EmployerCountAggregateInputType = {
    id?: true;
    name?: true;
    _all?: true;
};
export type EmployerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployerWhereInput;
    orderBy?: Prisma.EmployerOrderByWithRelationInput | Prisma.EmployerOrderByWithRelationInput[];
    cursor?: Prisma.EmployerWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EmployerCountAggregateInputType;
    _avg?: EmployerAvgAggregateInputType;
    _sum?: EmployerSumAggregateInputType;
    _min?: EmployerMinAggregateInputType;
    _max?: EmployerMaxAggregateInputType;
};
export type GetEmployerAggregateType<T extends EmployerAggregateArgs> = {
    [P in keyof T & keyof AggregateEmployer]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEmployer[P]> : Prisma.GetScalarType<T[P], AggregateEmployer[P]>;
};
export type EmployerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployerWhereInput;
    orderBy?: Prisma.EmployerOrderByWithAggregationInput | Prisma.EmployerOrderByWithAggregationInput[];
    by: Prisma.EmployerScalarFieldEnum[] | Prisma.EmployerScalarFieldEnum;
    having?: Prisma.EmployerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EmployerCountAggregateInputType | true;
    _avg?: EmployerAvgAggregateInputType;
    _sum?: EmployerSumAggregateInputType;
    _min?: EmployerMinAggregateInputType;
    _max?: EmployerMaxAggregateInputType;
};
export type EmployerGroupByOutputType = {
    id: bigint;
    name: string;
    _count: EmployerCountAggregateOutputType | null;
    _avg: EmployerAvgAggregateOutputType | null;
    _sum: EmployerSumAggregateOutputType | null;
    _min: EmployerMinAggregateOutputType | null;
    _max: EmployerMaxAggregateOutputType | null;
};
type GetEmployerGroupByPayload<T extends EmployerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EmployerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EmployerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EmployerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EmployerGroupByOutputType[P]>;
}>>;
export type EmployerWhereInput = {
    AND?: Prisma.EmployerWhereInput | Prisma.EmployerWhereInput[];
    OR?: Prisma.EmployerWhereInput[];
    NOT?: Prisma.EmployerWhereInput | Prisma.EmployerWhereInput[];
    id?: Prisma.BigIntFilter<"Employer"> | bigint | number;
    name?: Prisma.StringFilter<"Employer"> | string;
    vacancies?: Prisma.VacancyListRelationFilter;
};
export type EmployerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    vacancies?: Prisma.VacancyOrderByRelationAggregateInput;
};
export type EmployerWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.EmployerWhereInput | Prisma.EmployerWhereInput[];
    OR?: Prisma.EmployerWhereInput[];
    NOT?: Prisma.EmployerWhereInput | Prisma.EmployerWhereInput[];
    name?: Prisma.StringFilter<"Employer"> | string;
    vacancies?: Prisma.VacancyListRelationFilter;
}, "id">;
export type EmployerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    _count?: Prisma.EmployerCountOrderByAggregateInput;
    _avg?: Prisma.EmployerAvgOrderByAggregateInput;
    _max?: Prisma.EmployerMaxOrderByAggregateInput;
    _min?: Prisma.EmployerMinOrderByAggregateInput;
    _sum?: Prisma.EmployerSumOrderByAggregateInput;
};
export type EmployerScalarWhereWithAggregatesInput = {
    AND?: Prisma.EmployerScalarWhereWithAggregatesInput | Prisma.EmployerScalarWhereWithAggregatesInput[];
    OR?: Prisma.EmployerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EmployerScalarWhereWithAggregatesInput | Prisma.EmployerScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"Employer"> | bigint | number;
    name?: Prisma.StringWithAggregatesFilter<"Employer"> | string;
};
export type EmployerCreateInput = {
    id: bigint | number;
    name: string;
    vacancies?: Prisma.VacancyCreateNestedManyWithoutEmployerInput;
};
export type EmployerUncheckedCreateInput = {
    id: bigint | number;
    name: string;
    vacancies?: Prisma.VacancyUncheckedCreateNestedManyWithoutEmployerInput;
};
export type EmployerUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    vacancies?: Prisma.VacancyUpdateManyWithoutEmployerNestedInput;
};
export type EmployerUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    vacancies?: Prisma.VacancyUncheckedUpdateManyWithoutEmployerNestedInput;
};
export type EmployerCreateManyInput = {
    id: bigint | number;
    name: string;
};
export type EmployerUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EmployerUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EmployerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type EmployerAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type EmployerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type EmployerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type EmployerSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type EmployerNullableScalarRelationFilter = {
    is?: Prisma.EmployerWhereInput | null;
    isNot?: Prisma.EmployerWhereInput | null;
};
export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number;
    increment?: bigint | number;
    decrement?: bigint | number;
    multiply?: bigint | number;
    divide?: bigint | number;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type EmployerCreateNestedOneWithoutVacanciesInput = {
    create?: Prisma.XOR<Prisma.EmployerCreateWithoutVacanciesInput, Prisma.EmployerUncheckedCreateWithoutVacanciesInput>;
    connectOrCreate?: Prisma.EmployerCreateOrConnectWithoutVacanciesInput;
    connect?: Prisma.EmployerWhereUniqueInput;
};
export type EmployerUpdateOneWithoutVacanciesNestedInput = {
    create?: Prisma.XOR<Prisma.EmployerCreateWithoutVacanciesInput, Prisma.EmployerUncheckedCreateWithoutVacanciesInput>;
    connectOrCreate?: Prisma.EmployerCreateOrConnectWithoutVacanciesInput;
    upsert?: Prisma.EmployerUpsertWithoutVacanciesInput;
    disconnect?: Prisma.EmployerWhereInput | boolean;
    delete?: Prisma.EmployerWhereInput | boolean;
    connect?: Prisma.EmployerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EmployerUpdateToOneWithWhereWithoutVacanciesInput, Prisma.EmployerUpdateWithoutVacanciesInput>, Prisma.EmployerUncheckedUpdateWithoutVacanciesInput>;
};
export type EmployerCreateWithoutVacanciesInput = {
    id: bigint | number;
    name: string;
};
export type EmployerUncheckedCreateWithoutVacanciesInput = {
    id: bigint | number;
    name: string;
};
export type EmployerCreateOrConnectWithoutVacanciesInput = {
    where: Prisma.EmployerWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployerCreateWithoutVacanciesInput, Prisma.EmployerUncheckedCreateWithoutVacanciesInput>;
};
export type EmployerUpsertWithoutVacanciesInput = {
    update: Prisma.XOR<Prisma.EmployerUpdateWithoutVacanciesInput, Prisma.EmployerUncheckedUpdateWithoutVacanciesInput>;
    create: Prisma.XOR<Prisma.EmployerCreateWithoutVacanciesInput, Prisma.EmployerUncheckedCreateWithoutVacanciesInput>;
    where?: Prisma.EmployerWhereInput;
};
export type EmployerUpdateToOneWithWhereWithoutVacanciesInput = {
    where?: Prisma.EmployerWhereInput;
    data: Prisma.XOR<Prisma.EmployerUpdateWithoutVacanciesInput, Prisma.EmployerUncheckedUpdateWithoutVacanciesInput>;
};
export type EmployerUpdateWithoutVacanciesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EmployerUncheckedUpdateWithoutVacanciesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EmployerCountOutputType = {
    vacancies: number;
};
export type EmployerCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    vacancies?: boolean | EmployerCountOutputTypeCountVacanciesArgs;
};
export type EmployerCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployerCountOutputTypeSelect<ExtArgs> | null;
};
export type EmployerCountOutputTypeCountVacanciesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VacancyWhereInput;
};
export type EmployerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    vacancies?: boolean | Prisma.Employer$vacanciesArgs<ExtArgs>;
    _count?: boolean | Prisma.EmployerCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["employer"]>;
export type EmployerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
}, ExtArgs["result"]["employer"]>;
export type EmployerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
}, ExtArgs["result"]["employer"]>;
export type EmployerSelectScalar = {
    id?: boolean;
    name?: boolean;
};
export type EmployerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name", ExtArgs["result"]["employer"]>;
export type EmployerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    vacancies?: boolean | Prisma.Employer$vacanciesArgs<ExtArgs>;
    _count?: boolean | Prisma.EmployerCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EmployerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type EmployerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $EmployerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Employer";
    objects: {
        vacancies: Prisma.$VacancyPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        name: string;
    }, ExtArgs["result"]["employer"]>;
    composites: {};
};
export type EmployerGetPayload<S extends boolean | null | undefined | EmployerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EmployerPayload, S>;
export type EmployerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EmployerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EmployerCountAggregateInputType | true;
};
export interface EmployerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Employer'];
        meta: {
            name: 'Employer';
        };
    };
    findUnique<T extends EmployerFindUniqueArgs>(args: Prisma.SelectSubset<T, EmployerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EmployerClient<runtime.Types.Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EmployerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EmployerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmployerClient<runtime.Types.Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EmployerFindFirstArgs>(args?: Prisma.SelectSubset<T, EmployerFindFirstArgs<ExtArgs>>): Prisma.Prisma__EmployerClient<runtime.Types.Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EmployerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EmployerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmployerClient<runtime.Types.Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EmployerFindManyArgs>(args?: Prisma.SelectSubset<T, EmployerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EmployerCreateArgs>(args: Prisma.SelectSubset<T, EmployerCreateArgs<ExtArgs>>): Prisma.Prisma__EmployerClient<runtime.Types.Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EmployerCreateManyArgs>(args?: Prisma.SelectSubset<T, EmployerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EmployerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EmployerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EmployerDeleteArgs>(args: Prisma.SelectSubset<T, EmployerDeleteArgs<ExtArgs>>): Prisma.Prisma__EmployerClient<runtime.Types.Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EmployerUpdateArgs>(args: Prisma.SelectSubset<T, EmployerUpdateArgs<ExtArgs>>): Prisma.Prisma__EmployerClient<runtime.Types.Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EmployerDeleteManyArgs>(args?: Prisma.SelectSubset<T, EmployerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EmployerUpdateManyArgs>(args: Prisma.SelectSubset<T, EmployerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EmployerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EmployerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EmployerUpsertArgs>(args: Prisma.SelectSubset<T, EmployerUpsertArgs<ExtArgs>>): Prisma.Prisma__EmployerClient<runtime.Types.Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EmployerCountArgs>(args?: Prisma.Subset<T, EmployerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EmployerCountAggregateOutputType> : number>;
    aggregate<T extends EmployerAggregateArgs>(args: Prisma.Subset<T, EmployerAggregateArgs>): Prisma.PrismaPromise<GetEmployerAggregateType<T>>;
    groupBy<T extends EmployerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EmployerGroupByArgs['orderBy'];
    } : {
        orderBy?: EmployerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EmployerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EmployerFieldRefs;
}
export interface Prisma__EmployerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    vacancies<T extends Prisma.Employer$vacanciesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Employer$vacanciesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VacancyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EmployerFieldRefs {
    readonly id: Prisma.FieldRef<"Employer", 'BigInt'>;
    readonly name: Prisma.FieldRef<"Employer", 'String'>;
}
export type EmployerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployerSelect<ExtArgs> | null;
    omit?: Prisma.EmployerOmit<ExtArgs> | null;
    include?: Prisma.EmployerInclude<ExtArgs> | null;
    where: Prisma.EmployerWhereUniqueInput;
};
export type EmployerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployerSelect<ExtArgs> | null;
    omit?: Prisma.EmployerOmit<ExtArgs> | null;
    include?: Prisma.EmployerInclude<ExtArgs> | null;
    where: Prisma.EmployerWhereUniqueInput;
};
export type EmployerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployerSelect<ExtArgs> | null;
    omit?: Prisma.EmployerOmit<ExtArgs> | null;
    include?: Prisma.EmployerInclude<ExtArgs> | null;
    where?: Prisma.EmployerWhereInput;
    orderBy?: Prisma.EmployerOrderByWithRelationInput | Prisma.EmployerOrderByWithRelationInput[];
    cursor?: Prisma.EmployerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployerScalarFieldEnum | Prisma.EmployerScalarFieldEnum[];
};
export type EmployerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployerSelect<ExtArgs> | null;
    omit?: Prisma.EmployerOmit<ExtArgs> | null;
    include?: Prisma.EmployerInclude<ExtArgs> | null;
    where?: Prisma.EmployerWhereInput;
    orderBy?: Prisma.EmployerOrderByWithRelationInput | Prisma.EmployerOrderByWithRelationInput[];
    cursor?: Prisma.EmployerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployerScalarFieldEnum | Prisma.EmployerScalarFieldEnum[];
};
export type EmployerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployerSelect<ExtArgs> | null;
    omit?: Prisma.EmployerOmit<ExtArgs> | null;
    include?: Prisma.EmployerInclude<ExtArgs> | null;
    where?: Prisma.EmployerWhereInput;
    orderBy?: Prisma.EmployerOrderByWithRelationInput | Prisma.EmployerOrderByWithRelationInput[];
    cursor?: Prisma.EmployerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployerScalarFieldEnum | Prisma.EmployerScalarFieldEnum[];
};
export type EmployerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployerSelect<ExtArgs> | null;
    omit?: Prisma.EmployerOmit<ExtArgs> | null;
    include?: Prisma.EmployerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployerCreateInput, Prisma.EmployerUncheckedCreateInput>;
};
export type EmployerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EmployerCreateManyInput | Prisma.EmployerCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EmployerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployerSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EmployerOmit<ExtArgs> | null;
    data: Prisma.EmployerCreateManyInput | Prisma.EmployerCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EmployerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployerSelect<ExtArgs> | null;
    omit?: Prisma.EmployerOmit<ExtArgs> | null;
    include?: Prisma.EmployerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployerUpdateInput, Prisma.EmployerUncheckedUpdateInput>;
    where: Prisma.EmployerWhereUniqueInput;
};
export type EmployerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EmployerUpdateManyMutationInput, Prisma.EmployerUncheckedUpdateManyInput>;
    where?: Prisma.EmployerWhereInput;
    limit?: number;
};
export type EmployerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployerSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EmployerOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployerUpdateManyMutationInput, Prisma.EmployerUncheckedUpdateManyInput>;
    where?: Prisma.EmployerWhereInput;
    limit?: number;
};
export type EmployerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployerSelect<ExtArgs> | null;
    omit?: Prisma.EmployerOmit<ExtArgs> | null;
    include?: Prisma.EmployerInclude<ExtArgs> | null;
    where: Prisma.EmployerWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployerCreateInput, Prisma.EmployerUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EmployerUpdateInput, Prisma.EmployerUncheckedUpdateInput>;
};
export type EmployerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployerSelect<ExtArgs> | null;
    omit?: Prisma.EmployerOmit<ExtArgs> | null;
    include?: Prisma.EmployerInclude<ExtArgs> | null;
    where: Prisma.EmployerWhereUniqueInput;
};
export type EmployerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployerWhereInput;
    limit?: number;
};
export type Employer$vacanciesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VacancySelect<ExtArgs> | null;
    omit?: Prisma.VacancyOmit<ExtArgs> | null;
    include?: Prisma.VacancyInclude<ExtArgs> | null;
    where?: Prisma.VacancyWhereInput;
    orderBy?: Prisma.VacancyOrderByWithRelationInput | Prisma.VacancyOrderByWithRelationInput[];
    cursor?: Prisma.VacancyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VacancyScalarFieldEnum | Prisma.VacancyScalarFieldEnum[];
};
export type EmployerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployerSelect<ExtArgs> | null;
    omit?: Prisma.EmployerOmit<ExtArgs> | null;
    include?: Prisma.EmployerInclude<ExtArgs> | null;
};
export {};

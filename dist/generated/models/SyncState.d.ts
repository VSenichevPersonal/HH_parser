import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SyncStateModel = runtime.Types.Result.DefaultSelection<Prisma.$SyncStatePayload>;
export type AggregateSyncState = {
    _count: SyncStateCountAggregateOutputType | null;
    _avg: SyncStateAvgAggregateOutputType | null;
    _sum: SyncStateSumAggregateOutputType | null;
    _min: SyncStateMinAggregateOutputType | null;
    _max: SyncStateMaxAggregateOutputType | null;
};
export type SyncStateAvgAggregateOutputType = {
    page: number | null;
};
export type SyncStateSumAggregateOutputType = {
    page: number | null;
};
export type SyncStateMinAggregateOutputType = {
    source: string | null;
    lastSeen: Date | null;
    page: number | null;
};
export type SyncStateMaxAggregateOutputType = {
    source: string | null;
    lastSeen: Date | null;
    page: number | null;
};
export type SyncStateCountAggregateOutputType = {
    source: number;
    lastSeen: number;
    page: number;
    _all: number;
};
export type SyncStateAvgAggregateInputType = {
    page?: true;
};
export type SyncStateSumAggregateInputType = {
    page?: true;
};
export type SyncStateMinAggregateInputType = {
    source?: true;
    lastSeen?: true;
    page?: true;
};
export type SyncStateMaxAggregateInputType = {
    source?: true;
    lastSeen?: true;
    page?: true;
};
export type SyncStateCountAggregateInputType = {
    source?: true;
    lastSeen?: true;
    page?: true;
    _all?: true;
};
export type SyncStateAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SyncStateWhereInput;
    orderBy?: Prisma.SyncStateOrderByWithRelationInput | Prisma.SyncStateOrderByWithRelationInput[];
    cursor?: Prisma.SyncStateWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SyncStateCountAggregateInputType;
    _avg?: SyncStateAvgAggregateInputType;
    _sum?: SyncStateSumAggregateInputType;
    _min?: SyncStateMinAggregateInputType;
    _max?: SyncStateMaxAggregateInputType;
};
export type GetSyncStateAggregateType<T extends SyncStateAggregateArgs> = {
    [P in keyof T & keyof AggregateSyncState]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSyncState[P]> : Prisma.GetScalarType<T[P], AggregateSyncState[P]>;
};
export type SyncStateGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SyncStateWhereInput;
    orderBy?: Prisma.SyncStateOrderByWithAggregationInput | Prisma.SyncStateOrderByWithAggregationInput[];
    by: Prisma.SyncStateScalarFieldEnum[] | Prisma.SyncStateScalarFieldEnum;
    having?: Prisma.SyncStateScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SyncStateCountAggregateInputType | true;
    _avg?: SyncStateAvgAggregateInputType;
    _sum?: SyncStateSumAggregateInputType;
    _min?: SyncStateMinAggregateInputType;
    _max?: SyncStateMaxAggregateInputType;
};
export type SyncStateGroupByOutputType = {
    source: string;
    lastSeen: Date | null;
    page: number;
    _count: SyncStateCountAggregateOutputType | null;
    _avg: SyncStateAvgAggregateOutputType | null;
    _sum: SyncStateSumAggregateOutputType | null;
    _min: SyncStateMinAggregateOutputType | null;
    _max: SyncStateMaxAggregateOutputType | null;
};
type GetSyncStateGroupByPayload<T extends SyncStateGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SyncStateGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SyncStateGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SyncStateGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SyncStateGroupByOutputType[P]>;
}>>;
export type SyncStateWhereInput = {
    AND?: Prisma.SyncStateWhereInput | Prisma.SyncStateWhereInput[];
    OR?: Prisma.SyncStateWhereInput[];
    NOT?: Prisma.SyncStateWhereInput | Prisma.SyncStateWhereInput[];
    source?: Prisma.StringFilter<"SyncState"> | string;
    lastSeen?: Prisma.DateTimeNullableFilter<"SyncState"> | Date | string | null;
    page?: Prisma.IntFilter<"SyncState"> | number;
};
export type SyncStateOrderByWithRelationInput = {
    source?: Prisma.SortOrder;
    lastSeen?: Prisma.SortOrderInput | Prisma.SortOrder;
    page?: Prisma.SortOrder;
};
export type SyncStateWhereUniqueInput = Prisma.AtLeast<{
    source?: string;
    AND?: Prisma.SyncStateWhereInput | Prisma.SyncStateWhereInput[];
    OR?: Prisma.SyncStateWhereInput[];
    NOT?: Prisma.SyncStateWhereInput | Prisma.SyncStateWhereInput[];
    lastSeen?: Prisma.DateTimeNullableFilter<"SyncState"> | Date | string | null;
    page?: Prisma.IntFilter<"SyncState"> | number;
}, "source">;
export type SyncStateOrderByWithAggregationInput = {
    source?: Prisma.SortOrder;
    lastSeen?: Prisma.SortOrderInput | Prisma.SortOrder;
    page?: Prisma.SortOrder;
    _count?: Prisma.SyncStateCountOrderByAggregateInput;
    _avg?: Prisma.SyncStateAvgOrderByAggregateInput;
    _max?: Prisma.SyncStateMaxOrderByAggregateInput;
    _min?: Prisma.SyncStateMinOrderByAggregateInput;
    _sum?: Prisma.SyncStateSumOrderByAggregateInput;
};
export type SyncStateScalarWhereWithAggregatesInput = {
    AND?: Prisma.SyncStateScalarWhereWithAggregatesInput | Prisma.SyncStateScalarWhereWithAggregatesInput[];
    OR?: Prisma.SyncStateScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SyncStateScalarWhereWithAggregatesInput | Prisma.SyncStateScalarWhereWithAggregatesInput[];
    source?: Prisma.StringWithAggregatesFilter<"SyncState"> | string;
    lastSeen?: Prisma.DateTimeNullableWithAggregatesFilter<"SyncState"> | Date | string | null;
    page?: Prisma.IntWithAggregatesFilter<"SyncState"> | number;
};
export type SyncStateCreateInput = {
    source: string;
    lastSeen?: Date | string | null;
    page?: number;
};
export type SyncStateUncheckedCreateInput = {
    source: string;
    lastSeen?: Date | string | null;
    page?: number;
};
export type SyncStateUpdateInput = {
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    lastSeen?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    page?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type SyncStateUncheckedUpdateInput = {
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    lastSeen?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    page?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type SyncStateCreateManyInput = {
    source: string;
    lastSeen?: Date | string | null;
    page?: number;
};
export type SyncStateUpdateManyMutationInput = {
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    lastSeen?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    page?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type SyncStateUncheckedUpdateManyInput = {
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    lastSeen?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    page?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type SyncStateCountOrderByAggregateInput = {
    source?: Prisma.SortOrder;
    lastSeen?: Prisma.SortOrder;
    page?: Prisma.SortOrder;
};
export type SyncStateAvgOrderByAggregateInput = {
    page?: Prisma.SortOrder;
};
export type SyncStateMaxOrderByAggregateInput = {
    source?: Prisma.SortOrder;
    lastSeen?: Prisma.SortOrder;
    page?: Prisma.SortOrder;
};
export type SyncStateMinOrderByAggregateInput = {
    source?: Prisma.SortOrder;
    lastSeen?: Prisma.SortOrder;
    page?: Prisma.SortOrder;
};
export type SyncStateSumOrderByAggregateInput = {
    page?: Prisma.SortOrder;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type SyncStateSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    source?: boolean;
    lastSeen?: boolean;
    page?: boolean;
}, ExtArgs["result"]["syncState"]>;
export type SyncStateSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    source?: boolean;
    lastSeen?: boolean;
    page?: boolean;
}, ExtArgs["result"]["syncState"]>;
export type SyncStateSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    source?: boolean;
    lastSeen?: boolean;
    page?: boolean;
}, ExtArgs["result"]["syncState"]>;
export type SyncStateSelectScalar = {
    source?: boolean;
    lastSeen?: boolean;
    page?: boolean;
};
export type SyncStateOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"source" | "lastSeen" | "page", ExtArgs["result"]["syncState"]>;
export type $SyncStatePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SyncState";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        source: string;
        lastSeen: Date | null;
        page: number;
    }, ExtArgs["result"]["syncState"]>;
    composites: {};
};
export type SyncStateGetPayload<S extends boolean | null | undefined | SyncStateDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SyncStatePayload, S>;
export type SyncStateCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SyncStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SyncStateCountAggregateInputType | true;
};
export interface SyncStateDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SyncState'];
        meta: {
            name: 'SyncState';
        };
    };
    findUnique<T extends SyncStateFindUniqueArgs>(args: Prisma.SelectSubset<T, SyncStateFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SyncStateClient<runtime.Types.Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SyncStateFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SyncStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SyncStateClient<runtime.Types.Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SyncStateFindFirstArgs>(args?: Prisma.SelectSubset<T, SyncStateFindFirstArgs<ExtArgs>>): Prisma.Prisma__SyncStateClient<runtime.Types.Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SyncStateFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SyncStateFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SyncStateClient<runtime.Types.Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SyncStateFindManyArgs>(args?: Prisma.SelectSubset<T, SyncStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SyncStateCreateArgs>(args: Prisma.SelectSubset<T, SyncStateCreateArgs<ExtArgs>>): Prisma.Prisma__SyncStateClient<runtime.Types.Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SyncStateCreateManyArgs>(args?: Prisma.SelectSubset<T, SyncStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SyncStateCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SyncStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SyncStateDeleteArgs>(args: Prisma.SelectSubset<T, SyncStateDeleteArgs<ExtArgs>>): Prisma.Prisma__SyncStateClient<runtime.Types.Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SyncStateUpdateArgs>(args: Prisma.SelectSubset<T, SyncStateUpdateArgs<ExtArgs>>): Prisma.Prisma__SyncStateClient<runtime.Types.Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SyncStateDeleteManyArgs>(args?: Prisma.SelectSubset<T, SyncStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SyncStateUpdateManyArgs>(args: Prisma.SelectSubset<T, SyncStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SyncStateUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SyncStateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SyncStateUpsertArgs>(args: Prisma.SelectSubset<T, SyncStateUpsertArgs<ExtArgs>>): Prisma.Prisma__SyncStateClient<runtime.Types.Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SyncStateCountArgs>(args?: Prisma.Subset<T, SyncStateCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SyncStateCountAggregateOutputType> : number>;
    aggregate<T extends SyncStateAggregateArgs>(args: Prisma.Subset<T, SyncStateAggregateArgs>): Prisma.PrismaPromise<GetSyncStateAggregateType<T>>;
    groupBy<T extends SyncStateGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SyncStateGroupByArgs['orderBy'];
    } : {
        orderBy?: SyncStateGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SyncStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSyncStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SyncStateFieldRefs;
}
export interface Prisma__SyncStateClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SyncStateFieldRefs {
    readonly source: Prisma.FieldRef<"SyncState", 'String'>;
    readonly lastSeen: Prisma.FieldRef<"SyncState", 'DateTime'>;
    readonly page: Prisma.FieldRef<"SyncState", 'Int'>;
}
export type SyncStateFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SyncStateSelect<ExtArgs> | null;
    omit?: Prisma.SyncStateOmit<ExtArgs> | null;
    where: Prisma.SyncStateWhereUniqueInput;
};
export type SyncStateFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SyncStateSelect<ExtArgs> | null;
    omit?: Prisma.SyncStateOmit<ExtArgs> | null;
    where: Prisma.SyncStateWhereUniqueInput;
};
export type SyncStateFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SyncStateSelect<ExtArgs> | null;
    omit?: Prisma.SyncStateOmit<ExtArgs> | null;
    where?: Prisma.SyncStateWhereInput;
    orderBy?: Prisma.SyncStateOrderByWithRelationInput | Prisma.SyncStateOrderByWithRelationInput[];
    cursor?: Prisma.SyncStateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SyncStateScalarFieldEnum | Prisma.SyncStateScalarFieldEnum[];
};
export type SyncStateFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SyncStateSelect<ExtArgs> | null;
    omit?: Prisma.SyncStateOmit<ExtArgs> | null;
    where?: Prisma.SyncStateWhereInput;
    orderBy?: Prisma.SyncStateOrderByWithRelationInput | Prisma.SyncStateOrderByWithRelationInput[];
    cursor?: Prisma.SyncStateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SyncStateScalarFieldEnum | Prisma.SyncStateScalarFieldEnum[];
};
export type SyncStateFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SyncStateSelect<ExtArgs> | null;
    omit?: Prisma.SyncStateOmit<ExtArgs> | null;
    where?: Prisma.SyncStateWhereInput;
    orderBy?: Prisma.SyncStateOrderByWithRelationInput | Prisma.SyncStateOrderByWithRelationInput[];
    cursor?: Prisma.SyncStateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SyncStateScalarFieldEnum | Prisma.SyncStateScalarFieldEnum[];
};
export type SyncStateCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SyncStateSelect<ExtArgs> | null;
    omit?: Prisma.SyncStateOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SyncStateCreateInput, Prisma.SyncStateUncheckedCreateInput>;
};
export type SyncStateCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SyncStateCreateManyInput | Prisma.SyncStateCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SyncStateCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SyncStateSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SyncStateOmit<ExtArgs> | null;
    data: Prisma.SyncStateCreateManyInput | Prisma.SyncStateCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SyncStateUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SyncStateSelect<ExtArgs> | null;
    omit?: Prisma.SyncStateOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SyncStateUpdateInput, Prisma.SyncStateUncheckedUpdateInput>;
    where: Prisma.SyncStateWhereUniqueInput;
};
export type SyncStateUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SyncStateUpdateManyMutationInput, Prisma.SyncStateUncheckedUpdateManyInput>;
    where?: Prisma.SyncStateWhereInput;
    limit?: number;
};
export type SyncStateUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SyncStateSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SyncStateOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SyncStateUpdateManyMutationInput, Prisma.SyncStateUncheckedUpdateManyInput>;
    where?: Prisma.SyncStateWhereInput;
    limit?: number;
};
export type SyncStateUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SyncStateSelect<ExtArgs> | null;
    omit?: Prisma.SyncStateOmit<ExtArgs> | null;
    where: Prisma.SyncStateWhereUniqueInput;
    create: Prisma.XOR<Prisma.SyncStateCreateInput, Prisma.SyncStateUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SyncStateUpdateInput, Prisma.SyncStateUncheckedUpdateInput>;
};
export type SyncStateDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SyncStateSelect<ExtArgs> | null;
    omit?: Prisma.SyncStateOmit<ExtArgs> | null;
    where: Prisma.SyncStateWhereUniqueInput;
};
export type SyncStateDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SyncStateWhereInput;
    limit?: number;
};
export type SyncStateDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SyncStateSelect<ExtArgs> | null;
    omit?: Prisma.SyncStateOmit<ExtArgs> | null;
};
export {};

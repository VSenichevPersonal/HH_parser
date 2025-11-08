import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SearchProfileModel = runtime.Types.Result.DefaultSelection<Prisma.$SearchProfilePayload>;
export type AggregateSearchProfile = {
    _count: SearchProfileCountAggregateOutputType | null;
    _min: SearchProfileMinAggregateOutputType | null;
    _max: SearchProfileMaxAggregateOutputType | null;
};
export type SearchProfileMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    entityType: string | null;
    enabled: boolean | null;
    scheduleCron: string | null;
    lastRun: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SearchProfileMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    entityType: string | null;
    enabled: boolean | null;
    scheduleCron: string | null;
    lastRun: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SearchProfileCountAggregateOutputType = {
    id: number;
    name: number;
    entityType: number;
    params: number;
    enabled: number;
    scheduleCron: number;
    lastRun: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SearchProfileMinAggregateInputType = {
    id?: true;
    name?: true;
    entityType?: true;
    enabled?: true;
    scheduleCron?: true;
    lastRun?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SearchProfileMaxAggregateInputType = {
    id?: true;
    name?: true;
    entityType?: true;
    enabled?: true;
    scheduleCron?: true;
    lastRun?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SearchProfileCountAggregateInputType = {
    id?: true;
    name?: true;
    entityType?: true;
    params?: true;
    enabled?: true;
    scheduleCron?: true;
    lastRun?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SearchProfileAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SearchProfileWhereInput;
    orderBy?: Prisma.SearchProfileOrderByWithRelationInput | Prisma.SearchProfileOrderByWithRelationInput[];
    cursor?: Prisma.SearchProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SearchProfileCountAggregateInputType;
    _min?: SearchProfileMinAggregateInputType;
    _max?: SearchProfileMaxAggregateInputType;
};
export type GetSearchProfileAggregateType<T extends SearchProfileAggregateArgs> = {
    [P in keyof T & keyof AggregateSearchProfile]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSearchProfile[P]> : Prisma.GetScalarType<T[P], AggregateSearchProfile[P]>;
};
export type SearchProfileGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SearchProfileWhereInput;
    orderBy?: Prisma.SearchProfileOrderByWithAggregationInput | Prisma.SearchProfileOrderByWithAggregationInput[];
    by: Prisma.SearchProfileScalarFieldEnum[] | Prisma.SearchProfileScalarFieldEnum;
    having?: Prisma.SearchProfileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SearchProfileCountAggregateInputType | true;
    _min?: SearchProfileMinAggregateInputType;
    _max?: SearchProfileMaxAggregateInputType;
};
export type SearchProfileGroupByOutputType = {
    id: string;
    name: string;
    entityType: string;
    params: runtime.JsonValue;
    enabled: boolean;
    scheduleCron: string;
    lastRun: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: SearchProfileCountAggregateOutputType | null;
    _min: SearchProfileMinAggregateOutputType | null;
    _max: SearchProfileMaxAggregateOutputType | null;
};
type GetSearchProfileGroupByPayload<T extends SearchProfileGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SearchProfileGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SearchProfileGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SearchProfileGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SearchProfileGroupByOutputType[P]>;
}>>;
export type SearchProfileWhereInput = {
    AND?: Prisma.SearchProfileWhereInput | Prisma.SearchProfileWhereInput[];
    OR?: Prisma.SearchProfileWhereInput[];
    NOT?: Prisma.SearchProfileWhereInput | Prisma.SearchProfileWhereInput[];
    id?: Prisma.StringFilter<"SearchProfile"> | string;
    name?: Prisma.StringFilter<"SearchProfile"> | string;
    entityType?: Prisma.StringFilter<"SearchProfile"> | string;
    params?: Prisma.JsonFilter<"SearchProfile">;
    enabled?: Prisma.BoolFilter<"SearchProfile"> | boolean;
    scheduleCron?: Prisma.StringFilter<"SearchProfile"> | string;
    lastRun?: Prisma.DateTimeNullableFilter<"SearchProfile"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"SearchProfile"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SearchProfile"> | Date | string;
};
export type SearchProfileOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    params?: Prisma.SortOrder;
    enabled?: Prisma.SortOrder;
    scheduleCron?: Prisma.SortOrder;
    lastRun?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SearchProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.SearchProfileWhereInput | Prisma.SearchProfileWhereInput[];
    OR?: Prisma.SearchProfileWhereInput[];
    NOT?: Prisma.SearchProfileWhereInput | Prisma.SearchProfileWhereInput[];
    name?: Prisma.StringFilter<"SearchProfile"> | string;
    entityType?: Prisma.StringFilter<"SearchProfile"> | string;
    params?: Prisma.JsonFilter<"SearchProfile">;
    enabled?: Prisma.BoolFilter<"SearchProfile"> | boolean;
    scheduleCron?: Prisma.StringFilter<"SearchProfile"> | string;
    lastRun?: Prisma.DateTimeNullableFilter<"SearchProfile"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"SearchProfile"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SearchProfile"> | Date | string;
}, "id">;
export type SearchProfileOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    params?: Prisma.SortOrder;
    enabled?: Prisma.SortOrder;
    scheduleCron?: Prisma.SortOrder;
    lastRun?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SearchProfileCountOrderByAggregateInput;
    _max?: Prisma.SearchProfileMaxOrderByAggregateInput;
    _min?: Prisma.SearchProfileMinOrderByAggregateInput;
};
export type SearchProfileScalarWhereWithAggregatesInput = {
    AND?: Prisma.SearchProfileScalarWhereWithAggregatesInput | Prisma.SearchProfileScalarWhereWithAggregatesInput[];
    OR?: Prisma.SearchProfileScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SearchProfileScalarWhereWithAggregatesInput | Prisma.SearchProfileScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"SearchProfile"> | string;
    name?: Prisma.StringWithAggregatesFilter<"SearchProfile"> | string;
    entityType?: Prisma.StringWithAggregatesFilter<"SearchProfile"> | string;
    params?: Prisma.JsonWithAggregatesFilter<"SearchProfile">;
    enabled?: Prisma.BoolWithAggregatesFilter<"SearchProfile"> | boolean;
    scheduleCron?: Prisma.StringWithAggregatesFilter<"SearchProfile"> | string;
    lastRun?: Prisma.DateTimeNullableWithAggregatesFilter<"SearchProfile"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SearchProfile"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"SearchProfile"> | Date | string;
};
export type SearchProfileCreateInput = {
    id?: string;
    name: string;
    entityType: string;
    params: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    enabled?: boolean;
    scheduleCron?: string;
    lastRun?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SearchProfileUncheckedCreateInput = {
    id?: string;
    name: string;
    entityType: string;
    params: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    enabled?: boolean;
    scheduleCron?: string;
    lastRun?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SearchProfileUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.StringFieldUpdateOperationsInput | string;
    params?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    scheduleCron?: Prisma.StringFieldUpdateOperationsInput | string;
    lastRun?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SearchProfileUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.StringFieldUpdateOperationsInput | string;
    params?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    scheduleCron?: Prisma.StringFieldUpdateOperationsInput | string;
    lastRun?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SearchProfileCreateManyInput = {
    id?: string;
    name: string;
    entityType: string;
    params: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    enabled?: boolean;
    scheduleCron?: string;
    lastRun?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SearchProfileUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.StringFieldUpdateOperationsInput | string;
    params?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    scheduleCron?: Prisma.StringFieldUpdateOperationsInput | string;
    lastRun?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SearchProfileUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.StringFieldUpdateOperationsInput | string;
    params?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    scheduleCron?: Prisma.StringFieldUpdateOperationsInput | string;
    lastRun?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SearchProfileCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    params?: Prisma.SortOrder;
    enabled?: Prisma.SortOrder;
    scheduleCron?: Prisma.SortOrder;
    lastRun?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SearchProfileMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    enabled?: Prisma.SortOrder;
    scheduleCron?: Prisma.SortOrder;
    lastRun?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SearchProfileMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    enabled?: Prisma.SortOrder;
    scheduleCron?: Prisma.SortOrder;
    lastRun?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SearchProfileSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    entityType?: boolean;
    params?: boolean;
    enabled?: boolean;
    scheduleCron?: boolean;
    lastRun?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["searchProfile"]>;
export type SearchProfileSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    entityType?: boolean;
    params?: boolean;
    enabled?: boolean;
    scheduleCron?: boolean;
    lastRun?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["searchProfile"]>;
export type SearchProfileSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    entityType?: boolean;
    params?: boolean;
    enabled?: boolean;
    scheduleCron?: boolean;
    lastRun?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["searchProfile"]>;
export type SearchProfileSelectScalar = {
    id?: boolean;
    name?: boolean;
    entityType?: boolean;
    params?: boolean;
    enabled?: boolean;
    scheduleCron?: boolean;
    lastRun?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SearchProfileOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "entityType" | "params" | "enabled" | "scheduleCron" | "lastRun" | "createdAt" | "updatedAt", ExtArgs["result"]["searchProfile"]>;
export type $SearchProfilePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SearchProfile";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        entityType: string;
        params: runtime.JsonValue;
        enabled: boolean;
        scheduleCron: string;
        lastRun: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["searchProfile"]>;
    composites: {};
};
export type SearchProfileGetPayload<S extends boolean | null | undefined | SearchProfileDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SearchProfilePayload, S>;
export type SearchProfileCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SearchProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SearchProfileCountAggregateInputType | true;
};
export interface SearchProfileDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SearchProfile'];
        meta: {
            name: 'SearchProfile';
        };
    };
    findUnique<T extends SearchProfileFindUniqueArgs>(args: Prisma.SelectSubset<T, SearchProfileFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SearchProfileClient<runtime.Types.Result.GetResult<Prisma.$SearchProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SearchProfileFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SearchProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SearchProfileClient<runtime.Types.Result.GetResult<Prisma.$SearchProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SearchProfileFindFirstArgs>(args?: Prisma.SelectSubset<T, SearchProfileFindFirstArgs<ExtArgs>>): Prisma.Prisma__SearchProfileClient<runtime.Types.Result.GetResult<Prisma.$SearchProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SearchProfileFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SearchProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SearchProfileClient<runtime.Types.Result.GetResult<Prisma.$SearchProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SearchProfileFindManyArgs>(args?: Prisma.SelectSubset<T, SearchProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SearchProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SearchProfileCreateArgs>(args: Prisma.SelectSubset<T, SearchProfileCreateArgs<ExtArgs>>): Prisma.Prisma__SearchProfileClient<runtime.Types.Result.GetResult<Prisma.$SearchProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SearchProfileCreateManyArgs>(args?: Prisma.SelectSubset<T, SearchProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SearchProfileCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SearchProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SearchProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SearchProfileDeleteArgs>(args: Prisma.SelectSubset<T, SearchProfileDeleteArgs<ExtArgs>>): Prisma.Prisma__SearchProfileClient<runtime.Types.Result.GetResult<Prisma.$SearchProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SearchProfileUpdateArgs>(args: Prisma.SelectSubset<T, SearchProfileUpdateArgs<ExtArgs>>): Prisma.Prisma__SearchProfileClient<runtime.Types.Result.GetResult<Prisma.$SearchProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SearchProfileDeleteManyArgs>(args?: Prisma.SelectSubset<T, SearchProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SearchProfileUpdateManyArgs>(args: Prisma.SelectSubset<T, SearchProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SearchProfileUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SearchProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SearchProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SearchProfileUpsertArgs>(args: Prisma.SelectSubset<T, SearchProfileUpsertArgs<ExtArgs>>): Prisma.Prisma__SearchProfileClient<runtime.Types.Result.GetResult<Prisma.$SearchProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SearchProfileCountArgs>(args?: Prisma.Subset<T, SearchProfileCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SearchProfileCountAggregateOutputType> : number>;
    aggregate<T extends SearchProfileAggregateArgs>(args: Prisma.Subset<T, SearchProfileAggregateArgs>): Prisma.PrismaPromise<GetSearchProfileAggregateType<T>>;
    groupBy<T extends SearchProfileGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SearchProfileGroupByArgs['orderBy'];
    } : {
        orderBy?: SearchProfileGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SearchProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSearchProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SearchProfileFieldRefs;
}
export interface Prisma__SearchProfileClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SearchProfileFieldRefs {
    readonly id: Prisma.FieldRef<"SearchProfile", 'String'>;
    readonly name: Prisma.FieldRef<"SearchProfile", 'String'>;
    readonly entityType: Prisma.FieldRef<"SearchProfile", 'String'>;
    readonly params: Prisma.FieldRef<"SearchProfile", 'Json'>;
    readonly enabled: Prisma.FieldRef<"SearchProfile", 'Boolean'>;
    readonly scheduleCron: Prisma.FieldRef<"SearchProfile", 'String'>;
    readonly lastRun: Prisma.FieldRef<"SearchProfile", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"SearchProfile", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"SearchProfile", 'DateTime'>;
}
export type SearchProfileFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SearchProfileSelect<ExtArgs> | null;
    omit?: Prisma.SearchProfileOmit<ExtArgs> | null;
    where: Prisma.SearchProfileWhereUniqueInput;
};
export type SearchProfileFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SearchProfileSelect<ExtArgs> | null;
    omit?: Prisma.SearchProfileOmit<ExtArgs> | null;
    where: Prisma.SearchProfileWhereUniqueInput;
};
export type SearchProfileFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SearchProfileSelect<ExtArgs> | null;
    omit?: Prisma.SearchProfileOmit<ExtArgs> | null;
    where?: Prisma.SearchProfileWhereInput;
    orderBy?: Prisma.SearchProfileOrderByWithRelationInput | Prisma.SearchProfileOrderByWithRelationInput[];
    cursor?: Prisma.SearchProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SearchProfileScalarFieldEnum | Prisma.SearchProfileScalarFieldEnum[];
};
export type SearchProfileFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SearchProfileSelect<ExtArgs> | null;
    omit?: Prisma.SearchProfileOmit<ExtArgs> | null;
    where?: Prisma.SearchProfileWhereInput;
    orderBy?: Prisma.SearchProfileOrderByWithRelationInput | Prisma.SearchProfileOrderByWithRelationInput[];
    cursor?: Prisma.SearchProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SearchProfileScalarFieldEnum | Prisma.SearchProfileScalarFieldEnum[];
};
export type SearchProfileFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SearchProfileSelect<ExtArgs> | null;
    omit?: Prisma.SearchProfileOmit<ExtArgs> | null;
    where?: Prisma.SearchProfileWhereInput;
    orderBy?: Prisma.SearchProfileOrderByWithRelationInput | Prisma.SearchProfileOrderByWithRelationInput[];
    cursor?: Prisma.SearchProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SearchProfileScalarFieldEnum | Prisma.SearchProfileScalarFieldEnum[];
};
export type SearchProfileCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SearchProfileSelect<ExtArgs> | null;
    omit?: Prisma.SearchProfileOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SearchProfileCreateInput, Prisma.SearchProfileUncheckedCreateInput>;
};
export type SearchProfileCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SearchProfileCreateManyInput | Prisma.SearchProfileCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SearchProfileCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SearchProfileSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SearchProfileOmit<ExtArgs> | null;
    data: Prisma.SearchProfileCreateManyInput | Prisma.SearchProfileCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SearchProfileUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SearchProfileSelect<ExtArgs> | null;
    omit?: Prisma.SearchProfileOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SearchProfileUpdateInput, Prisma.SearchProfileUncheckedUpdateInput>;
    where: Prisma.SearchProfileWhereUniqueInput;
};
export type SearchProfileUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SearchProfileUpdateManyMutationInput, Prisma.SearchProfileUncheckedUpdateManyInput>;
    where?: Prisma.SearchProfileWhereInput;
    limit?: number;
};
export type SearchProfileUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SearchProfileSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SearchProfileOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SearchProfileUpdateManyMutationInput, Prisma.SearchProfileUncheckedUpdateManyInput>;
    where?: Prisma.SearchProfileWhereInput;
    limit?: number;
};
export type SearchProfileUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SearchProfileSelect<ExtArgs> | null;
    omit?: Prisma.SearchProfileOmit<ExtArgs> | null;
    where: Prisma.SearchProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.SearchProfileCreateInput, Prisma.SearchProfileUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SearchProfileUpdateInput, Prisma.SearchProfileUncheckedUpdateInput>;
};
export type SearchProfileDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SearchProfileSelect<ExtArgs> | null;
    omit?: Prisma.SearchProfileOmit<ExtArgs> | null;
    where: Prisma.SearchProfileWhereUniqueInput;
};
export type SearchProfileDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SearchProfileWhereInput;
    limit?: number;
};
export type SearchProfileDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SearchProfileSelect<ExtArgs> | null;
    omit?: Prisma.SearchProfileOmit<ExtArgs> | null;
};
export {};

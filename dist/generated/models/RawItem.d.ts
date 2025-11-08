import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RawItemModel = runtime.Types.Result.DefaultSelection<Prisma.$RawItemPayload>;
export type AggregateRawItem = {
    _count: RawItemCountAggregateOutputType | null;
    _min: RawItemMinAggregateOutputType | null;
    _max: RawItemMaxAggregateOutputType | null;
};
export type RawItemMinAggregateOutputType = {
    source: string | null;
    hhId: string | null;
    fetchedAt: Date | null;
};
export type RawItemMaxAggregateOutputType = {
    source: string | null;
    hhId: string | null;
    fetchedAt: Date | null;
};
export type RawItemCountAggregateOutputType = {
    source: number;
    hhId: number;
    payload: number;
    fetchedAt: number;
    _all: number;
};
export type RawItemMinAggregateInputType = {
    source?: true;
    hhId?: true;
    fetchedAt?: true;
};
export type RawItemMaxAggregateInputType = {
    source?: true;
    hhId?: true;
    fetchedAt?: true;
};
export type RawItemCountAggregateInputType = {
    source?: true;
    hhId?: true;
    payload?: true;
    fetchedAt?: true;
    _all?: true;
};
export type RawItemAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RawItemWhereInput;
    orderBy?: Prisma.RawItemOrderByWithRelationInput | Prisma.RawItemOrderByWithRelationInput[];
    cursor?: Prisma.RawItemWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RawItemCountAggregateInputType;
    _min?: RawItemMinAggregateInputType;
    _max?: RawItemMaxAggregateInputType;
};
export type GetRawItemAggregateType<T extends RawItemAggregateArgs> = {
    [P in keyof T & keyof AggregateRawItem]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRawItem[P]> : Prisma.GetScalarType<T[P], AggregateRawItem[P]>;
};
export type RawItemGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RawItemWhereInput;
    orderBy?: Prisma.RawItemOrderByWithAggregationInput | Prisma.RawItemOrderByWithAggregationInput[];
    by: Prisma.RawItemScalarFieldEnum[] | Prisma.RawItemScalarFieldEnum;
    having?: Prisma.RawItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RawItemCountAggregateInputType | true;
    _min?: RawItemMinAggregateInputType;
    _max?: RawItemMaxAggregateInputType;
};
export type RawItemGroupByOutputType = {
    source: string;
    hhId: string;
    payload: runtime.JsonValue;
    fetchedAt: Date;
    _count: RawItemCountAggregateOutputType | null;
    _min: RawItemMinAggregateOutputType | null;
    _max: RawItemMaxAggregateOutputType | null;
};
type GetRawItemGroupByPayload<T extends RawItemGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RawItemGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RawItemGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RawItemGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RawItemGroupByOutputType[P]>;
}>>;
export type RawItemWhereInput = {
    AND?: Prisma.RawItemWhereInput | Prisma.RawItemWhereInput[];
    OR?: Prisma.RawItemWhereInput[];
    NOT?: Prisma.RawItemWhereInput | Prisma.RawItemWhereInput[];
    source?: Prisma.StringFilter<"RawItem"> | string;
    hhId?: Prisma.StringFilter<"RawItem"> | string;
    payload?: Prisma.JsonFilter<"RawItem">;
    fetchedAt?: Prisma.DateTimeFilter<"RawItem"> | Date | string;
    resumes?: Prisma.ResumeListRelationFilter;
};
export type RawItemOrderByWithRelationInput = {
    source?: Prisma.SortOrder;
    hhId?: Prisma.SortOrder;
    payload?: Prisma.SortOrder;
    fetchedAt?: Prisma.SortOrder;
    resumes?: Prisma.ResumeOrderByRelationAggregateInput;
};
export type RawItemWhereUniqueInput = Prisma.AtLeast<{
    source_hhId?: Prisma.RawItemSourceHhIdCompoundUniqueInput;
    AND?: Prisma.RawItemWhereInput | Prisma.RawItemWhereInput[];
    OR?: Prisma.RawItemWhereInput[];
    NOT?: Prisma.RawItemWhereInput | Prisma.RawItemWhereInput[];
    source?: Prisma.StringFilter<"RawItem"> | string;
    hhId?: Prisma.StringFilter<"RawItem"> | string;
    payload?: Prisma.JsonFilter<"RawItem">;
    fetchedAt?: Prisma.DateTimeFilter<"RawItem"> | Date | string;
    resumes?: Prisma.ResumeListRelationFilter;
}, "source_hhId">;
export type RawItemOrderByWithAggregationInput = {
    source?: Prisma.SortOrder;
    hhId?: Prisma.SortOrder;
    payload?: Prisma.SortOrder;
    fetchedAt?: Prisma.SortOrder;
    _count?: Prisma.RawItemCountOrderByAggregateInput;
    _max?: Prisma.RawItemMaxOrderByAggregateInput;
    _min?: Prisma.RawItemMinOrderByAggregateInput;
};
export type RawItemScalarWhereWithAggregatesInput = {
    AND?: Prisma.RawItemScalarWhereWithAggregatesInput | Prisma.RawItemScalarWhereWithAggregatesInput[];
    OR?: Prisma.RawItemScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RawItemScalarWhereWithAggregatesInput | Prisma.RawItemScalarWhereWithAggregatesInput[];
    source?: Prisma.StringWithAggregatesFilter<"RawItem"> | string;
    hhId?: Prisma.StringWithAggregatesFilter<"RawItem"> | string;
    payload?: Prisma.JsonWithAggregatesFilter<"RawItem">;
    fetchedAt?: Prisma.DateTimeWithAggregatesFilter<"RawItem"> | Date | string;
};
export type RawItemCreateInput = {
    source: string;
    hhId: string;
    payload: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fetchedAt?: Date | string;
    resumes?: Prisma.ResumeCreateNestedManyWithoutRawItemInput;
};
export type RawItemUncheckedCreateInput = {
    source: string;
    hhId: string;
    payload: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fetchedAt?: Date | string;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutRawItemInput;
};
export type RawItemUpdateInput = {
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    hhId?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fetchedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resumes?: Prisma.ResumeUpdateManyWithoutRawItemNestedInput;
};
export type RawItemUncheckedUpdateInput = {
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    hhId?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fetchedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutRawItemNestedInput;
};
export type RawItemCreateManyInput = {
    source: string;
    hhId: string;
    payload: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fetchedAt?: Date | string;
};
export type RawItemUpdateManyMutationInput = {
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    hhId?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fetchedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RawItemUncheckedUpdateManyInput = {
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    hhId?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fetchedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RawItemSourceHhIdCompoundUniqueInput = {
    source: string;
    hhId: string;
};
export type RawItemCountOrderByAggregateInput = {
    source?: Prisma.SortOrder;
    hhId?: Prisma.SortOrder;
    payload?: Prisma.SortOrder;
    fetchedAt?: Prisma.SortOrder;
};
export type RawItemMaxOrderByAggregateInput = {
    source?: Prisma.SortOrder;
    hhId?: Prisma.SortOrder;
    fetchedAt?: Prisma.SortOrder;
};
export type RawItemMinOrderByAggregateInput = {
    source?: Prisma.SortOrder;
    hhId?: Prisma.SortOrder;
    fetchedAt?: Prisma.SortOrder;
};
export type RawItemScalarRelationFilter = {
    is?: Prisma.RawItemWhereInput;
    isNot?: Prisma.RawItemWhereInput;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type RawItemCreateNestedOneWithoutResumesInput = {
    create?: Prisma.XOR<Prisma.RawItemCreateWithoutResumesInput, Prisma.RawItemUncheckedCreateWithoutResumesInput>;
    connectOrCreate?: Prisma.RawItemCreateOrConnectWithoutResumesInput;
    connect?: Prisma.RawItemWhereUniqueInput;
};
export type RawItemUpdateOneRequiredWithoutResumesNestedInput = {
    create?: Prisma.XOR<Prisma.RawItemCreateWithoutResumesInput, Prisma.RawItemUncheckedCreateWithoutResumesInput>;
    connectOrCreate?: Prisma.RawItemCreateOrConnectWithoutResumesInput;
    upsert?: Prisma.RawItemUpsertWithoutResumesInput;
    connect?: Prisma.RawItemWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RawItemUpdateToOneWithWhereWithoutResumesInput, Prisma.RawItemUpdateWithoutResumesInput>, Prisma.RawItemUncheckedUpdateWithoutResumesInput>;
};
export type RawItemCreateWithoutResumesInput = {
    source: string;
    hhId: string;
    payload: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fetchedAt?: Date | string;
};
export type RawItemUncheckedCreateWithoutResumesInput = {
    source: string;
    hhId: string;
    payload: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fetchedAt?: Date | string;
};
export type RawItemCreateOrConnectWithoutResumesInput = {
    where: Prisma.RawItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.RawItemCreateWithoutResumesInput, Prisma.RawItemUncheckedCreateWithoutResumesInput>;
};
export type RawItemUpsertWithoutResumesInput = {
    update: Prisma.XOR<Prisma.RawItemUpdateWithoutResumesInput, Prisma.RawItemUncheckedUpdateWithoutResumesInput>;
    create: Prisma.XOR<Prisma.RawItemCreateWithoutResumesInput, Prisma.RawItemUncheckedCreateWithoutResumesInput>;
    where?: Prisma.RawItemWhereInput;
};
export type RawItemUpdateToOneWithWhereWithoutResumesInput = {
    where?: Prisma.RawItemWhereInput;
    data: Prisma.XOR<Prisma.RawItemUpdateWithoutResumesInput, Prisma.RawItemUncheckedUpdateWithoutResumesInput>;
};
export type RawItemUpdateWithoutResumesInput = {
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    hhId?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fetchedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RawItemUncheckedUpdateWithoutResumesInput = {
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    hhId?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fetchedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RawItemCountOutputType = {
    resumes: number;
};
export type RawItemCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    resumes?: boolean | RawItemCountOutputTypeCountResumesArgs;
};
export type RawItemCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RawItemCountOutputTypeSelect<ExtArgs> | null;
};
export type RawItemCountOutputTypeCountResumesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ResumeWhereInput;
};
export type RawItemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    source?: boolean;
    hhId?: boolean;
    payload?: boolean;
    fetchedAt?: boolean;
    resumes?: boolean | Prisma.RawItem$resumesArgs<ExtArgs>;
    _count?: boolean | Prisma.RawItemCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rawItem"]>;
export type RawItemSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    source?: boolean;
    hhId?: boolean;
    payload?: boolean;
    fetchedAt?: boolean;
}, ExtArgs["result"]["rawItem"]>;
export type RawItemSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    source?: boolean;
    hhId?: boolean;
    payload?: boolean;
    fetchedAt?: boolean;
}, ExtArgs["result"]["rawItem"]>;
export type RawItemSelectScalar = {
    source?: boolean;
    hhId?: boolean;
    payload?: boolean;
    fetchedAt?: boolean;
};
export type RawItemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"source" | "hhId" | "payload" | "fetchedAt", ExtArgs["result"]["rawItem"]>;
export type RawItemInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    resumes?: boolean | Prisma.RawItem$resumesArgs<ExtArgs>;
    _count?: boolean | Prisma.RawItemCountOutputTypeDefaultArgs<ExtArgs>;
};
export type RawItemIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type RawItemIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $RawItemPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RawItem";
    objects: {
        resumes: Prisma.$ResumePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        source: string;
        hhId: string;
        payload: runtime.JsonValue;
        fetchedAt: Date;
    }, ExtArgs["result"]["rawItem"]>;
    composites: {};
};
export type RawItemGetPayload<S extends boolean | null | undefined | RawItemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RawItemPayload, S>;
export type RawItemCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RawItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RawItemCountAggregateInputType | true;
};
export interface RawItemDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RawItem'];
        meta: {
            name: 'RawItem';
        };
    };
    findUnique<T extends RawItemFindUniqueArgs>(args: Prisma.SelectSubset<T, RawItemFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RawItemClient<runtime.Types.Result.GetResult<Prisma.$RawItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RawItemFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RawItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RawItemClient<runtime.Types.Result.GetResult<Prisma.$RawItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RawItemFindFirstArgs>(args?: Prisma.SelectSubset<T, RawItemFindFirstArgs<ExtArgs>>): Prisma.Prisma__RawItemClient<runtime.Types.Result.GetResult<Prisma.$RawItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RawItemFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RawItemFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RawItemClient<runtime.Types.Result.GetResult<Prisma.$RawItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RawItemFindManyArgs>(args?: Prisma.SelectSubset<T, RawItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RawItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RawItemCreateArgs>(args: Prisma.SelectSubset<T, RawItemCreateArgs<ExtArgs>>): Prisma.Prisma__RawItemClient<runtime.Types.Result.GetResult<Prisma.$RawItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RawItemCreateManyArgs>(args?: Prisma.SelectSubset<T, RawItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RawItemCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RawItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RawItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RawItemDeleteArgs>(args: Prisma.SelectSubset<T, RawItemDeleteArgs<ExtArgs>>): Prisma.Prisma__RawItemClient<runtime.Types.Result.GetResult<Prisma.$RawItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RawItemUpdateArgs>(args: Prisma.SelectSubset<T, RawItemUpdateArgs<ExtArgs>>): Prisma.Prisma__RawItemClient<runtime.Types.Result.GetResult<Prisma.$RawItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RawItemDeleteManyArgs>(args?: Prisma.SelectSubset<T, RawItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RawItemUpdateManyArgs>(args: Prisma.SelectSubset<T, RawItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RawItemUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RawItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RawItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RawItemUpsertArgs>(args: Prisma.SelectSubset<T, RawItemUpsertArgs<ExtArgs>>): Prisma.Prisma__RawItemClient<runtime.Types.Result.GetResult<Prisma.$RawItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RawItemCountArgs>(args?: Prisma.Subset<T, RawItemCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RawItemCountAggregateOutputType> : number>;
    aggregate<T extends RawItemAggregateArgs>(args: Prisma.Subset<T, RawItemAggregateArgs>): Prisma.PrismaPromise<GetRawItemAggregateType<T>>;
    groupBy<T extends RawItemGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RawItemGroupByArgs['orderBy'];
    } : {
        orderBy?: RawItemGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RawItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRawItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RawItemFieldRefs;
}
export interface Prisma__RawItemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    resumes<T extends Prisma.RawItem$resumesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RawItem$resumesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RawItemFieldRefs {
    readonly source: Prisma.FieldRef<"RawItem", 'String'>;
    readonly hhId: Prisma.FieldRef<"RawItem", 'String'>;
    readonly payload: Prisma.FieldRef<"RawItem", 'Json'>;
    readonly fetchedAt: Prisma.FieldRef<"RawItem", 'DateTime'>;
}
export type RawItemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RawItemSelect<ExtArgs> | null;
    omit?: Prisma.RawItemOmit<ExtArgs> | null;
    include?: Prisma.RawItemInclude<ExtArgs> | null;
    where: Prisma.RawItemWhereUniqueInput;
};
export type RawItemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RawItemSelect<ExtArgs> | null;
    omit?: Prisma.RawItemOmit<ExtArgs> | null;
    include?: Prisma.RawItemInclude<ExtArgs> | null;
    where: Prisma.RawItemWhereUniqueInput;
};
export type RawItemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RawItemSelect<ExtArgs> | null;
    omit?: Prisma.RawItemOmit<ExtArgs> | null;
    include?: Prisma.RawItemInclude<ExtArgs> | null;
    where?: Prisma.RawItemWhereInput;
    orderBy?: Prisma.RawItemOrderByWithRelationInput | Prisma.RawItemOrderByWithRelationInput[];
    cursor?: Prisma.RawItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RawItemScalarFieldEnum | Prisma.RawItemScalarFieldEnum[];
};
export type RawItemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RawItemSelect<ExtArgs> | null;
    omit?: Prisma.RawItemOmit<ExtArgs> | null;
    include?: Prisma.RawItemInclude<ExtArgs> | null;
    where?: Prisma.RawItemWhereInput;
    orderBy?: Prisma.RawItemOrderByWithRelationInput | Prisma.RawItemOrderByWithRelationInput[];
    cursor?: Prisma.RawItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RawItemScalarFieldEnum | Prisma.RawItemScalarFieldEnum[];
};
export type RawItemFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RawItemSelect<ExtArgs> | null;
    omit?: Prisma.RawItemOmit<ExtArgs> | null;
    include?: Prisma.RawItemInclude<ExtArgs> | null;
    where?: Prisma.RawItemWhereInput;
    orderBy?: Prisma.RawItemOrderByWithRelationInput | Prisma.RawItemOrderByWithRelationInput[];
    cursor?: Prisma.RawItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RawItemScalarFieldEnum | Prisma.RawItemScalarFieldEnum[];
};
export type RawItemCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RawItemSelect<ExtArgs> | null;
    omit?: Prisma.RawItemOmit<ExtArgs> | null;
    include?: Prisma.RawItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RawItemCreateInput, Prisma.RawItemUncheckedCreateInput>;
};
export type RawItemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RawItemCreateManyInput | Prisma.RawItemCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RawItemCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RawItemSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RawItemOmit<ExtArgs> | null;
    data: Prisma.RawItemCreateManyInput | Prisma.RawItemCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RawItemUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RawItemSelect<ExtArgs> | null;
    omit?: Prisma.RawItemOmit<ExtArgs> | null;
    include?: Prisma.RawItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RawItemUpdateInput, Prisma.RawItemUncheckedUpdateInput>;
    where: Prisma.RawItemWhereUniqueInput;
};
export type RawItemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RawItemUpdateManyMutationInput, Prisma.RawItemUncheckedUpdateManyInput>;
    where?: Prisma.RawItemWhereInput;
    limit?: number;
};
export type RawItemUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RawItemSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RawItemOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RawItemUpdateManyMutationInput, Prisma.RawItemUncheckedUpdateManyInput>;
    where?: Prisma.RawItemWhereInput;
    limit?: number;
};
export type RawItemUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RawItemSelect<ExtArgs> | null;
    omit?: Prisma.RawItemOmit<ExtArgs> | null;
    include?: Prisma.RawItemInclude<ExtArgs> | null;
    where: Prisma.RawItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.RawItemCreateInput, Prisma.RawItemUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RawItemUpdateInput, Prisma.RawItemUncheckedUpdateInput>;
};
export type RawItemDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RawItemSelect<ExtArgs> | null;
    omit?: Prisma.RawItemOmit<ExtArgs> | null;
    include?: Prisma.RawItemInclude<ExtArgs> | null;
    where: Prisma.RawItemWhereUniqueInput;
};
export type RawItemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RawItemWhereInput;
    limit?: number;
};
export type RawItem$resumesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSelect<ExtArgs> | null;
    omit?: Prisma.ResumeOmit<ExtArgs> | null;
    include?: Prisma.ResumeInclude<ExtArgs> | null;
    where?: Prisma.ResumeWhereInput;
    orderBy?: Prisma.ResumeOrderByWithRelationInput | Prisma.ResumeOrderByWithRelationInput[];
    cursor?: Prisma.ResumeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ResumeScalarFieldEnum | Prisma.ResumeScalarFieldEnum[];
};
export type RawItemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RawItemSelect<ExtArgs> | null;
    omit?: Prisma.RawItemOmit<ExtArgs> | null;
    include?: Prisma.RawItemInclude<ExtArgs> | null;
};
export {};

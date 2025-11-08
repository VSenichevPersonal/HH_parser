import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ResumeModel = runtime.Types.Result.DefaultSelection<Prisma.$ResumePayload>;
export type AggregateResume = {
    _count: ResumeCountAggregateOutputType | null;
    _avg: ResumeAvgAggregateOutputType | null;
    _sum: ResumeSumAggregateOutputType | null;
    _min: ResumeMinAggregateOutputType | null;
    _max: ResumeMaxAggregateOutputType | null;
};
export type ResumeAvgAggregateOutputType = {
    areaId: number | null;
    experienceYears: number | null;
    salaryDesired: runtime.Decimal | null;
};
export type ResumeSumAggregateOutputType = {
    areaId: number | null;
    experienceYears: number | null;
    salaryDesired: runtime.Decimal | null;
};
export type ResumeMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    areaId: number | null;
    areaName: string | null;
    experienceYears: number | null;
    salaryDesired: runtime.Decimal | null;
    currency: string | null;
    updatedAt: Date | null;
    rawSource: string | null;
    rawId: string | null;
};
export type ResumeMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    areaId: number | null;
    areaName: string | null;
    experienceYears: number | null;
    salaryDesired: runtime.Decimal | null;
    currency: string | null;
    updatedAt: Date | null;
    rawSource: string | null;
    rawId: string | null;
};
export type ResumeCountAggregateOutputType = {
    id: number;
    title: number;
    areaId: number;
    areaName: number;
    experienceYears: number;
    salaryDesired: number;
    currency: number;
    updatedAt: number;
    rawSource: number;
    rawId: number;
    _all: number;
};
export type ResumeAvgAggregateInputType = {
    areaId?: true;
    experienceYears?: true;
    salaryDesired?: true;
};
export type ResumeSumAggregateInputType = {
    areaId?: true;
    experienceYears?: true;
    salaryDesired?: true;
};
export type ResumeMinAggregateInputType = {
    id?: true;
    title?: true;
    areaId?: true;
    areaName?: true;
    experienceYears?: true;
    salaryDesired?: true;
    currency?: true;
    updatedAt?: true;
    rawSource?: true;
    rawId?: true;
};
export type ResumeMaxAggregateInputType = {
    id?: true;
    title?: true;
    areaId?: true;
    areaName?: true;
    experienceYears?: true;
    salaryDesired?: true;
    currency?: true;
    updatedAt?: true;
    rawSource?: true;
    rawId?: true;
};
export type ResumeCountAggregateInputType = {
    id?: true;
    title?: true;
    areaId?: true;
    areaName?: true;
    experienceYears?: true;
    salaryDesired?: true;
    currency?: true;
    updatedAt?: true;
    rawSource?: true;
    rawId?: true;
    _all?: true;
};
export type ResumeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ResumeWhereInput;
    orderBy?: Prisma.ResumeOrderByWithRelationInput | Prisma.ResumeOrderByWithRelationInput[];
    cursor?: Prisma.ResumeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ResumeCountAggregateInputType;
    _avg?: ResumeAvgAggregateInputType;
    _sum?: ResumeSumAggregateInputType;
    _min?: ResumeMinAggregateInputType;
    _max?: ResumeMaxAggregateInputType;
};
export type GetResumeAggregateType<T extends ResumeAggregateArgs> = {
    [P in keyof T & keyof AggregateResume]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateResume[P]> : Prisma.GetScalarType<T[P], AggregateResume[P]>;
};
export type ResumeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ResumeWhereInput;
    orderBy?: Prisma.ResumeOrderByWithAggregationInput | Prisma.ResumeOrderByWithAggregationInput[];
    by: Prisma.ResumeScalarFieldEnum[] | Prisma.ResumeScalarFieldEnum;
    having?: Prisma.ResumeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ResumeCountAggregateInputType | true;
    _avg?: ResumeAvgAggregateInputType;
    _sum?: ResumeSumAggregateInputType;
    _min?: ResumeMinAggregateInputType;
    _max?: ResumeMaxAggregateInputType;
};
export type ResumeGroupByOutputType = {
    id: string;
    title: string | null;
    areaId: number | null;
    areaName: string | null;
    experienceYears: number | null;
    salaryDesired: runtime.Decimal | null;
    currency: string | null;
    updatedAt: Date | null;
    rawSource: string;
    rawId: string;
    _count: ResumeCountAggregateOutputType | null;
    _avg: ResumeAvgAggregateOutputType | null;
    _sum: ResumeSumAggregateOutputType | null;
    _min: ResumeMinAggregateOutputType | null;
    _max: ResumeMaxAggregateOutputType | null;
};
type GetResumeGroupByPayload<T extends ResumeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ResumeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ResumeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ResumeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ResumeGroupByOutputType[P]>;
}>>;
export type ResumeWhereInput = {
    AND?: Prisma.ResumeWhereInput | Prisma.ResumeWhereInput[];
    OR?: Prisma.ResumeWhereInput[];
    NOT?: Prisma.ResumeWhereInput | Prisma.ResumeWhereInput[];
    id?: Prisma.StringFilter<"Resume"> | string;
    title?: Prisma.StringNullableFilter<"Resume"> | string | null;
    areaId?: Prisma.IntNullableFilter<"Resume"> | number | null;
    areaName?: Prisma.StringNullableFilter<"Resume"> | string | null;
    experienceYears?: Prisma.IntNullableFilter<"Resume"> | number | null;
    salaryDesired?: Prisma.DecimalNullableFilter<"Resume"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.StringNullableFilter<"Resume"> | string | null;
    updatedAt?: Prisma.DateTimeNullableFilter<"Resume"> | Date | string | null;
    rawSource?: Prisma.StringFilter<"Resume"> | string;
    rawId?: Prisma.StringFilter<"Resume"> | string;
    rawItem?: Prisma.XOR<Prisma.RawItemScalarRelationFilter, Prisma.RawItemWhereInput>;
    skills?: Prisma.ResumeSkillListRelationFilter;
    viewAudits?: Prisma.ResumeViewAuditListRelationFilter;
};
export type ResumeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrderInput | Prisma.SortOrder;
    areaId?: Prisma.SortOrderInput | Prisma.SortOrder;
    areaName?: Prisma.SortOrderInput | Prisma.SortOrder;
    experienceYears?: Prisma.SortOrderInput | Prisma.SortOrder;
    salaryDesired?: Prisma.SortOrderInput | Prisma.SortOrder;
    currency?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    rawSource?: Prisma.SortOrder;
    rawId?: Prisma.SortOrder;
    rawItem?: Prisma.RawItemOrderByWithRelationInput;
    skills?: Prisma.ResumeSkillOrderByRelationAggregateInput;
    viewAudits?: Prisma.ResumeViewAuditOrderByRelationAggregateInput;
};
export type ResumeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    rawSource_rawId?: Prisma.ResumeRawSourceRawIdCompoundUniqueInput;
    AND?: Prisma.ResumeWhereInput | Prisma.ResumeWhereInput[];
    OR?: Prisma.ResumeWhereInput[];
    NOT?: Prisma.ResumeWhereInput | Prisma.ResumeWhereInput[];
    title?: Prisma.StringNullableFilter<"Resume"> | string | null;
    areaId?: Prisma.IntNullableFilter<"Resume"> | number | null;
    areaName?: Prisma.StringNullableFilter<"Resume"> | string | null;
    experienceYears?: Prisma.IntNullableFilter<"Resume"> | number | null;
    salaryDesired?: Prisma.DecimalNullableFilter<"Resume"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.StringNullableFilter<"Resume"> | string | null;
    updatedAt?: Prisma.DateTimeNullableFilter<"Resume"> | Date | string | null;
    rawSource?: Prisma.StringFilter<"Resume"> | string;
    rawId?: Prisma.StringFilter<"Resume"> | string;
    rawItem?: Prisma.XOR<Prisma.RawItemScalarRelationFilter, Prisma.RawItemWhereInput>;
    skills?: Prisma.ResumeSkillListRelationFilter;
    viewAudits?: Prisma.ResumeViewAuditListRelationFilter;
}, "id" | "rawSource_rawId">;
export type ResumeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrderInput | Prisma.SortOrder;
    areaId?: Prisma.SortOrderInput | Prisma.SortOrder;
    areaName?: Prisma.SortOrderInput | Prisma.SortOrder;
    experienceYears?: Prisma.SortOrderInput | Prisma.SortOrder;
    salaryDesired?: Prisma.SortOrderInput | Prisma.SortOrder;
    currency?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    rawSource?: Prisma.SortOrder;
    rawId?: Prisma.SortOrder;
    _count?: Prisma.ResumeCountOrderByAggregateInput;
    _avg?: Prisma.ResumeAvgOrderByAggregateInput;
    _max?: Prisma.ResumeMaxOrderByAggregateInput;
    _min?: Prisma.ResumeMinOrderByAggregateInput;
    _sum?: Prisma.ResumeSumOrderByAggregateInput;
};
export type ResumeScalarWhereWithAggregatesInput = {
    AND?: Prisma.ResumeScalarWhereWithAggregatesInput | Prisma.ResumeScalarWhereWithAggregatesInput[];
    OR?: Prisma.ResumeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ResumeScalarWhereWithAggregatesInput | Prisma.ResumeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Resume"> | string;
    title?: Prisma.StringNullableWithAggregatesFilter<"Resume"> | string | null;
    areaId?: Prisma.IntNullableWithAggregatesFilter<"Resume"> | number | null;
    areaName?: Prisma.StringNullableWithAggregatesFilter<"Resume"> | string | null;
    experienceYears?: Prisma.IntNullableWithAggregatesFilter<"Resume"> | number | null;
    salaryDesired?: Prisma.DecimalNullableWithAggregatesFilter<"Resume"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.StringNullableWithAggregatesFilter<"Resume"> | string | null;
    updatedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Resume"> | Date | string | null;
    rawSource?: Prisma.StringWithAggregatesFilter<"Resume"> | string;
    rawId?: Prisma.StringWithAggregatesFilter<"Resume"> | string;
};
export type ResumeCreateInput = {
    id: string;
    title?: string | null;
    areaId?: number | null;
    areaName?: string | null;
    experienceYears?: number | null;
    salaryDesired?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: string | null;
    updatedAt?: Date | string | null;
    rawItem: Prisma.RawItemCreateNestedOneWithoutResumesInput;
    skills?: Prisma.ResumeSkillCreateNestedManyWithoutResumeInput;
    viewAudits?: Prisma.ResumeViewAuditCreateNestedManyWithoutResumeInput;
};
export type ResumeUncheckedCreateInput = {
    id: string;
    title?: string | null;
    areaId?: number | null;
    areaName?: string | null;
    experienceYears?: number | null;
    salaryDesired?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: string | null;
    updatedAt?: Date | string | null;
    rawSource: string;
    rawId: string;
    skills?: Prisma.ResumeSkillUncheckedCreateNestedManyWithoutResumeInput;
    viewAudits?: Prisma.ResumeViewAuditUncheckedCreateNestedManyWithoutResumeInput;
};
export type ResumeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    areaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    areaName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceYears?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    salaryDesired?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rawItem?: Prisma.RawItemUpdateOneRequiredWithoutResumesNestedInput;
    skills?: Prisma.ResumeSkillUpdateManyWithoutResumeNestedInput;
    viewAudits?: Prisma.ResumeViewAuditUpdateManyWithoutResumeNestedInput;
};
export type ResumeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    areaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    areaName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceYears?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    salaryDesired?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rawSource?: Prisma.StringFieldUpdateOperationsInput | string;
    rawId?: Prisma.StringFieldUpdateOperationsInput | string;
    skills?: Prisma.ResumeSkillUncheckedUpdateManyWithoutResumeNestedInput;
    viewAudits?: Prisma.ResumeViewAuditUncheckedUpdateManyWithoutResumeNestedInput;
};
export type ResumeCreateManyInput = {
    id: string;
    title?: string | null;
    areaId?: number | null;
    areaName?: string | null;
    experienceYears?: number | null;
    salaryDesired?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: string | null;
    updatedAt?: Date | string | null;
    rawSource: string;
    rawId: string;
};
export type ResumeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    areaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    areaName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceYears?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    salaryDesired?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ResumeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    areaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    areaName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceYears?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    salaryDesired?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rawSource?: Prisma.StringFieldUpdateOperationsInput | string;
    rawId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ResumeListRelationFilter = {
    every?: Prisma.ResumeWhereInput;
    some?: Prisma.ResumeWhereInput;
    none?: Prisma.ResumeWhereInput;
};
export type ResumeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ResumeRawSourceRawIdCompoundUniqueInput = {
    rawSource: string;
    rawId: string;
};
export type ResumeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    areaId?: Prisma.SortOrder;
    areaName?: Prisma.SortOrder;
    experienceYears?: Prisma.SortOrder;
    salaryDesired?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    rawSource?: Prisma.SortOrder;
    rawId?: Prisma.SortOrder;
};
export type ResumeAvgOrderByAggregateInput = {
    areaId?: Prisma.SortOrder;
    experienceYears?: Prisma.SortOrder;
    salaryDesired?: Prisma.SortOrder;
};
export type ResumeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    areaId?: Prisma.SortOrder;
    areaName?: Prisma.SortOrder;
    experienceYears?: Prisma.SortOrder;
    salaryDesired?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    rawSource?: Prisma.SortOrder;
    rawId?: Prisma.SortOrder;
};
export type ResumeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    areaId?: Prisma.SortOrder;
    areaName?: Prisma.SortOrder;
    experienceYears?: Prisma.SortOrder;
    salaryDesired?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    rawSource?: Prisma.SortOrder;
    rawId?: Prisma.SortOrder;
};
export type ResumeSumOrderByAggregateInput = {
    areaId?: Prisma.SortOrder;
    experienceYears?: Prisma.SortOrder;
    salaryDesired?: Prisma.SortOrder;
};
export type ResumeScalarRelationFilter = {
    is?: Prisma.ResumeWhereInput;
    isNot?: Prisma.ResumeWhereInput;
};
export type ResumeCreateNestedManyWithoutRawItemInput = {
    create?: Prisma.XOR<Prisma.ResumeCreateWithoutRawItemInput, Prisma.ResumeUncheckedCreateWithoutRawItemInput> | Prisma.ResumeCreateWithoutRawItemInput[] | Prisma.ResumeUncheckedCreateWithoutRawItemInput[];
    connectOrCreate?: Prisma.ResumeCreateOrConnectWithoutRawItemInput | Prisma.ResumeCreateOrConnectWithoutRawItemInput[];
    createMany?: Prisma.ResumeCreateManyRawItemInputEnvelope;
    connect?: Prisma.ResumeWhereUniqueInput | Prisma.ResumeWhereUniqueInput[];
};
export type ResumeUncheckedCreateNestedManyWithoutRawItemInput = {
    create?: Prisma.XOR<Prisma.ResumeCreateWithoutRawItemInput, Prisma.ResumeUncheckedCreateWithoutRawItemInput> | Prisma.ResumeCreateWithoutRawItemInput[] | Prisma.ResumeUncheckedCreateWithoutRawItemInput[];
    connectOrCreate?: Prisma.ResumeCreateOrConnectWithoutRawItemInput | Prisma.ResumeCreateOrConnectWithoutRawItemInput[];
    createMany?: Prisma.ResumeCreateManyRawItemInputEnvelope;
    connect?: Prisma.ResumeWhereUniqueInput | Prisma.ResumeWhereUniqueInput[];
};
export type ResumeUpdateManyWithoutRawItemNestedInput = {
    create?: Prisma.XOR<Prisma.ResumeCreateWithoutRawItemInput, Prisma.ResumeUncheckedCreateWithoutRawItemInput> | Prisma.ResumeCreateWithoutRawItemInput[] | Prisma.ResumeUncheckedCreateWithoutRawItemInput[];
    connectOrCreate?: Prisma.ResumeCreateOrConnectWithoutRawItemInput | Prisma.ResumeCreateOrConnectWithoutRawItemInput[];
    upsert?: Prisma.ResumeUpsertWithWhereUniqueWithoutRawItemInput | Prisma.ResumeUpsertWithWhereUniqueWithoutRawItemInput[];
    createMany?: Prisma.ResumeCreateManyRawItemInputEnvelope;
    set?: Prisma.ResumeWhereUniqueInput | Prisma.ResumeWhereUniqueInput[];
    disconnect?: Prisma.ResumeWhereUniqueInput | Prisma.ResumeWhereUniqueInput[];
    delete?: Prisma.ResumeWhereUniqueInput | Prisma.ResumeWhereUniqueInput[];
    connect?: Prisma.ResumeWhereUniqueInput | Prisma.ResumeWhereUniqueInput[];
    update?: Prisma.ResumeUpdateWithWhereUniqueWithoutRawItemInput | Prisma.ResumeUpdateWithWhereUniqueWithoutRawItemInput[];
    updateMany?: Prisma.ResumeUpdateManyWithWhereWithoutRawItemInput | Prisma.ResumeUpdateManyWithWhereWithoutRawItemInput[];
    deleteMany?: Prisma.ResumeScalarWhereInput | Prisma.ResumeScalarWhereInput[];
};
export type ResumeUncheckedUpdateManyWithoutRawItemNestedInput = {
    create?: Prisma.XOR<Prisma.ResumeCreateWithoutRawItemInput, Prisma.ResumeUncheckedCreateWithoutRawItemInput> | Prisma.ResumeCreateWithoutRawItemInput[] | Prisma.ResumeUncheckedCreateWithoutRawItemInput[];
    connectOrCreate?: Prisma.ResumeCreateOrConnectWithoutRawItemInput | Prisma.ResumeCreateOrConnectWithoutRawItemInput[];
    upsert?: Prisma.ResumeUpsertWithWhereUniqueWithoutRawItemInput | Prisma.ResumeUpsertWithWhereUniqueWithoutRawItemInput[];
    createMany?: Prisma.ResumeCreateManyRawItemInputEnvelope;
    set?: Prisma.ResumeWhereUniqueInput | Prisma.ResumeWhereUniqueInput[];
    disconnect?: Prisma.ResumeWhereUniqueInput | Prisma.ResumeWhereUniqueInput[];
    delete?: Prisma.ResumeWhereUniqueInput | Prisma.ResumeWhereUniqueInput[];
    connect?: Prisma.ResumeWhereUniqueInput | Prisma.ResumeWhereUniqueInput[];
    update?: Prisma.ResumeUpdateWithWhereUniqueWithoutRawItemInput | Prisma.ResumeUpdateWithWhereUniqueWithoutRawItemInput[];
    updateMany?: Prisma.ResumeUpdateManyWithWhereWithoutRawItemInput | Prisma.ResumeUpdateManyWithWhereWithoutRawItemInput[];
    deleteMany?: Prisma.ResumeScalarWhereInput | Prisma.ResumeScalarWhereInput[];
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ResumeCreateNestedOneWithoutSkillsInput = {
    create?: Prisma.XOR<Prisma.ResumeCreateWithoutSkillsInput, Prisma.ResumeUncheckedCreateWithoutSkillsInput>;
    connectOrCreate?: Prisma.ResumeCreateOrConnectWithoutSkillsInput;
    connect?: Prisma.ResumeWhereUniqueInput;
};
export type ResumeUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: Prisma.XOR<Prisma.ResumeCreateWithoutSkillsInput, Prisma.ResumeUncheckedCreateWithoutSkillsInput>;
    connectOrCreate?: Prisma.ResumeCreateOrConnectWithoutSkillsInput;
    upsert?: Prisma.ResumeUpsertWithoutSkillsInput;
    connect?: Prisma.ResumeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ResumeUpdateToOneWithWhereWithoutSkillsInput, Prisma.ResumeUpdateWithoutSkillsInput>, Prisma.ResumeUncheckedUpdateWithoutSkillsInput>;
};
export type ResumeCreateNestedOneWithoutViewAuditsInput = {
    create?: Prisma.XOR<Prisma.ResumeCreateWithoutViewAuditsInput, Prisma.ResumeUncheckedCreateWithoutViewAuditsInput>;
    connectOrCreate?: Prisma.ResumeCreateOrConnectWithoutViewAuditsInput;
    connect?: Prisma.ResumeWhereUniqueInput;
};
export type ResumeUpdateOneRequiredWithoutViewAuditsNestedInput = {
    create?: Prisma.XOR<Prisma.ResumeCreateWithoutViewAuditsInput, Prisma.ResumeUncheckedCreateWithoutViewAuditsInput>;
    connectOrCreate?: Prisma.ResumeCreateOrConnectWithoutViewAuditsInput;
    upsert?: Prisma.ResumeUpsertWithoutViewAuditsInput;
    connect?: Prisma.ResumeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ResumeUpdateToOneWithWhereWithoutViewAuditsInput, Prisma.ResumeUpdateWithoutViewAuditsInput>, Prisma.ResumeUncheckedUpdateWithoutViewAuditsInput>;
};
export type ResumeCreateWithoutRawItemInput = {
    id: string;
    title?: string | null;
    areaId?: number | null;
    areaName?: string | null;
    experienceYears?: number | null;
    salaryDesired?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: string | null;
    updatedAt?: Date | string | null;
    skills?: Prisma.ResumeSkillCreateNestedManyWithoutResumeInput;
    viewAudits?: Prisma.ResumeViewAuditCreateNestedManyWithoutResumeInput;
};
export type ResumeUncheckedCreateWithoutRawItemInput = {
    id: string;
    title?: string | null;
    areaId?: number | null;
    areaName?: string | null;
    experienceYears?: number | null;
    salaryDesired?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: string | null;
    updatedAt?: Date | string | null;
    skills?: Prisma.ResumeSkillUncheckedCreateNestedManyWithoutResumeInput;
    viewAudits?: Prisma.ResumeViewAuditUncheckedCreateNestedManyWithoutResumeInput;
};
export type ResumeCreateOrConnectWithoutRawItemInput = {
    where: Prisma.ResumeWhereUniqueInput;
    create: Prisma.XOR<Prisma.ResumeCreateWithoutRawItemInput, Prisma.ResumeUncheckedCreateWithoutRawItemInput>;
};
export type ResumeCreateManyRawItemInputEnvelope = {
    data: Prisma.ResumeCreateManyRawItemInput | Prisma.ResumeCreateManyRawItemInput[];
    skipDuplicates?: boolean;
};
export type ResumeUpsertWithWhereUniqueWithoutRawItemInput = {
    where: Prisma.ResumeWhereUniqueInput;
    update: Prisma.XOR<Prisma.ResumeUpdateWithoutRawItemInput, Prisma.ResumeUncheckedUpdateWithoutRawItemInput>;
    create: Prisma.XOR<Prisma.ResumeCreateWithoutRawItemInput, Prisma.ResumeUncheckedCreateWithoutRawItemInput>;
};
export type ResumeUpdateWithWhereUniqueWithoutRawItemInput = {
    where: Prisma.ResumeWhereUniqueInput;
    data: Prisma.XOR<Prisma.ResumeUpdateWithoutRawItemInput, Prisma.ResumeUncheckedUpdateWithoutRawItemInput>;
};
export type ResumeUpdateManyWithWhereWithoutRawItemInput = {
    where: Prisma.ResumeScalarWhereInput;
    data: Prisma.XOR<Prisma.ResumeUpdateManyMutationInput, Prisma.ResumeUncheckedUpdateManyWithoutRawItemInput>;
};
export type ResumeScalarWhereInput = {
    AND?: Prisma.ResumeScalarWhereInput | Prisma.ResumeScalarWhereInput[];
    OR?: Prisma.ResumeScalarWhereInput[];
    NOT?: Prisma.ResumeScalarWhereInput | Prisma.ResumeScalarWhereInput[];
    id?: Prisma.StringFilter<"Resume"> | string;
    title?: Prisma.StringNullableFilter<"Resume"> | string | null;
    areaId?: Prisma.IntNullableFilter<"Resume"> | number | null;
    areaName?: Prisma.StringNullableFilter<"Resume"> | string | null;
    experienceYears?: Prisma.IntNullableFilter<"Resume"> | number | null;
    salaryDesired?: Prisma.DecimalNullableFilter<"Resume"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.StringNullableFilter<"Resume"> | string | null;
    updatedAt?: Prisma.DateTimeNullableFilter<"Resume"> | Date | string | null;
    rawSource?: Prisma.StringFilter<"Resume"> | string;
    rawId?: Prisma.StringFilter<"Resume"> | string;
};
export type ResumeCreateWithoutSkillsInput = {
    id: string;
    title?: string | null;
    areaId?: number | null;
    areaName?: string | null;
    experienceYears?: number | null;
    salaryDesired?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: string | null;
    updatedAt?: Date | string | null;
    rawItem: Prisma.RawItemCreateNestedOneWithoutResumesInput;
    viewAudits?: Prisma.ResumeViewAuditCreateNestedManyWithoutResumeInput;
};
export type ResumeUncheckedCreateWithoutSkillsInput = {
    id: string;
    title?: string | null;
    areaId?: number | null;
    areaName?: string | null;
    experienceYears?: number | null;
    salaryDesired?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: string | null;
    updatedAt?: Date | string | null;
    rawSource: string;
    rawId: string;
    viewAudits?: Prisma.ResumeViewAuditUncheckedCreateNestedManyWithoutResumeInput;
};
export type ResumeCreateOrConnectWithoutSkillsInput = {
    where: Prisma.ResumeWhereUniqueInput;
    create: Prisma.XOR<Prisma.ResumeCreateWithoutSkillsInput, Prisma.ResumeUncheckedCreateWithoutSkillsInput>;
};
export type ResumeUpsertWithoutSkillsInput = {
    update: Prisma.XOR<Prisma.ResumeUpdateWithoutSkillsInput, Prisma.ResumeUncheckedUpdateWithoutSkillsInput>;
    create: Prisma.XOR<Prisma.ResumeCreateWithoutSkillsInput, Prisma.ResumeUncheckedCreateWithoutSkillsInput>;
    where?: Prisma.ResumeWhereInput;
};
export type ResumeUpdateToOneWithWhereWithoutSkillsInput = {
    where?: Prisma.ResumeWhereInput;
    data: Prisma.XOR<Prisma.ResumeUpdateWithoutSkillsInput, Prisma.ResumeUncheckedUpdateWithoutSkillsInput>;
};
export type ResumeUpdateWithoutSkillsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    areaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    areaName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceYears?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    salaryDesired?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rawItem?: Prisma.RawItemUpdateOneRequiredWithoutResumesNestedInput;
    viewAudits?: Prisma.ResumeViewAuditUpdateManyWithoutResumeNestedInput;
};
export type ResumeUncheckedUpdateWithoutSkillsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    areaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    areaName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceYears?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    salaryDesired?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rawSource?: Prisma.StringFieldUpdateOperationsInput | string;
    rawId?: Prisma.StringFieldUpdateOperationsInput | string;
    viewAudits?: Prisma.ResumeViewAuditUncheckedUpdateManyWithoutResumeNestedInput;
};
export type ResumeCreateWithoutViewAuditsInput = {
    id: string;
    title?: string | null;
    areaId?: number | null;
    areaName?: string | null;
    experienceYears?: number | null;
    salaryDesired?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: string | null;
    updatedAt?: Date | string | null;
    rawItem: Prisma.RawItemCreateNestedOneWithoutResumesInput;
    skills?: Prisma.ResumeSkillCreateNestedManyWithoutResumeInput;
};
export type ResumeUncheckedCreateWithoutViewAuditsInput = {
    id: string;
    title?: string | null;
    areaId?: number | null;
    areaName?: string | null;
    experienceYears?: number | null;
    salaryDesired?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: string | null;
    updatedAt?: Date | string | null;
    rawSource: string;
    rawId: string;
    skills?: Prisma.ResumeSkillUncheckedCreateNestedManyWithoutResumeInput;
};
export type ResumeCreateOrConnectWithoutViewAuditsInput = {
    where: Prisma.ResumeWhereUniqueInput;
    create: Prisma.XOR<Prisma.ResumeCreateWithoutViewAuditsInput, Prisma.ResumeUncheckedCreateWithoutViewAuditsInput>;
};
export type ResumeUpsertWithoutViewAuditsInput = {
    update: Prisma.XOR<Prisma.ResumeUpdateWithoutViewAuditsInput, Prisma.ResumeUncheckedUpdateWithoutViewAuditsInput>;
    create: Prisma.XOR<Prisma.ResumeCreateWithoutViewAuditsInput, Prisma.ResumeUncheckedCreateWithoutViewAuditsInput>;
    where?: Prisma.ResumeWhereInput;
};
export type ResumeUpdateToOneWithWhereWithoutViewAuditsInput = {
    where?: Prisma.ResumeWhereInput;
    data: Prisma.XOR<Prisma.ResumeUpdateWithoutViewAuditsInput, Prisma.ResumeUncheckedUpdateWithoutViewAuditsInput>;
};
export type ResumeUpdateWithoutViewAuditsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    areaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    areaName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceYears?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    salaryDesired?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rawItem?: Prisma.RawItemUpdateOneRequiredWithoutResumesNestedInput;
    skills?: Prisma.ResumeSkillUpdateManyWithoutResumeNestedInput;
};
export type ResumeUncheckedUpdateWithoutViewAuditsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    areaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    areaName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceYears?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    salaryDesired?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rawSource?: Prisma.StringFieldUpdateOperationsInput | string;
    rawId?: Prisma.StringFieldUpdateOperationsInput | string;
    skills?: Prisma.ResumeSkillUncheckedUpdateManyWithoutResumeNestedInput;
};
export type ResumeCreateManyRawItemInput = {
    id: string;
    title?: string | null;
    areaId?: number | null;
    areaName?: string | null;
    experienceYears?: number | null;
    salaryDesired?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: string | null;
    updatedAt?: Date | string | null;
};
export type ResumeUpdateWithoutRawItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    areaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    areaName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceYears?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    salaryDesired?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    skills?: Prisma.ResumeSkillUpdateManyWithoutResumeNestedInput;
    viewAudits?: Prisma.ResumeViewAuditUpdateManyWithoutResumeNestedInput;
};
export type ResumeUncheckedUpdateWithoutRawItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    areaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    areaName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceYears?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    salaryDesired?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    skills?: Prisma.ResumeSkillUncheckedUpdateManyWithoutResumeNestedInput;
    viewAudits?: Prisma.ResumeViewAuditUncheckedUpdateManyWithoutResumeNestedInput;
};
export type ResumeUncheckedUpdateManyWithoutRawItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    areaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    areaName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceYears?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    salaryDesired?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ResumeCountOutputType = {
    skills: number;
    viewAudits: number;
};
export type ResumeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    skills?: boolean | ResumeCountOutputTypeCountSkillsArgs;
    viewAudits?: boolean | ResumeCountOutputTypeCountViewAuditsArgs;
};
export type ResumeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeCountOutputTypeSelect<ExtArgs> | null;
};
export type ResumeCountOutputTypeCountSkillsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ResumeSkillWhereInput;
};
export type ResumeCountOutputTypeCountViewAuditsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ResumeViewAuditWhereInput;
};
export type ResumeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    areaId?: boolean;
    areaName?: boolean;
    experienceYears?: boolean;
    salaryDesired?: boolean;
    currency?: boolean;
    updatedAt?: boolean;
    rawSource?: boolean;
    rawId?: boolean;
    rawItem?: boolean | Prisma.RawItemDefaultArgs<ExtArgs>;
    skills?: boolean | Prisma.Resume$skillsArgs<ExtArgs>;
    viewAudits?: boolean | Prisma.Resume$viewAuditsArgs<ExtArgs>;
    _count?: boolean | Prisma.ResumeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["resume"]>;
export type ResumeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    areaId?: boolean;
    areaName?: boolean;
    experienceYears?: boolean;
    salaryDesired?: boolean;
    currency?: boolean;
    updatedAt?: boolean;
    rawSource?: boolean;
    rawId?: boolean;
    rawItem?: boolean | Prisma.RawItemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["resume"]>;
export type ResumeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    areaId?: boolean;
    areaName?: boolean;
    experienceYears?: boolean;
    salaryDesired?: boolean;
    currency?: boolean;
    updatedAt?: boolean;
    rawSource?: boolean;
    rawId?: boolean;
    rawItem?: boolean | Prisma.RawItemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["resume"]>;
export type ResumeSelectScalar = {
    id?: boolean;
    title?: boolean;
    areaId?: boolean;
    areaName?: boolean;
    experienceYears?: boolean;
    salaryDesired?: boolean;
    currency?: boolean;
    updatedAt?: boolean;
    rawSource?: boolean;
    rawId?: boolean;
};
export type ResumeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "areaId" | "areaName" | "experienceYears" | "salaryDesired" | "currency" | "updatedAt" | "rawSource" | "rawId", ExtArgs["result"]["resume"]>;
export type ResumeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rawItem?: boolean | Prisma.RawItemDefaultArgs<ExtArgs>;
    skills?: boolean | Prisma.Resume$skillsArgs<ExtArgs>;
    viewAudits?: boolean | Prisma.Resume$viewAuditsArgs<ExtArgs>;
    _count?: boolean | Prisma.ResumeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ResumeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rawItem?: boolean | Prisma.RawItemDefaultArgs<ExtArgs>;
};
export type ResumeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rawItem?: boolean | Prisma.RawItemDefaultArgs<ExtArgs>;
};
export type $ResumePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Resume";
    objects: {
        rawItem: Prisma.$RawItemPayload<ExtArgs>;
        skills: Prisma.$ResumeSkillPayload<ExtArgs>[];
        viewAudits: Prisma.$ResumeViewAuditPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string | null;
        areaId: number | null;
        areaName: string | null;
        experienceYears: number | null;
        salaryDesired: runtime.Decimal | null;
        currency: string | null;
        updatedAt: Date | null;
        rawSource: string;
        rawId: string;
    }, ExtArgs["result"]["resume"]>;
    composites: {};
};
export type ResumeGetPayload<S extends boolean | null | undefined | ResumeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ResumePayload, S>;
export type ResumeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ResumeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ResumeCountAggregateInputType | true;
};
export interface ResumeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Resume'];
        meta: {
            name: 'Resume';
        };
    };
    findUnique<T extends ResumeFindUniqueArgs>(args: Prisma.SelectSubset<T, ResumeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ResumeClient<runtime.Types.Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ResumeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ResumeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ResumeClient<runtime.Types.Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ResumeFindFirstArgs>(args?: Prisma.SelectSubset<T, ResumeFindFirstArgs<ExtArgs>>): Prisma.Prisma__ResumeClient<runtime.Types.Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ResumeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ResumeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ResumeClient<runtime.Types.Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ResumeFindManyArgs>(args?: Prisma.SelectSubset<T, ResumeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ResumeCreateArgs>(args: Prisma.SelectSubset<T, ResumeCreateArgs<ExtArgs>>): Prisma.Prisma__ResumeClient<runtime.Types.Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ResumeCreateManyArgs>(args?: Prisma.SelectSubset<T, ResumeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ResumeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ResumeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ResumeDeleteArgs>(args: Prisma.SelectSubset<T, ResumeDeleteArgs<ExtArgs>>): Prisma.Prisma__ResumeClient<runtime.Types.Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ResumeUpdateArgs>(args: Prisma.SelectSubset<T, ResumeUpdateArgs<ExtArgs>>): Prisma.Prisma__ResumeClient<runtime.Types.Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ResumeDeleteManyArgs>(args?: Prisma.SelectSubset<T, ResumeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ResumeUpdateManyArgs>(args: Prisma.SelectSubset<T, ResumeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ResumeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ResumeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ResumeUpsertArgs>(args: Prisma.SelectSubset<T, ResumeUpsertArgs<ExtArgs>>): Prisma.Prisma__ResumeClient<runtime.Types.Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ResumeCountArgs>(args?: Prisma.Subset<T, ResumeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ResumeCountAggregateOutputType> : number>;
    aggregate<T extends ResumeAggregateArgs>(args: Prisma.Subset<T, ResumeAggregateArgs>): Prisma.PrismaPromise<GetResumeAggregateType<T>>;
    groupBy<T extends ResumeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ResumeGroupByArgs['orderBy'];
    } : {
        orderBy?: ResumeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ResumeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResumeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ResumeFieldRefs;
}
export interface Prisma__ResumeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    rawItem<T extends Prisma.RawItemDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RawItemDefaultArgs<ExtArgs>>): Prisma.Prisma__RawItemClient<runtime.Types.Result.GetResult<Prisma.$RawItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    skills<T extends Prisma.Resume$skillsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Resume$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ResumeSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    viewAudits<T extends Prisma.Resume$viewAuditsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Resume$viewAuditsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ResumeViewAuditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ResumeFieldRefs {
    readonly id: Prisma.FieldRef<"Resume", 'String'>;
    readonly title: Prisma.FieldRef<"Resume", 'String'>;
    readonly areaId: Prisma.FieldRef<"Resume", 'Int'>;
    readonly areaName: Prisma.FieldRef<"Resume", 'String'>;
    readonly experienceYears: Prisma.FieldRef<"Resume", 'Int'>;
    readonly salaryDesired: Prisma.FieldRef<"Resume", 'Decimal'>;
    readonly currency: Prisma.FieldRef<"Resume", 'String'>;
    readonly updatedAt: Prisma.FieldRef<"Resume", 'DateTime'>;
    readonly rawSource: Prisma.FieldRef<"Resume", 'String'>;
    readonly rawId: Prisma.FieldRef<"Resume", 'String'>;
}
export type ResumeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSelect<ExtArgs> | null;
    omit?: Prisma.ResumeOmit<ExtArgs> | null;
    include?: Prisma.ResumeInclude<ExtArgs> | null;
    where: Prisma.ResumeWhereUniqueInput;
};
export type ResumeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSelect<ExtArgs> | null;
    omit?: Prisma.ResumeOmit<ExtArgs> | null;
    include?: Prisma.ResumeInclude<ExtArgs> | null;
    where: Prisma.ResumeWhereUniqueInput;
};
export type ResumeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ResumeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ResumeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ResumeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSelect<ExtArgs> | null;
    omit?: Prisma.ResumeOmit<ExtArgs> | null;
    include?: Prisma.ResumeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ResumeCreateInput, Prisma.ResumeUncheckedCreateInput>;
};
export type ResumeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ResumeCreateManyInput | Prisma.ResumeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ResumeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ResumeOmit<ExtArgs> | null;
    data: Prisma.ResumeCreateManyInput | Prisma.ResumeCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ResumeIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ResumeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSelect<ExtArgs> | null;
    omit?: Prisma.ResumeOmit<ExtArgs> | null;
    include?: Prisma.ResumeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ResumeUpdateInput, Prisma.ResumeUncheckedUpdateInput>;
    where: Prisma.ResumeWhereUniqueInput;
};
export type ResumeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ResumeUpdateManyMutationInput, Prisma.ResumeUncheckedUpdateManyInput>;
    where?: Prisma.ResumeWhereInput;
    limit?: number;
};
export type ResumeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ResumeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ResumeUpdateManyMutationInput, Prisma.ResumeUncheckedUpdateManyInput>;
    where?: Prisma.ResumeWhereInput;
    limit?: number;
    include?: Prisma.ResumeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ResumeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSelect<ExtArgs> | null;
    omit?: Prisma.ResumeOmit<ExtArgs> | null;
    include?: Prisma.ResumeInclude<ExtArgs> | null;
    where: Prisma.ResumeWhereUniqueInput;
    create: Prisma.XOR<Prisma.ResumeCreateInput, Prisma.ResumeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ResumeUpdateInput, Prisma.ResumeUncheckedUpdateInput>;
};
export type ResumeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSelect<ExtArgs> | null;
    omit?: Prisma.ResumeOmit<ExtArgs> | null;
    include?: Prisma.ResumeInclude<ExtArgs> | null;
    where: Prisma.ResumeWhereUniqueInput;
};
export type ResumeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ResumeWhereInput;
    limit?: number;
};
export type Resume$skillsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Resume$viewAuditsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ResumeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSelect<ExtArgs> | null;
    omit?: Prisma.ResumeOmit<ExtArgs> | null;
    include?: Prisma.ResumeInclude<ExtArgs> | null;
};
export {};

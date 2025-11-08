import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type VacancyModel = runtime.Types.Result.DefaultSelection<Prisma.$VacancyPayload>;
export type AggregateVacancy = {
    _count: VacancyCountAggregateOutputType | null;
    _avg: VacancyAvgAggregateOutputType | null;
    _sum: VacancySumAggregateOutputType | null;
    _min: VacancyMinAggregateOutputType | null;
    _max: VacancyMaxAggregateOutputType | null;
};
export type VacancyAvgAggregateOutputType = {
    id: number | null;
    employerId: number | null;
    areaId: number | null;
    salaryFrom: runtime.Decimal | null;
    salaryTo: runtime.Decimal | null;
};
export type VacancySumAggregateOutputType = {
    id: bigint | null;
    employerId: bigint | null;
    areaId: bigint | null;
    salaryFrom: runtime.Decimal | null;
    salaryTo: runtime.Decimal | null;
};
export type VacancyMinAggregateOutputType = {
    id: bigint | null;
    name: string | null;
    description: string | null;
    employerId: bigint | null;
    areaId: bigint | null;
    publishedAt: Date | null;
    archived: boolean | null;
    url: string | null;
    salaryFrom: runtime.Decimal | null;
    salaryTo: runtime.Decimal | null;
    currency: string | null;
    updatedAt: Date | null;
};
export type VacancyMaxAggregateOutputType = {
    id: bigint | null;
    name: string | null;
    description: string | null;
    employerId: bigint | null;
    areaId: bigint | null;
    publishedAt: Date | null;
    archived: boolean | null;
    url: string | null;
    salaryFrom: runtime.Decimal | null;
    salaryTo: runtime.Decimal | null;
    currency: string | null;
    updatedAt: Date | null;
};
export type VacancyCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    employerId: number;
    areaId: number;
    publishedAt: number;
    archived: number;
    url: number;
    salaryFrom: number;
    salaryTo: number;
    currency: number;
    professionalRoles: number;
    experience: number;
    updatedAt: number;
    _all: number;
};
export type VacancyAvgAggregateInputType = {
    id?: true;
    employerId?: true;
    areaId?: true;
    salaryFrom?: true;
    salaryTo?: true;
};
export type VacancySumAggregateInputType = {
    id?: true;
    employerId?: true;
    areaId?: true;
    salaryFrom?: true;
    salaryTo?: true;
};
export type VacancyMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    employerId?: true;
    areaId?: true;
    publishedAt?: true;
    archived?: true;
    url?: true;
    salaryFrom?: true;
    salaryTo?: true;
    currency?: true;
    updatedAt?: true;
};
export type VacancyMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    employerId?: true;
    areaId?: true;
    publishedAt?: true;
    archived?: true;
    url?: true;
    salaryFrom?: true;
    salaryTo?: true;
    currency?: true;
    updatedAt?: true;
};
export type VacancyCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    employerId?: true;
    areaId?: true;
    publishedAt?: true;
    archived?: true;
    url?: true;
    salaryFrom?: true;
    salaryTo?: true;
    currency?: true;
    professionalRoles?: true;
    experience?: true;
    updatedAt?: true;
    _all?: true;
};
export type VacancyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VacancyWhereInput;
    orderBy?: Prisma.VacancyOrderByWithRelationInput | Prisma.VacancyOrderByWithRelationInput[];
    cursor?: Prisma.VacancyWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | VacancyCountAggregateInputType;
    _avg?: VacancyAvgAggregateInputType;
    _sum?: VacancySumAggregateInputType;
    _min?: VacancyMinAggregateInputType;
    _max?: VacancyMaxAggregateInputType;
};
export type GetVacancyAggregateType<T extends VacancyAggregateArgs> = {
    [P in keyof T & keyof AggregateVacancy]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVacancy[P]> : Prisma.GetScalarType<T[P], AggregateVacancy[P]>;
};
export type VacancyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VacancyWhereInput;
    orderBy?: Prisma.VacancyOrderByWithAggregationInput | Prisma.VacancyOrderByWithAggregationInput[];
    by: Prisma.VacancyScalarFieldEnum[] | Prisma.VacancyScalarFieldEnum;
    having?: Prisma.VacancyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VacancyCountAggregateInputType | true;
    _avg?: VacancyAvgAggregateInputType;
    _sum?: VacancySumAggregateInputType;
    _min?: VacancyMinAggregateInputType;
    _max?: VacancyMaxAggregateInputType;
};
export type VacancyGroupByOutputType = {
    id: bigint;
    name: string;
    description: string | null;
    employerId: bigint | null;
    areaId: bigint | null;
    publishedAt: Date | null;
    archived: boolean;
    url: string | null;
    salaryFrom: runtime.Decimal | null;
    salaryTo: runtime.Decimal | null;
    currency: string | null;
    professionalRoles: runtime.JsonValue | null;
    experience: runtime.JsonValue | null;
    updatedAt: Date | null;
    _count: VacancyCountAggregateOutputType | null;
    _avg: VacancyAvgAggregateOutputType | null;
    _sum: VacancySumAggregateOutputType | null;
    _min: VacancyMinAggregateOutputType | null;
    _max: VacancyMaxAggregateOutputType | null;
};
type GetVacancyGroupByPayload<T extends VacancyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VacancyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VacancyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VacancyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VacancyGroupByOutputType[P]>;
}>>;
export type VacancyWhereInput = {
    AND?: Prisma.VacancyWhereInput | Prisma.VacancyWhereInput[];
    OR?: Prisma.VacancyWhereInput[];
    NOT?: Prisma.VacancyWhereInput | Prisma.VacancyWhereInput[];
    id?: Prisma.BigIntFilter<"Vacancy"> | bigint | number;
    name?: Prisma.StringFilter<"Vacancy"> | string;
    description?: Prisma.StringNullableFilter<"Vacancy"> | string | null;
    employerId?: Prisma.BigIntNullableFilter<"Vacancy"> | bigint | number | null;
    areaId?: Prisma.BigIntNullableFilter<"Vacancy"> | bigint | number | null;
    publishedAt?: Prisma.DateTimeNullableFilter<"Vacancy"> | Date | string | null;
    archived?: Prisma.BoolFilter<"Vacancy"> | boolean;
    url?: Prisma.StringNullableFilter<"Vacancy"> | string | null;
    salaryFrom?: Prisma.DecimalNullableFilter<"Vacancy"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    salaryTo?: Prisma.DecimalNullableFilter<"Vacancy"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.StringNullableFilter<"Vacancy"> | string | null;
    professionalRoles?: Prisma.JsonNullableFilter<"Vacancy">;
    experience?: Prisma.JsonNullableFilter<"Vacancy">;
    updatedAt?: Prisma.DateTimeNullableFilter<"Vacancy"> | Date | string | null;
    employer?: Prisma.XOR<Prisma.EmployerNullableScalarRelationFilter, Prisma.EmployerWhereInput> | null;
    skills?: Prisma.VacancySkillListRelationFilter;
};
export type VacancyOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    employerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    areaId?: Prisma.SortOrderInput | Prisma.SortOrder;
    publishedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    archived?: Prisma.SortOrder;
    url?: Prisma.SortOrderInput | Prisma.SortOrder;
    salaryFrom?: Prisma.SortOrderInput | Prisma.SortOrder;
    salaryTo?: Prisma.SortOrderInput | Prisma.SortOrder;
    currency?: Prisma.SortOrderInput | Prisma.SortOrder;
    professionalRoles?: Prisma.SortOrderInput | Prisma.SortOrder;
    experience?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    employer?: Prisma.EmployerOrderByWithRelationInput;
    skills?: Prisma.VacancySkillOrderByRelationAggregateInput;
};
export type VacancyWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.VacancyWhereInput | Prisma.VacancyWhereInput[];
    OR?: Prisma.VacancyWhereInput[];
    NOT?: Prisma.VacancyWhereInput | Prisma.VacancyWhereInput[];
    name?: Prisma.StringFilter<"Vacancy"> | string;
    description?: Prisma.StringNullableFilter<"Vacancy"> | string | null;
    employerId?: Prisma.BigIntNullableFilter<"Vacancy"> | bigint | number | null;
    areaId?: Prisma.BigIntNullableFilter<"Vacancy"> | bigint | number | null;
    publishedAt?: Prisma.DateTimeNullableFilter<"Vacancy"> | Date | string | null;
    archived?: Prisma.BoolFilter<"Vacancy"> | boolean;
    url?: Prisma.StringNullableFilter<"Vacancy"> | string | null;
    salaryFrom?: Prisma.DecimalNullableFilter<"Vacancy"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    salaryTo?: Prisma.DecimalNullableFilter<"Vacancy"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.StringNullableFilter<"Vacancy"> | string | null;
    professionalRoles?: Prisma.JsonNullableFilter<"Vacancy">;
    experience?: Prisma.JsonNullableFilter<"Vacancy">;
    updatedAt?: Prisma.DateTimeNullableFilter<"Vacancy"> | Date | string | null;
    employer?: Prisma.XOR<Prisma.EmployerNullableScalarRelationFilter, Prisma.EmployerWhereInput> | null;
    skills?: Prisma.VacancySkillListRelationFilter;
}, "id">;
export type VacancyOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    employerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    areaId?: Prisma.SortOrderInput | Prisma.SortOrder;
    publishedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    archived?: Prisma.SortOrder;
    url?: Prisma.SortOrderInput | Prisma.SortOrder;
    salaryFrom?: Prisma.SortOrderInput | Prisma.SortOrder;
    salaryTo?: Prisma.SortOrderInput | Prisma.SortOrder;
    currency?: Prisma.SortOrderInput | Prisma.SortOrder;
    professionalRoles?: Prisma.SortOrderInput | Prisma.SortOrder;
    experience?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.VacancyCountOrderByAggregateInput;
    _avg?: Prisma.VacancyAvgOrderByAggregateInput;
    _max?: Prisma.VacancyMaxOrderByAggregateInput;
    _min?: Prisma.VacancyMinOrderByAggregateInput;
    _sum?: Prisma.VacancySumOrderByAggregateInput;
};
export type VacancyScalarWhereWithAggregatesInput = {
    AND?: Prisma.VacancyScalarWhereWithAggregatesInput | Prisma.VacancyScalarWhereWithAggregatesInput[];
    OR?: Prisma.VacancyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VacancyScalarWhereWithAggregatesInput | Prisma.VacancyScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"Vacancy"> | bigint | number;
    name?: Prisma.StringWithAggregatesFilter<"Vacancy"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Vacancy"> | string | null;
    employerId?: Prisma.BigIntNullableWithAggregatesFilter<"Vacancy"> | bigint | number | null;
    areaId?: Prisma.BigIntNullableWithAggregatesFilter<"Vacancy"> | bigint | number | null;
    publishedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Vacancy"> | Date | string | null;
    archived?: Prisma.BoolWithAggregatesFilter<"Vacancy"> | boolean;
    url?: Prisma.StringNullableWithAggregatesFilter<"Vacancy"> | string | null;
    salaryFrom?: Prisma.DecimalNullableWithAggregatesFilter<"Vacancy"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    salaryTo?: Prisma.DecimalNullableWithAggregatesFilter<"Vacancy"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.StringNullableWithAggregatesFilter<"Vacancy"> | string | null;
    professionalRoles?: Prisma.JsonNullableWithAggregatesFilter<"Vacancy">;
    experience?: Prisma.JsonNullableWithAggregatesFilter<"Vacancy">;
    updatedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Vacancy"> | Date | string | null;
};
export type VacancyCreateInput = {
    id: bigint | number;
    name: string;
    description?: string | null;
    areaId?: bigint | number | null;
    publishedAt?: Date | string | null;
    archived?: boolean;
    url?: string | null;
    salaryFrom?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    salaryTo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: string | null;
    professionalRoles?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    experience?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Date | string | null;
    employer?: Prisma.EmployerCreateNestedOneWithoutVacanciesInput;
    skills?: Prisma.VacancySkillCreateNestedManyWithoutVacancyInput;
};
export type VacancyUncheckedCreateInput = {
    id: bigint | number;
    name: string;
    description?: string | null;
    employerId?: bigint | number | null;
    areaId?: bigint | number | null;
    publishedAt?: Date | string | null;
    archived?: boolean;
    url?: string | null;
    salaryFrom?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    salaryTo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: string | null;
    professionalRoles?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    experience?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Date | string | null;
    skills?: Prisma.VacancySkillUncheckedCreateNestedManyWithoutVacancyInput;
};
export type VacancyUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    areaId?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    archived?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salaryFrom?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    salaryTo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    professionalRoles?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    experience?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    employer?: Prisma.EmployerUpdateOneWithoutVacanciesNestedInput;
    skills?: Prisma.VacancySkillUpdateManyWithoutVacancyNestedInput;
};
export type VacancyUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    employerId?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    areaId?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    archived?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salaryFrom?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    salaryTo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    professionalRoles?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    experience?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    skills?: Prisma.VacancySkillUncheckedUpdateManyWithoutVacancyNestedInput;
};
export type VacancyCreateManyInput = {
    id: bigint | number;
    name: string;
    description?: string | null;
    employerId?: bigint | number | null;
    areaId?: bigint | number | null;
    publishedAt?: Date | string | null;
    archived?: boolean;
    url?: string | null;
    salaryFrom?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    salaryTo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: string | null;
    professionalRoles?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    experience?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Date | string | null;
};
export type VacancyUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    areaId?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    archived?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salaryFrom?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    salaryTo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    professionalRoles?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    experience?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type VacancyUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    employerId?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    areaId?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    archived?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salaryFrom?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    salaryTo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    professionalRoles?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    experience?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type VacancyListRelationFilter = {
    every?: Prisma.VacancyWhereInput;
    some?: Prisma.VacancyWhereInput;
    none?: Prisma.VacancyWhereInput;
};
export type VacancyOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type VacancyCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    employerId?: Prisma.SortOrder;
    areaId?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrder;
    archived?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    salaryFrom?: Prisma.SortOrder;
    salaryTo?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    professionalRoles?: Prisma.SortOrder;
    experience?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VacancyAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employerId?: Prisma.SortOrder;
    areaId?: Prisma.SortOrder;
    salaryFrom?: Prisma.SortOrder;
    salaryTo?: Prisma.SortOrder;
};
export type VacancyMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    employerId?: Prisma.SortOrder;
    areaId?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrder;
    archived?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    salaryFrom?: Prisma.SortOrder;
    salaryTo?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VacancyMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    employerId?: Prisma.SortOrder;
    areaId?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrder;
    archived?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    salaryFrom?: Prisma.SortOrder;
    salaryTo?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VacancySumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employerId?: Prisma.SortOrder;
    areaId?: Prisma.SortOrder;
    salaryFrom?: Prisma.SortOrder;
    salaryTo?: Prisma.SortOrder;
};
export type VacancyScalarRelationFilter = {
    is?: Prisma.VacancyWhereInput;
    isNot?: Prisma.VacancyWhereInput;
};
export type VacancyCreateNestedManyWithoutEmployerInput = {
    create?: Prisma.XOR<Prisma.VacancyCreateWithoutEmployerInput, Prisma.VacancyUncheckedCreateWithoutEmployerInput> | Prisma.VacancyCreateWithoutEmployerInput[] | Prisma.VacancyUncheckedCreateWithoutEmployerInput[];
    connectOrCreate?: Prisma.VacancyCreateOrConnectWithoutEmployerInput | Prisma.VacancyCreateOrConnectWithoutEmployerInput[];
    createMany?: Prisma.VacancyCreateManyEmployerInputEnvelope;
    connect?: Prisma.VacancyWhereUniqueInput | Prisma.VacancyWhereUniqueInput[];
};
export type VacancyUncheckedCreateNestedManyWithoutEmployerInput = {
    create?: Prisma.XOR<Prisma.VacancyCreateWithoutEmployerInput, Prisma.VacancyUncheckedCreateWithoutEmployerInput> | Prisma.VacancyCreateWithoutEmployerInput[] | Prisma.VacancyUncheckedCreateWithoutEmployerInput[];
    connectOrCreate?: Prisma.VacancyCreateOrConnectWithoutEmployerInput | Prisma.VacancyCreateOrConnectWithoutEmployerInput[];
    createMany?: Prisma.VacancyCreateManyEmployerInputEnvelope;
    connect?: Prisma.VacancyWhereUniqueInput | Prisma.VacancyWhereUniqueInput[];
};
export type VacancyUpdateManyWithoutEmployerNestedInput = {
    create?: Prisma.XOR<Prisma.VacancyCreateWithoutEmployerInput, Prisma.VacancyUncheckedCreateWithoutEmployerInput> | Prisma.VacancyCreateWithoutEmployerInput[] | Prisma.VacancyUncheckedCreateWithoutEmployerInput[];
    connectOrCreate?: Prisma.VacancyCreateOrConnectWithoutEmployerInput | Prisma.VacancyCreateOrConnectWithoutEmployerInput[];
    upsert?: Prisma.VacancyUpsertWithWhereUniqueWithoutEmployerInput | Prisma.VacancyUpsertWithWhereUniqueWithoutEmployerInput[];
    createMany?: Prisma.VacancyCreateManyEmployerInputEnvelope;
    set?: Prisma.VacancyWhereUniqueInput | Prisma.VacancyWhereUniqueInput[];
    disconnect?: Prisma.VacancyWhereUniqueInput | Prisma.VacancyWhereUniqueInput[];
    delete?: Prisma.VacancyWhereUniqueInput | Prisma.VacancyWhereUniqueInput[];
    connect?: Prisma.VacancyWhereUniqueInput | Prisma.VacancyWhereUniqueInput[];
    update?: Prisma.VacancyUpdateWithWhereUniqueWithoutEmployerInput | Prisma.VacancyUpdateWithWhereUniqueWithoutEmployerInput[];
    updateMany?: Prisma.VacancyUpdateManyWithWhereWithoutEmployerInput | Prisma.VacancyUpdateManyWithWhereWithoutEmployerInput[];
    deleteMany?: Prisma.VacancyScalarWhereInput | Prisma.VacancyScalarWhereInput[];
};
export type VacancyUncheckedUpdateManyWithoutEmployerNestedInput = {
    create?: Prisma.XOR<Prisma.VacancyCreateWithoutEmployerInput, Prisma.VacancyUncheckedCreateWithoutEmployerInput> | Prisma.VacancyCreateWithoutEmployerInput[] | Prisma.VacancyUncheckedCreateWithoutEmployerInput[];
    connectOrCreate?: Prisma.VacancyCreateOrConnectWithoutEmployerInput | Prisma.VacancyCreateOrConnectWithoutEmployerInput[];
    upsert?: Prisma.VacancyUpsertWithWhereUniqueWithoutEmployerInput | Prisma.VacancyUpsertWithWhereUniqueWithoutEmployerInput[];
    createMany?: Prisma.VacancyCreateManyEmployerInputEnvelope;
    set?: Prisma.VacancyWhereUniqueInput | Prisma.VacancyWhereUniqueInput[];
    disconnect?: Prisma.VacancyWhereUniqueInput | Prisma.VacancyWhereUniqueInput[];
    delete?: Prisma.VacancyWhereUniqueInput | Prisma.VacancyWhereUniqueInput[];
    connect?: Prisma.VacancyWhereUniqueInput | Prisma.VacancyWhereUniqueInput[];
    update?: Prisma.VacancyUpdateWithWhereUniqueWithoutEmployerInput | Prisma.VacancyUpdateWithWhereUniqueWithoutEmployerInput[];
    updateMany?: Prisma.VacancyUpdateManyWithWhereWithoutEmployerInput | Prisma.VacancyUpdateManyWithWhereWithoutEmployerInput[];
    deleteMany?: Prisma.VacancyScalarWhereInput | Prisma.VacancyScalarWhereInput[];
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null;
    increment?: bigint | number;
    decrement?: bigint | number;
    multiply?: bigint | number;
    divide?: bigint | number;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type VacancyCreateNestedOneWithoutSkillsInput = {
    create?: Prisma.XOR<Prisma.VacancyCreateWithoutSkillsInput, Prisma.VacancyUncheckedCreateWithoutSkillsInput>;
    connectOrCreate?: Prisma.VacancyCreateOrConnectWithoutSkillsInput;
    connect?: Prisma.VacancyWhereUniqueInput;
};
export type VacancyUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: Prisma.XOR<Prisma.VacancyCreateWithoutSkillsInput, Prisma.VacancyUncheckedCreateWithoutSkillsInput>;
    connectOrCreate?: Prisma.VacancyCreateOrConnectWithoutSkillsInput;
    upsert?: Prisma.VacancyUpsertWithoutSkillsInput;
    connect?: Prisma.VacancyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VacancyUpdateToOneWithWhereWithoutSkillsInput, Prisma.VacancyUpdateWithoutSkillsInput>, Prisma.VacancyUncheckedUpdateWithoutSkillsInput>;
};
export type VacancyCreateWithoutEmployerInput = {
    id: bigint | number;
    name: string;
    description?: string | null;
    areaId?: bigint | number | null;
    publishedAt?: Date | string | null;
    archived?: boolean;
    url?: string | null;
    salaryFrom?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    salaryTo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: string | null;
    professionalRoles?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    experience?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Date | string | null;
    skills?: Prisma.VacancySkillCreateNestedManyWithoutVacancyInput;
};
export type VacancyUncheckedCreateWithoutEmployerInput = {
    id: bigint | number;
    name: string;
    description?: string | null;
    areaId?: bigint | number | null;
    publishedAt?: Date | string | null;
    archived?: boolean;
    url?: string | null;
    salaryFrom?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    salaryTo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: string | null;
    professionalRoles?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    experience?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Date | string | null;
    skills?: Prisma.VacancySkillUncheckedCreateNestedManyWithoutVacancyInput;
};
export type VacancyCreateOrConnectWithoutEmployerInput = {
    where: Prisma.VacancyWhereUniqueInput;
    create: Prisma.XOR<Prisma.VacancyCreateWithoutEmployerInput, Prisma.VacancyUncheckedCreateWithoutEmployerInput>;
};
export type VacancyCreateManyEmployerInputEnvelope = {
    data: Prisma.VacancyCreateManyEmployerInput | Prisma.VacancyCreateManyEmployerInput[];
    skipDuplicates?: boolean;
};
export type VacancyUpsertWithWhereUniqueWithoutEmployerInput = {
    where: Prisma.VacancyWhereUniqueInput;
    update: Prisma.XOR<Prisma.VacancyUpdateWithoutEmployerInput, Prisma.VacancyUncheckedUpdateWithoutEmployerInput>;
    create: Prisma.XOR<Prisma.VacancyCreateWithoutEmployerInput, Prisma.VacancyUncheckedCreateWithoutEmployerInput>;
};
export type VacancyUpdateWithWhereUniqueWithoutEmployerInput = {
    where: Prisma.VacancyWhereUniqueInput;
    data: Prisma.XOR<Prisma.VacancyUpdateWithoutEmployerInput, Prisma.VacancyUncheckedUpdateWithoutEmployerInput>;
};
export type VacancyUpdateManyWithWhereWithoutEmployerInput = {
    where: Prisma.VacancyScalarWhereInput;
    data: Prisma.XOR<Prisma.VacancyUpdateManyMutationInput, Prisma.VacancyUncheckedUpdateManyWithoutEmployerInput>;
};
export type VacancyScalarWhereInput = {
    AND?: Prisma.VacancyScalarWhereInput | Prisma.VacancyScalarWhereInput[];
    OR?: Prisma.VacancyScalarWhereInput[];
    NOT?: Prisma.VacancyScalarWhereInput | Prisma.VacancyScalarWhereInput[];
    id?: Prisma.BigIntFilter<"Vacancy"> | bigint | number;
    name?: Prisma.StringFilter<"Vacancy"> | string;
    description?: Prisma.StringNullableFilter<"Vacancy"> | string | null;
    employerId?: Prisma.BigIntNullableFilter<"Vacancy"> | bigint | number | null;
    areaId?: Prisma.BigIntNullableFilter<"Vacancy"> | bigint | number | null;
    publishedAt?: Prisma.DateTimeNullableFilter<"Vacancy"> | Date | string | null;
    archived?: Prisma.BoolFilter<"Vacancy"> | boolean;
    url?: Prisma.StringNullableFilter<"Vacancy"> | string | null;
    salaryFrom?: Prisma.DecimalNullableFilter<"Vacancy"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    salaryTo?: Prisma.DecimalNullableFilter<"Vacancy"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.StringNullableFilter<"Vacancy"> | string | null;
    professionalRoles?: Prisma.JsonNullableFilter<"Vacancy">;
    experience?: Prisma.JsonNullableFilter<"Vacancy">;
    updatedAt?: Prisma.DateTimeNullableFilter<"Vacancy"> | Date | string | null;
};
export type VacancyCreateWithoutSkillsInput = {
    id: bigint | number;
    name: string;
    description?: string | null;
    areaId?: bigint | number | null;
    publishedAt?: Date | string | null;
    archived?: boolean;
    url?: string | null;
    salaryFrom?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    salaryTo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: string | null;
    professionalRoles?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    experience?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Date | string | null;
    employer?: Prisma.EmployerCreateNestedOneWithoutVacanciesInput;
};
export type VacancyUncheckedCreateWithoutSkillsInput = {
    id: bigint | number;
    name: string;
    description?: string | null;
    employerId?: bigint | number | null;
    areaId?: bigint | number | null;
    publishedAt?: Date | string | null;
    archived?: boolean;
    url?: string | null;
    salaryFrom?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    salaryTo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: string | null;
    professionalRoles?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    experience?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Date | string | null;
};
export type VacancyCreateOrConnectWithoutSkillsInput = {
    where: Prisma.VacancyWhereUniqueInput;
    create: Prisma.XOR<Prisma.VacancyCreateWithoutSkillsInput, Prisma.VacancyUncheckedCreateWithoutSkillsInput>;
};
export type VacancyUpsertWithoutSkillsInput = {
    update: Prisma.XOR<Prisma.VacancyUpdateWithoutSkillsInput, Prisma.VacancyUncheckedUpdateWithoutSkillsInput>;
    create: Prisma.XOR<Prisma.VacancyCreateWithoutSkillsInput, Prisma.VacancyUncheckedCreateWithoutSkillsInput>;
    where?: Prisma.VacancyWhereInput;
};
export type VacancyUpdateToOneWithWhereWithoutSkillsInput = {
    where?: Prisma.VacancyWhereInput;
    data: Prisma.XOR<Prisma.VacancyUpdateWithoutSkillsInput, Prisma.VacancyUncheckedUpdateWithoutSkillsInput>;
};
export type VacancyUpdateWithoutSkillsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    areaId?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    archived?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salaryFrom?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    salaryTo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    professionalRoles?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    experience?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    employer?: Prisma.EmployerUpdateOneWithoutVacanciesNestedInput;
};
export type VacancyUncheckedUpdateWithoutSkillsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    employerId?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    areaId?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    archived?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salaryFrom?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    salaryTo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    professionalRoles?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    experience?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type VacancyCreateManyEmployerInput = {
    id: bigint | number;
    name: string;
    description?: string | null;
    areaId?: bigint | number | null;
    publishedAt?: Date | string | null;
    archived?: boolean;
    url?: string | null;
    salaryFrom?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    salaryTo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: string | null;
    professionalRoles?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    experience?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Date | string | null;
};
export type VacancyUpdateWithoutEmployerInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    areaId?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    archived?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salaryFrom?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    salaryTo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    professionalRoles?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    experience?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    skills?: Prisma.VacancySkillUpdateManyWithoutVacancyNestedInput;
};
export type VacancyUncheckedUpdateWithoutEmployerInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    areaId?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    archived?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salaryFrom?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    salaryTo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    professionalRoles?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    experience?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    skills?: Prisma.VacancySkillUncheckedUpdateManyWithoutVacancyNestedInput;
};
export type VacancyUncheckedUpdateManyWithoutEmployerInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    areaId?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    archived?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salaryFrom?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    salaryTo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    professionalRoles?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    experience?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type VacancyCountOutputType = {
    skills: number;
};
export type VacancyCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    skills?: boolean | VacancyCountOutputTypeCountSkillsArgs;
};
export type VacancyCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VacancyCountOutputTypeSelect<ExtArgs> | null;
};
export type VacancyCountOutputTypeCountSkillsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VacancySkillWhereInput;
};
export type VacancySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    employerId?: boolean;
    areaId?: boolean;
    publishedAt?: boolean;
    archived?: boolean;
    url?: boolean;
    salaryFrom?: boolean;
    salaryTo?: boolean;
    currency?: boolean;
    professionalRoles?: boolean;
    experience?: boolean;
    updatedAt?: boolean;
    employer?: boolean | Prisma.Vacancy$employerArgs<ExtArgs>;
    skills?: boolean | Prisma.Vacancy$skillsArgs<ExtArgs>;
    _count?: boolean | Prisma.VacancyCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vacancy"]>;
export type VacancySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    employerId?: boolean;
    areaId?: boolean;
    publishedAt?: boolean;
    archived?: boolean;
    url?: boolean;
    salaryFrom?: boolean;
    salaryTo?: boolean;
    currency?: boolean;
    professionalRoles?: boolean;
    experience?: boolean;
    updatedAt?: boolean;
    employer?: boolean | Prisma.Vacancy$employerArgs<ExtArgs>;
}, ExtArgs["result"]["vacancy"]>;
export type VacancySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    employerId?: boolean;
    areaId?: boolean;
    publishedAt?: boolean;
    archived?: boolean;
    url?: boolean;
    salaryFrom?: boolean;
    salaryTo?: boolean;
    currency?: boolean;
    professionalRoles?: boolean;
    experience?: boolean;
    updatedAt?: boolean;
    employer?: boolean | Prisma.Vacancy$employerArgs<ExtArgs>;
}, ExtArgs["result"]["vacancy"]>;
export type VacancySelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    employerId?: boolean;
    areaId?: boolean;
    publishedAt?: boolean;
    archived?: boolean;
    url?: boolean;
    salaryFrom?: boolean;
    salaryTo?: boolean;
    currency?: boolean;
    professionalRoles?: boolean;
    experience?: boolean;
    updatedAt?: boolean;
};
export type VacancyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description" | "employerId" | "areaId" | "publishedAt" | "archived" | "url" | "salaryFrom" | "salaryTo" | "currency" | "professionalRoles" | "experience" | "updatedAt", ExtArgs["result"]["vacancy"]>;
export type VacancyInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employer?: boolean | Prisma.Vacancy$employerArgs<ExtArgs>;
    skills?: boolean | Prisma.Vacancy$skillsArgs<ExtArgs>;
    _count?: boolean | Prisma.VacancyCountOutputTypeDefaultArgs<ExtArgs>;
};
export type VacancyIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employer?: boolean | Prisma.Vacancy$employerArgs<ExtArgs>;
};
export type VacancyIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employer?: boolean | Prisma.Vacancy$employerArgs<ExtArgs>;
};
export type $VacancyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Vacancy";
    objects: {
        employer: Prisma.$EmployerPayload<ExtArgs> | null;
        skills: Prisma.$VacancySkillPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        name: string;
        description: string | null;
        employerId: bigint | null;
        areaId: bigint | null;
        publishedAt: Date | null;
        archived: boolean;
        url: string | null;
        salaryFrom: runtime.Decimal | null;
        salaryTo: runtime.Decimal | null;
        currency: string | null;
        professionalRoles: runtime.JsonValue | null;
        experience: runtime.JsonValue | null;
        updatedAt: Date | null;
    }, ExtArgs["result"]["vacancy"]>;
    composites: {};
};
export type VacancyGetPayload<S extends boolean | null | undefined | VacancyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VacancyPayload, S>;
export type VacancyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VacancyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VacancyCountAggregateInputType | true;
};
export interface VacancyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Vacancy'];
        meta: {
            name: 'Vacancy';
        };
    };
    findUnique<T extends VacancyFindUniqueArgs>(args: Prisma.SelectSubset<T, VacancyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VacancyClient<runtime.Types.Result.GetResult<Prisma.$VacancyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends VacancyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VacancyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VacancyClient<runtime.Types.Result.GetResult<Prisma.$VacancyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends VacancyFindFirstArgs>(args?: Prisma.SelectSubset<T, VacancyFindFirstArgs<ExtArgs>>): Prisma.Prisma__VacancyClient<runtime.Types.Result.GetResult<Prisma.$VacancyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends VacancyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VacancyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VacancyClient<runtime.Types.Result.GetResult<Prisma.$VacancyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends VacancyFindManyArgs>(args?: Prisma.SelectSubset<T, VacancyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VacancyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends VacancyCreateArgs>(args: Prisma.SelectSubset<T, VacancyCreateArgs<ExtArgs>>): Prisma.Prisma__VacancyClient<runtime.Types.Result.GetResult<Prisma.$VacancyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends VacancyCreateManyArgs>(args?: Prisma.SelectSubset<T, VacancyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends VacancyCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, VacancyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VacancyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends VacancyDeleteArgs>(args: Prisma.SelectSubset<T, VacancyDeleteArgs<ExtArgs>>): Prisma.Prisma__VacancyClient<runtime.Types.Result.GetResult<Prisma.$VacancyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends VacancyUpdateArgs>(args: Prisma.SelectSubset<T, VacancyUpdateArgs<ExtArgs>>): Prisma.Prisma__VacancyClient<runtime.Types.Result.GetResult<Prisma.$VacancyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends VacancyDeleteManyArgs>(args?: Prisma.SelectSubset<T, VacancyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends VacancyUpdateManyArgs>(args: Prisma.SelectSubset<T, VacancyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends VacancyUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, VacancyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VacancyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends VacancyUpsertArgs>(args: Prisma.SelectSubset<T, VacancyUpsertArgs<ExtArgs>>): Prisma.Prisma__VacancyClient<runtime.Types.Result.GetResult<Prisma.$VacancyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends VacancyCountArgs>(args?: Prisma.Subset<T, VacancyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VacancyCountAggregateOutputType> : number>;
    aggregate<T extends VacancyAggregateArgs>(args: Prisma.Subset<T, VacancyAggregateArgs>): Prisma.PrismaPromise<GetVacancyAggregateType<T>>;
    groupBy<T extends VacancyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VacancyGroupByArgs['orderBy'];
    } : {
        orderBy?: VacancyGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VacancyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVacancyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: VacancyFieldRefs;
}
export interface Prisma__VacancyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    employer<T extends Prisma.Vacancy$employerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Vacancy$employerArgs<ExtArgs>>): Prisma.Prisma__EmployerClient<runtime.Types.Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    skills<T extends Prisma.Vacancy$skillsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Vacancy$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VacancySkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface VacancyFieldRefs {
    readonly id: Prisma.FieldRef<"Vacancy", 'BigInt'>;
    readonly name: Prisma.FieldRef<"Vacancy", 'String'>;
    readonly description: Prisma.FieldRef<"Vacancy", 'String'>;
    readonly employerId: Prisma.FieldRef<"Vacancy", 'BigInt'>;
    readonly areaId: Prisma.FieldRef<"Vacancy", 'BigInt'>;
    readonly publishedAt: Prisma.FieldRef<"Vacancy", 'DateTime'>;
    readonly archived: Prisma.FieldRef<"Vacancy", 'Boolean'>;
    readonly url: Prisma.FieldRef<"Vacancy", 'String'>;
    readonly salaryFrom: Prisma.FieldRef<"Vacancy", 'Decimal'>;
    readonly salaryTo: Prisma.FieldRef<"Vacancy", 'Decimal'>;
    readonly currency: Prisma.FieldRef<"Vacancy", 'String'>;
    readonly professionalRoles: Prisma.FieldRef<"Vacancy", 'Json'>;
    readonly experience: Prisma.FieldRef<"Vacancy", 'Json'>;
    readonly updatedAt: Prisma.FieldRef<"Vacancy", 'DateTime'>;
}
export type VacancyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VacancySelect<ExtArgs> | null;
    omit?: Prisma.VacancyOmit<ExtArgs> | null;
    include?: Prisma.VacancyInclude<ExtArgs> | null;
    where: Prisma.VacancyWhereUniqueInput;
};
export type VacancyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VacancySelect<ExtArgs> | null;
    omit?: Prisma.VacancyOmit<ExtArgs> | null;
    include?: Prisma.VacancyInclude<ExtArgs> | null;
    where: Prisma.VacancyWhereUniqueInput;
};
export type VacancyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type VacancyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type VacancyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type VacancyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VacancySelect<ExtArgs> | null;
    omit?: Prisma.VacancyOmit<ExtArgs> | null;
    include?: Prisma.VacancyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VacancyCreateInput, Prisma.VacancyUncheckedCreateInput>;
};
export type VacancyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.VacancyCreateManyInput | Prisma.VacancyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type VacancyCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VacancySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VacancyOmit<ExtArgs> | null;
    data: Prisma.VacancyCreateManyInput | Prisma.VacancyCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.VacancyIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type VacancyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VacancySelect<ExtArgs> | null;
    omit?: Prisma.VacancyOmit<ExtArgs> | null;
    include?: Prisma.VacancyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VacancyUpdateInput, Prisma.VacancyUncheckedUpdateInput>;
    where: Prisma.VacancyWhereUniqueInput;
};
export type VacancyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.VacancyUpdateManyMutationInput, Prisma.VacancyUncheckedUpdateManyInput>;
    where?: Prisma.VacancyWhereInput;
    limit?: number;
};
export type VacancyUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VacancySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VacancyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VacancyUpdateManyMutationInput, Prisma.VacancyUncheckedUpdateManyInput>;
    where?: Prisma.VacancyWhereInput;
    limit?: number;
    include?: Prisma.VacancyIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type VacancyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VacancySelect<ExtArgs> | null;
    omit?: Prisma.VacancyOmit<ExtArgs> | null;
    include?: Prisma.VacancyInclude<ExtArgs> | null;
    where: Prisma.VacancyWhereUniqueInput;
    create: Prisma.XOR<Prisma.VacancyCreateInput, Prisma.VacancyUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.VacancyUpdateInput, Prisma.VacancyUncheckedUpdateInput>;
};
export type VacancyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VacancySelect<ExtArgs> | null;
    omit?: Prisma.VacancyOmit<ExtArgs> | null;
    include?: Prisma.VacancyInclude<ExtArgs> | null;
    where: Prisma.VacancyWhereUniqueInput;
};
export type VacancyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VacancyWhereInput;
    limit?: number;
};
export type Vacancy$employerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployerSelect<ExtArgs> | null;
    omit?: Prisma.EmployerOmit<ExtArgs> | null;
    include?: Prisma.EmployerInclude<ExtArgs> | null;
    where?: Prisma.EmployerWhereInput;
};
export type Vacancy$skillsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type VacancyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VacancySelect<ExtArgs> | null;
    omit?: Prisma.VacancyOmit<ExtArgs> | null;
    include?: Prisma.VacancyInclude<ExtArgs> | null;
};
export {};

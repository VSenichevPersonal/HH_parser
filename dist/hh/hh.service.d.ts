export interface VacancySearchParams {
    text?: string;
    area?: number;
    employer_id?: number;
    per_page?: number;
    page?: number;
    order_by?: 'publication_time' | 'salary_desc' | 'salary_asc' | 'relevance';
    search_field?: string;
    experience?: string;
    employment?: string;
    schedule?: string;
    salary?: number;
    currency?: string;
    date_from?: string;
    date_to?: string;
}
export interface ResumeSearchParams {
    text?: string;
    area?: number;
    per_page?: number;
    page?: number;
    order_by?: string;
    search_field?: string;
    experience?: string;
    employment?: string;
    schedule?: string;
    salary?: number;
    currency?: string;
    age_from?: number;
    age_to?: number;
    gender?: string;
    relocation?: string;
}
export interface HHVacancy {
    id: string;
    name: string;
    employer: {
        id: string;
        name: string;
    };
    area: {
        id: string;
        name: string;
    };
    salary?: {
        from?: number;
        to?: number;
        currency: string;
        gross: boolean;
    };
    published_at: string;
    created_at: string;
    updated_at: string;
    archived: boolean;
    premium: boolean;
    has_test: boolean;
    response_letter_required: boolean;
    address?: any;
    alternate_url: string;
    snippet: {
        requirement?: string;
        responsibility?: string;
    };
    contacts?: any;
    schedule: {
        id: string;
        name: string;
    };
    employment: {
        id: string;
        name: string;
    };
    experience: {
        id: string;
        name: string;
    };
    key_skills: Array<{
        name: string;
    }>;
    specializations: Array<{
        id: string;
        name: string;
        profarea_id: string;
        profarea_name: string;
    }>;
    professional_roles: Array<{
        id: string;
        name: string;
    }>;
    accept_handicapped: boolean;
    accept_kids: boolean;
    accept_incomplete_resumes: boolean;
    working_days: Array<string>;
    working_time_intervals: Array<string>;
    working_time_modes: Array<string>;
    accept_temporary: boolean;
    languages: Array<{
        id: string;
        name: string;
        level: {
            id: string;
            name: string;
        };
    }>;
}
export interface HHResume {
    id: string;
    first_name: string;
    last_name: string;
    middle_name?: string;
    title: string;
    photo?: {
        small?: string;
        medium?: string;
        id?: string;
    };
    can_view_full_info: boolean;
    age: number;
    gender: {
        id: string;
        name: string;
    };
    area: {
        id: string;
        name: string;
        url: string;
    };
    relocation: {
        type: {
            id: string;
            name: string;
        };
    };
    business_trip_readiness: {
        id: string;
        name: string;
    };
    contact: Array<{
        type: {
            id: string;
            name: string;
        };
        value: {
            formatted: string;
        };
        preferred: boolean;
        comment?: string;
    }>;
    salary: {
        amount?: number;
        currency: string;
    };
    employments: Array<{
        id: string;
        name: string;
    }>;
    schedules: Array<{
        id: string;
        name: string;
    }>;
    experience: Array<{
        company?: string;
        company_id?: string;
        company_url?: string;
        area?: {
            id: string;
            name: string;
        };
        position: string;
        description?: string;
        start?: string;
        end?: string;
    }>;
    education: {
        primary: Array<{
            name: string;
            organization?: string;
            result?: string;
            year?: number;
        }>;
    };
    language: Array<{
        id: string;
        name: string;
        level: {
            id: string;
            name: string;
        };
    }>;
    skill_set: Array<string>;
    skills: string;
    metro_station?: {
        station_id: string;
        station_name: string;
        line_id: string;
        line_name: string;
    };
    resume_locale: {
        id: string;
        name: string;
    };
    certificate: Array<{
        achieved_at?: string;
        owner?: string;
        title: string;
        type: string;
        url?: string;
    }>;
    created_at: string;
    updated_at: string;
    total_experience: {
        months: number;
    };
}
export declare class HHService {
    private readonly logger;
    private readonly baseURL;
    private readonly httpClient;
    private readonly limiter;
    constructor();
    searchVacancies(params?: VacancySearchParams): Promise<{
        items: HHVacancy[];
        found: number;
        pages: number;
        per_page: number;
        page: number;
        clusters: any[];
        arguments: any;
        alternate_url: string;
    }>;
    getVacancy(id: string): Promise<HHVacancy>;
    searchResumes(params: ResumeSearchParams | undefined, managerToken: string): Promise<{
        items: HHResume[];
        found: number;
        pages: number;
        per_page: number;
        page: number;
        clusters: any[];
        arguments: any;
        alternate_url: string;
    }>;
    getResume(id: string, managerToken: string): Promise<HHResume>;
    getAreas(): Promise<any[]>;
    getSpecializations(): Promise<any[]>;
    getProfessionalRoles(): Promise<any[]>;
    private saveRawVacancyResponse;
    private saveRawVacancy;
    private markVacancyAsArchived;
    private checkManagerLimits;
    private saveRawResumeResponse;
    private saveRawResume;
}

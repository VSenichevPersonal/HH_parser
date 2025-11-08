import { HHService } from './hh.service';
import type { VacancySearchParams, ResumeSearchParams } from './hh.service';
export declare class HHController {
    private readonly hhService;
    constructor(hhService: HHService);
    searchVacancies(query: VacancySearchParams): Promise<{
        items: import("./hh.service").HHVacancy[];
        found: number;
        pages: number;
        per_page: number;
        page: number;
        clusters: any[];
        arguments: any;
        alternate_url: string;
    }>;
    getVacancy(id: string): Promise<import("./hh.service").HHVacancy>;
    searchResumes(query: ResumeSearchParams): Promise<void>;
    getResume(id: string): Promise<void>;
    getAreas(): Promise<any[]>;
    getSpecializations(): Promise<any[]>;
    getProfessionalRoles(): Promise<any[]>;
    runParsing(body: {
        profileId?: string;
        entityType: 'vacancy' | 'resume';
    }): Promise<{
        message: string;
        profileId: string | undefined;
        entityType: "vacancy" | "resume";
    }>;
}

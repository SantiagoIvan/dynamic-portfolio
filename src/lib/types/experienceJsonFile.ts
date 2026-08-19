import { ExperienceTranslation } from "./experienceTranslation";

export interface ExperienceJsonFile {
    startDate: string;
    endDate?: string;
    translations: {
        es: ExperienceTranslation;
        en: ExperienceTranslation;
    };
}

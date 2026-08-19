import { ExperienceTranslation } from "./experienceTranslation";

export interface ConcreteExperienceItem {
    startDate: Date;
    endDate?: Date;
    translations: {
        es: ExperienceTranslation;
        en: ExperienceTranslation;
    };
}

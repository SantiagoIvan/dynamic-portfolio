export interface ConcreteExperienceItem {
    role: string;
    startDate: Date;
    endDate?: Date;
    company?: string;
    description: string;
    achievements: string[];
    skills: string[];
}

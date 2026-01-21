import fs from "fs/promises";
import path from "path";
import {ConcreteExperienceItem} from "@/lib/types/experienceItem";
import {ExperienceJsonFile} from "@/lib/types/experienceJsonFile";

export async function getExperieces(): Promise<ConcreteExperienceItem[]> {
    try {
        const filePath = path.join(process.cwd(), "src/data", "experiences.json");
        const file = await fs.readFile(filePath, "utf-8");

        const data = JSON.parse(file);
        const updated: ConcreteExperienceItem[] = data.map((item: ExperienceJsonFile) => {
            return {
                ...item,
                startDate: new Date(item.startDate),
                endDate: item.endDate? new Date(item.endDate) : undefined,
            }
        })
        return updated

    } catch (error) {
        console.error("Error leyendo experiences.json", error);
        return []
    }
}

import {ExperienceItem} from "@/components/ExperienceItem";
import {ConcreteExperienceItem} from "@/lib/types/experienceItem";
import { experiences } from "@/data/experiences";

export default function Experience(){
    return (
        <section id="experience" className="py-24 ">
            <div className="container max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Experiencia</h2>

                <div className="space-y-12">
                    {/* ExperienceItem */}
                    {experiences.map((experience: ConcreteExperienceItem, index: number)=> (
                        <ExperienceItem
                            key={index}
                            role={experience.role}
                            company={experience.company}
                            startDate={experience.startDate}
                            description={experience.description}
                            achievements={experience.achievements}
                            technologies={experience.technologies}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
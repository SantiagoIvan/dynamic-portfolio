import {ExperienceItem} from "@/components/ExperienceItem";
import {ConcreteExperienceItem} from "@/lib/types/experienceItem";
import {getExperieces} from "@/services/experiences.service"
import {AnimatedCard} from "@/components/AnimatedCard";
import {T} from "@/lib/i18n/LanguageProvider";

export default async function Experience(){
    const experiences = await getExperieces()
    return (
        <section id="experience" className="py-24 ">
            <div className="container lg:max-w-[70vw] mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center"><T k="experience.title" /></h2>

                <div className="space-y-12">
                    {/* ExperienceItem */}
                    {experiences
                        .sort((a, b) => b.startDate.getTime() - a.startDate.getTime())
                        .map((experience: ConcreteExperienceItem, index: number)=> (
                            <AnimatedCard key={index}>
                                <ExperienceItem
                                    startDate={experience.startDate}
                                    endDate={experience.endDate}
                                    translations={experience.translations}
                                />
                            </AnimatedCard>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
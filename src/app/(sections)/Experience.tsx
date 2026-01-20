import {ExperienceItem} from "@/components/ExperienceItem";
import {ConcreteExperienceItem} from "@/lib/types/experienceItem";

export default function Experience(){
    return (
        <section id="experience" className="py-24 ">
            <div className="container max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Experiencia</h2>

                <div className="space-y-12">
                    {/* ExperienceItem */}
                    <ExperienceItem
                        role="Frontend Developer"
                        company="Proyecto personal"
                        startDate="Ene 2023"
                        description="Desarrollo de aplicaciones web modernas con foco en UX, performance y escalabilidad."
                        achievements={[
                            "Arquitectura con Next.js App Router",
                            "Integración de WebSockets en tiempo real",
                            "Sistema de componentes reutilizables con Shadcn",
                        ]}
                        technologies={[
                            "Next.js",
                            "TypeScript",
                            "Tailwind",
                            "Shadcn",
                            "WebSockets",
                        ]}
                    />
                </div>
            </div>
        </section>
    )
}
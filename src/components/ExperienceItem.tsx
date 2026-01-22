import { Card, CardContent } from "@/components/ui/card";
import type { ConcreteExperienceItem } from "@/lib/types/experienceItem";
import {formatMonthYear} from "@/lib/utils";

export function ExperienceItem({
                                   role,
                                   startDate,
                                   endDate,
                                   company,
                                   description,
                                   achievements,
                                   skills,
                               }: ConcreteExperienceItem) {
    return (
        <Card>
            <CardContent className="p-6">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {/* Columna izquierda */}
                    <div className="lg:col-span-2 space-y-4">
                        {/* Header */}
                        <div className="space-y-1">
                            <h3 className="text-xl font-semibold">
                                {role}
                            </h3>

                            <p className="text-sm text-muted-foreground">
                                {company && <span>{company} · </span>}
                                {formatMonthYear(startDate)} –{" "}
                                {endDate ? formatMonthYear(endDate) : "Actualidad"}
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            {description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            {skills.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
                                >
              {tech}
            </span>
                            ))}
                        </div>
                    </div>

                    {/* Columna derecha */}
                    {achievements.length > 0 && (
                        <div className="space-y-3">
                            <h4 className="text-sm font-bold">
                                Logros obtenidos
                            </h4>

                            <ul className="list-disc pl-5 space-y-2 text-sm text-foreground">
                                {achievements.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}

"use client";

import { Code2, Music2, Dumbbell } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedCard } from "@/components/AnimatedCard";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function About() {
    const { t } = useLanguage();

    const pillars = [
        { key: "dev", icon: Code2 },
        { key: "music", icon: Music2 },
        { key: "calisthenics", icon: Dumbbell },
    ] as const;

    return (
        <section
            id="about"
            className="w-full lg:max-w-[70vw] mx-auto py-24"
        >
            <h2 className="text-3xl font-bold text-center mb-8">
                {t("about.title")}
            </h2>

            <p className="max-w-2xl mx-auto text-center text-muted-foreground mb-12">
                {t("about.intro")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pillars.map(({ key, icon: Icon }) => (
                    <AnimatedCard key={key}>
                        <Card className="h-full">
                            <CardContent className="p-6 space-y-3">
                                <div
                                    className="
                                        flex h-11 w-11 items-center justify-center rounded-full
                                        bg-primary/10 text-primary
                                    "
                                >
                                    <Icon className="h-5 w-5" />
                                </div>

                                <h3 className="text-lg font-semibold">
                                    {t(`about.${key}.title`)}
                                </h3>

                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    {t(`about.${key}.text`)}
                                </p>
                            </CardContent>
                        </Card>
                    </AnimatedCard>
                ))}
            </div>
        </section>
    );
}

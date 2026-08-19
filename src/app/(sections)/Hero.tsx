"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section
            id="home"
            className="scroll-mt-16 min-h-[calc(80vh-4rem)] flex items-center"
        >
            <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-in fade-in duration-700">

                {/* Texto */}
                <div className="space-y-6 animate-in slide-in-from-bottom-6 duration-700 delay-150">
                    <p className="text-sm text-muted-foreground">
                        {t("hero.welcome")}
                    </p>

                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Santiago Feijoo
                    </h1>

                    <h2 className="text-xl md:text-2xl text-primary font-semibold">
                        {t("hero.role")}
                    </h2>

                    <p className="max-w-xl text-muted-foreground">
                        {t("hero.bio")}
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {["Java", "Next.js", "Node.js", "Typescript", "Python", "PostgreSQL"].map(
                            (tech) => (
                                <span
                                    key={tech}
                                    className="rounded-md bg-muted px-3 py-1 text-sm"
                                >
                                  {tech}
                                </span>
                            )
                        )}
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
                        <Button size="lg" asChild className="border-2 transition-colors hover:bg-primary/50 ">
                            <a href="#contact">
                                {t("hero.contactCta")}
                            </a>
                        </Button>

                        <Button variant="outline" size="lg" asChild>
                            <a href="/cv-santiago-feijoo.pdf" download>
                                {t("hero.cvCta")}
                            </a>
                        </Button>

                        <Button variant="outline" size="lg" asChild>
                            <a href="https://github.com/SantiagoIvan" target="_blank">
                                {t("hero.projectsCta")}
                            </a>
                        </Button>
                    </div>
                </div>

                {/* Visual */}
                <div className="hidden md:flex justify-center animate-in zoom-in-95 duration-700 delay-300">
                    <div className="relative h-64 w-64 overflow-hidden rounded-full bg-linear-to-br from-primary/30 to-primary/10">
                        <Image
                            src="/foto-selfie.jpg"
                            alt="Foto de perfil"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

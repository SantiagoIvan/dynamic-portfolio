"use client";

import { useMemo, useState } from "react";
import { RepoDetail } from "@/lib/types/RepoDetail";
import { LanguageFilter } from "@/components/LanguageFilter";
import { ProjectsList } from "@/components/ProjectsList";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

interface Props {
    projects: RepoDetail[];
}

export default function Projects({ projects }: Props) {
    const { t } = useLanguage();
    const [selectedLanguage, setSelectedLanguage] = useState<string>("starred");

    const languages = useMemo(() => {
        const set = new Set<string>();
        projects.forEach(p =>
            Object.keys(p.languages).forEach(l => set.add(l))
        );
        return Array.from(set).sort();
    }, [projects]);

    const filteredProjects = useMemo(() => {
        if (!selectedLanguage || selectedLanguage === "all") return projects;
        if(selectedLanguage === "starred")
            return projects
                .filter((proj: RepoDetail) => proj.stars > 0)
                .sort(
                    (a: RepoDetail, b: RepoDetail) =>
                        new Date(b.createdAt).getTime() -
                        new Date(a.createdAt).getTime()
                    );

        return projects.filter(p =>
            p.languages[selectedLanguage]
        ).sort(
            (a: RepoDetail, b: RepoDetail) =>
                new Date(b.updatedAt).getTime() -
                new Date(a.updatedAt).getTime()
        );
    }, [projects, selectedLanguage]);

    return (
        <section
            id="projects"
            className="w-full lg:max-w-[70vw] mx-auto"
        >
            <h2 className="text-3xl font-bold text-center mb-12">
                {t("projects.title")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8">
                <LanguageFilter
                    languages={languages}
                    selected={selectedLanguage}
                    onSelect={setSelectedLanguage}
                    placeholder={t("projects.filterPlaceholder")}
                    allLabel={t("projects.all")}
                    starredLabel={t("projects.starred")}
                />

                <ProjectsList
                    projects={filteredProjects}
                    emptyMessage={t("projects.empty")}
                    viewOnGithubLabel={t("projects.viewOnGithub")}
                />
            </div>
        </section>
    );
}

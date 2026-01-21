"use client";

import { useMemo, useState } from "react";
import { RepoDetail } from "@/lib/types/RepoDetail";
import { LanguageFilter } from "@/components/LanguageFilter";
import { ProjectsList } from "@/components/ProjectsList";

interface Props {
    projects: RepoDetail[];
}

export default function Projects({ projects }: Props) {
    const [selectedLanguage, setSelectedLanguage] = useState<string>("all");

    const languages = useMemo(() => {
        const set = new Set<string>();
        projects.forEach(p =>
            Object.keys(p.languages).forEach(l => set.add(l))
        );
        return Array.from(set).sort();
    }, [projects]);

    const filteredProjects = useMemo(() => {
        if (!selectedLanguage || selectedLanguage === "all") return projects;
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
            className="w-full max-w-6xl mx-auto"
        >
            <h2 className="text-3xl font-bold text-center mb-12">
                Proyectos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8">
                <LanguageFilter
                    languages={languages}
                    selected={selectedLanguage}
                    onSelect={setSelectedLanguage}
                />

                <ProjectsList projects={filteredProjects} />
            </div>
        </section>
    );
}

import { RepoDetail } from "@/lib/types/RepoDetail";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ProjectCard } from "@/components/ProjectCard";

interface Props {
    projects: RepoDetail[];
    emptyMessage?: string;
    viewOnGithubLabel?: string;
}

export function ProjectsList({
    projects,
    emptyMessage = "No hay proyectos para este lenguaje.",
    viewOnGithubLabel = "Ver en GitHub",
}: Props) {
    return (
        <ScrollArea className="h-125 pr-4">
            <div className="space-y-4">
                {projects.length === 0 && (
                    <p className="text-muted-foreground text-sm">
                        {emptyMessage}
                    </p>
                )}

                {projects.map(project => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        viewOnGithubLabel={viewOnGithubLabel}
                    />
                ))}
            </div>
        </ScrollArea>
    );
}

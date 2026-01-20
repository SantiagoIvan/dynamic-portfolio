import { RepoDetail } from "@/lib/types/RepoDetail";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ProjectCard } from "@/components/ProjectCard";

interface Props {
    projects: RepoDetail[];
}

export function ProjectsList({ projects }: Props) {
    return (
        <ScrollArea className="h-125 pr-4">
            <div className="space-y-4">
                {projects.length === 0 && (
                    <p className="text-muted-foreground text-sm">
                        No hay proyectos para este lenguaje.
                    </p>
                )}

                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </ScrollArea>
    );
}

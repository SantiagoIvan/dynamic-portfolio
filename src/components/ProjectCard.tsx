import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RepoDetail } from "@/lib/types/RepoDetail";
import { Star } from "lucide-react";

interface Props {
    project: RepoDetail;
}

export function ProjectCard({ project }: Props) {
    return (
        <Card className="relative">
            <CardHeader>
                {project.stars > 0 && (
                    <div
                        className="
                        absolute
                        right-3
                        top-3
                        flex
                        items-center
                        gap-1
                        rounded-md
                        bg-background
                        px-2
                        py-1
                        text-xs
                        text-yellow-500
                        backdrop-blur
                      "
                        title={`${project.stars} estrellas`}
                    >
                        <Star className="h-4 w-4 fill-yellow-500" />
                    </div>
                )}
                <CardTitle className="flex justify-between items-center">
                    {project.name}
                    {project.private && (
                        <Badge variant="secondary">Privado</Badge>
                    )}
                </CardTitle>
            </CardHeader>

            <CardContent className="space-y-3">
                {project.description && (
                    <p className="text-sm text-muted-foreground">
                        {project.description}
                    </p>
                )}

                <div className="flex flex-wrap gap-2">
                    {Object.keys(project.languages).map(lang => (
                        <Badge key={lang} variant="outline">
                            {lang}
                        </Badge>
                    ))}
                </div>

                <a
                    href={project.htmlUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-primary underline"
                >
                    Ver en GitHub
                </a>
            </CardContent>
        </Card>
    );
}

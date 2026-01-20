import {getGithubRepos} from "@/services/github.service";

export default async function Projects(){
    const proyectos = await getGithubRepos();

    console.log("Proyectos", proyectos);
    return (
        <pre className="text-xs">
    {JSON.stringify(proyectos, null, 2)}
  </pre>
    );
}
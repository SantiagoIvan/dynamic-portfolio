import {parseGithubRepo} from "@/lib/mappers/github";
import {GithubDto} from "@/lib/types/GithubDto";
import {RepoDetail} from "@/lib/types/RepoDetail";

const username = "SantiagoIvan"

export async function getGithubRepos(): Promise<RepoDetail[]> {
    try{
        const res = await fetch(
            `https://api.github.com/users/${username}/repos?per_page=100&page=1`,
            {
                headers: {
                    Accept: "application/vnd.github+json",
                },
                next: {
                    revalidate: 3600, // 1 hora
                },
            }
        );
        if (!res.ok) {
            throw new Error("Error fetching GitHub repos");
        }

        const data = await res.json();

        // Por cada repo obtener lista de lenguajes: { "language": number of lines, ... }
        return await Promise.all(data.map(async (repo: GithubDto) => {
            const languages = await getGithubRepoLanguages(repo.name);
            return parseGithubRepo(repo, languages)
        }))
    }catch(error){
        console.log(error);
        return []
    }
}

async function getGithubRepoLanguages(repoName: string) {
    const res = await fetch(
        `https://api.github.com/repos/${username}/${repoName}/languages`,
        {
            headers: {
                Accept: "application/vnd.github+json",
            },
            next: {
                revalidate: 3600, // 1 hora
            },
        }
    );

    if (!res.ok) {
        throw new Error("Error fetching GitHub repos");
    }

    return res.json();
}

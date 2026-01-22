import {parseGithubRepo} from "@/lib/mappers/github";
import {GithubDto} from "@/lib/types/GithubDto";
import {RepoDetail} from "@/lib/types/RepoDetail";

const username = "SantiagoIvan"
const FILTER_KEYWORDS = ["test", "example", "practice"];
const FILTER_LANGUAGES = ["hlsl", "makefile", "plpgsql", "shaderlab", "procfile"];

export async function getGithubRepos(): Promise<RepoDetail[]> {
    try{
        const res = await fetch(
            `https://api.github.com/users/${username}/repos?per_page=100&page=1`,
            {
                cache: "no-cache",
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

        const data: GithubDto[] = await res.json();

        const filteredRepos = data.filter((repo: GithubDto) =>
            !FILTER_KEYWORDS.some(keyword =>
                repo.name.toLowerCase().includes(keyword)
            ) && repo.description
        );

        // Por cada repo obtener lista de lenguajes: { "language": number of lines, ... }
        return await Promise.all(filteredRepos.map(async (repo: GithubDto) => {
            const languages = await getGithubRepoLanguages(repo.name);
            return parseGithubRepo(repo, languages)
        }))
    }catch(error){
        console.log(error);
        return []
    }
}

async function getGithubRepoLanguages(repoName: string): Promise<Record<string,number>> {
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

    const data = await res.json();

    return Object.entries(data).reduce<Record<string, number>>(
        (acc, [language, lines]) => {
            if (!FILTER_LANGUAGES.some(lang => lang.toLowerCase() === language.toLowerCase())) {
                if (typeof lines === "number") {
                    acc[language] = lines;
                }
            }
            return acc;
        },
        {}
    );
}

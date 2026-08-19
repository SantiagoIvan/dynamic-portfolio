import {parseGithubRepo} from "@/lib/mappers/github";
import {GithubDto} from "@/lib/types/GithubDto";
import {RepoDetail} from "@/lib/types/RepoDetail";
import {translateEsToEn} from "@/lib/translate";

const username = "SantiagoIvan"
const FILTER_KEYWORDS = ["test", "example", "practice"];
const WHITE_LIST_LANGUAGES = ["C", "C++", "C#", "Kotlin", "Dockerfile", "Python", "Java", "Javascript", "Solidity", "SQL", "T-SQL", "TSQL", "Jupyter Notebook", "Typescript"];

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

        const data: GithubDto[] = await res.json();

        const filteredRepos = data.filter((repo: GithubDto) =>
            !FILTER_KEYWORDS.some(keyword =>
                repo.name.toLowerCase().includes(keyword)
            )
        );

        // Por cada repo obtener lista de lenguajes: { "language": number of lines, ... }
        // y la traduccion al ingles de la descripcion (para el toggle de idioma).
        return await Promise.all(filteredRepos.map(async (repo: GithubDto) => {
            const [languages, descriptionEn] = await Promise.all([
                getGithubRepoLanguages(repo.name),
                translateEsToEn(repo.description),
            ]);
            return parseGithubRepo(repo, languages, descriptionEn)
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
            if (WHITE_LIST_LANGUAGES.some(lang => lang.toLowerCase() === language.toLowerCase())) {
                if (typeof lines === "number") {
                    acc[language] = lines;
                }
            }
            return acc;
        },
        {}
    );
}

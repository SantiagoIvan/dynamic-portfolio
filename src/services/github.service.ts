const username = "SantiagoIvan"

export async function getGithubRepos() {
    const res = await fetch(
        `https://api.github.com/users/${username}/repos`,
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
    const updatedRepos = data.map(async (repo: any) => {
        const languagesResponse = await getGithubRepoLanguages(repo.name);
        const languages = await languagesResponse.json()
        repo.languages = languages;
        return repo
    })

    return updatedRepos;
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

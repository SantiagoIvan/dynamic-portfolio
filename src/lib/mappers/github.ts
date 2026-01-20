import {GithubDto} from "@/lib/types/GithubDto";
import {RepoDetail} from "@/lib/types/RepoDetail";

export function parseGithubRepo(
    repo: GithubDto,
    languages: Record<string, number>
): RepoDetail {
    return {
        id: repo.id,
        name: repo.name,
        private: repo.private,
        htmlUrl: repo.html_url,
        description: repo.description,
        createdAt: repo.created_at,
        updatedAt: repo.updated_at,
        languages,
    };
}
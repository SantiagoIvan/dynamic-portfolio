export interface GithubDto {
    id: number;
    name: string;
    private: boolean;
    html_url: string;
    description: string | null;
    created_at: string;
    updated_at: string;
    stargazers_count: number;
}

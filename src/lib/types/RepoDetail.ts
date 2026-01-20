export interface RepoDetail {
    id: number;
    name: string;
    private: boolean;
    htmlUrl: string;
    description: string | null;
    createdAt: string;
    updatedAt: string;
    languages: Record<string, number>;
}

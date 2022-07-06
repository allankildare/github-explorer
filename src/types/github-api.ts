interface RepositoryOwner {
    avatar_url: string
    html_url: string
    id: number
    login: string
    repos_url: string
    type: 'User' | 'Organization' | 'Enterprise'
}

export interface Repository {
    default_branch: string
    description: string
    disabled: boolean
    fork: boolean
    full_name: string
    html_url: string
    id: number
    language: string
    name: string
    owner: RepositoryOwner
    private: boolean
    pushed_at: Date
    size: number
    topics: []
    url: string
    visibility: string
}

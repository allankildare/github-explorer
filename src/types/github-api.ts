type AccountTypes = 'User' | 'Organization' | 'Enterprise'

interface Author {
    id: number
    login: string
    organizations_url: string
    type: AccountTypes
    url: string
}

interface RepositoryOwner {
    avatar_url: string
    html_url: string
    id: number
    login: string
    repos_url: string
    type: AccountTypes
}

interface CommitData {
    author: {
        date: string
        email: string
        name: string
    }
    comment_count: number
    message: string
    url: string
}

export interface Commit {
    author: Author
    commit: CommitData
    html_url: string
    sha: string
    url: string
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

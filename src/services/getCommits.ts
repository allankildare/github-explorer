import { useQuery } from 'react-query'
import { apiClient } from '~/clients'
import { Commit } from '~/types'
import { COMMITS, REPOSITORIES_ENDPOINT } from './endpoints'

interface GetCommitsParams {
    commitSha?: string
    repoName?: string
    user?: string
}

export function getCommits({ user, repoName, commitSha }: GetCommitsParams) {
    const url = REPOSITORIES_ENDPOINT + `/${user}/${repoName}` + COMMITS + `?sha=${commitSha}`

    const { data, ...restQuery } = useQuery('getCommits', async () => {
        return await apiClient.get(url)
    }, {
        enabled: Boolean(user && repoName && commitSha)
    })

    const response = data?.data as Commit[]

    return { data: response, ...restQuery }
}

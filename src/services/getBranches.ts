import { useQuery } from 'react-query'
import { apiClient } from '~/clients'
import { Branch } from '~/types'
import { BRANCHES, REPOSITORIES_ENDPOINT } from './endpoints'

export function getBranches({ user, repoName }: { user?: string, repoName?: string }) {
    const url = REPOSITORIES_ENDPOINT + `/${user}/${repoName}` + BRANCHES

    const { data, ...restQuery } = useQuery('getBranches', async () => {
        return await apiClient.get(url)
    }, {
        enabled: Boolean(user && repoName)
    })

    const response = data?.data as Branch[]

    return { data: response, ...restQuery }
}

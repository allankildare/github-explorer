import { useQuery } from 'react-query'
import { apiClient } from '~/clients'
import { BRANCHES, REPOSITORIES_ENDPOINT } from './endpoints'

export function getBranches({ user, repoName, enabled }: { user: string, repoName: string, enabled: boolean}) {
    const url = REPOSITORIES_ENDPOINT + `/${user}/${repoName}` + BRANCHES

    const { data, ...restQuery } = useQuery('getBranches', async () => {
        return await apiClient.get(url)
    }, {
        enabled: enabled
    })

    const response = data?.data

    return { data: response, ...restQuery }
}
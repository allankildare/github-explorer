import { useQuery } from 'react-query'
import { apiClient } from '~/clients'
import { Repository } from '~/types'
import { USERS_ENDPOINT } from './endpoints'

export function getRepos(user?: string) {
    const url = `${USERS_ENDPOINT}/${user}` + '/repos'

    const { data, ...restQuery } = useQuery('getRepos', async () => {
        return await apiClient.get(url)
    }, {
        enabled: Boolean(user)
    })

    const response = data?.data as Repository[]

    return { data: response, ...restQuery }
}

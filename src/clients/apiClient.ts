import axios from 'axios'
import { GITHUB_API_ENDPOINT } from '~/services/endpoints'

export const apiClient = axios.create({
    baseURL: GITHUB_API_ENDPOINT,
    headers: {
        'Content-type': 'application/json'
    }
})
import axios from 'axios'
import authStorage from './authStorage'

function getAuthorizationHeaderValue(token: string | null): string {
  return token ? `Bearer ${token}` : ''
}

function createApiClient(authStorage) {
  const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
  })

  api.interceptors.request.use((requestConfig) => {
    const token = authStorage.getAccessToken()
    // eslint-disable-next-line no-param-reassign
    requestConfig.headers.Authorization = getAuthorizationHeaderValue(token)
    return Promise.resolve(requestConfig)
  })
  return api
}

export default createApiClient(authStorage)

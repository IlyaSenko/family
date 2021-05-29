import { useEffect, useState } from 'react'
import authStorage from 'api/authStorage'

export function useAccessToken(): string | null {
  const [accessToken, setAccessToken] = useState(authStorage.getAccessToken())

  useEffect(
    () => authStorage.subscribe((newAccessToken) => setAccessToken(newAccessToken)),
    [authStorage, setAccessToken],
  )

  return accessToken
}

export function useIsAuthenticated(): boolean {
  const accessToken = useAccessToken()
  return Boolean(accessToken)
}

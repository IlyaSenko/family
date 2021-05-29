import { applyToStorage } from 'utils/storage'

type TListener = (accessToken: string | null) => void
const ACCESS_TOKEN_STORAGE_KEY = 'accessToken'

class AuthStorage {
  private accessToken: string | null

  private listeners: TListener[]

  constructor() {
    this.accessToken = applyToStorage(
      (storage) => storage.getItem(ACCESS_TOKEN_STORAGE_KEY) || null,
    )
    this.listeners = []
  }

  getAccessToken = (): string | null => this.accessToken

  private update(accessToken: string | null): void {
    if (this.accessToken === accessToken) {
      return
    }
    this.accessToken = accessToken
    applyToStorage((storage) => {
      if (accessToken) {
        storage.setItem(ACCESS_TOKEN_STORAGE_KEY, accessToken)
      } else {
        storage.removeItem(ACCESS_TOKEN_STORAGE_KEY)
      }
    })
    this.listeners.forEach((listener) => listener(accessToken))
  }

  setAuth(accessToken: string): void {
    this.update(accessToken)
  }

  logout(): void {
    this.update(null)
  }

  subscribe(listener: TListener): () => void {
    this.listeners.push(listener)
    return () => {
      const ind = this.listeners.indexOf(listener)
      if (ind < 0) return
      this.listeners.splice(ind, 1)
    }
  }
}

export default new AuthStorage()

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IStorage {
  setItem: (key: string, value: string) => void
  getItem: (key: string) => string | null
  removeItem: (key: string) => void
}

type StorageCallback<T = any> = (storage: IStorage) => T

// eslint-disable-next-line
function applyToStorage<R = void>(callback: StorageCallback<R>): R {
  return callback(window.localStorage)
}

export { applyToStorage }

import { configureStore } from '@reduxjs/toolkit'
import userDataReducer from './userData'

export const store = configureStore({
  reducer: {
    userData: userDataReducer,
  },
})

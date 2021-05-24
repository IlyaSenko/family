import { configureStore } from '@reduxjs/toolkit'
import userDataReducer from './userData'
import counterReducer from '../../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    userData: userDataReducer,
  },
})

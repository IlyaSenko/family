import { createSlice } from '@reduxjs/toolkit'
import authStorage from 'api/authStorage'
import api from 'api'
import { ILoginData } from './types'

export const userData = createSlice({
  name: 'userData',
  initialState: {
    isAuthorized: !!authStorage.getAccessToken(),
  },
  reducers: {
    login: (state) => {
      state.isAuthorized = true
    },
  },
})

export const { login } = userData.actions

export const loginThunk = (authData: ILoginData) => async (dispatch) => {
  const response = await api.post('/auth/login', authData)
  authStorage.setAuth(response.data.data.access_token)
  dispatch(login())
}

export default userData.reducer

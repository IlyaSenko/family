import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from 'api'

export const userData = createSlice({
  name: 'userData',
  initialState: {},
  reducers: {},
})

export const loginThunk = createAsyncThunk('userData/login', async (authData) => {
  const response = await api.post('/login', authData)
  return response.data
})

export default userData.reducer

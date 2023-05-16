import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { LoginType } from 'api/types'

const initialState: LoginType = {
  idInstance: '',
  apiTokenInstance: '',
}

const slice = createSlice({
  name: 'auth/slice',
  initialState,
  reducers: {
    setLoginData: (state, action: PayloadAction<LoginType>) => {
      state.idInstance = action.payload.idInstance
      state.apiTokenInstance = action.payload.apiTokenInstance
    },
  },
})

export const authReducer = slice.reducer
export const { setLoginData } = slice.actions

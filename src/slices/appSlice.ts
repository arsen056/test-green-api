import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { API } from 'api/api'
import { GetStateInstanceType, StateInstanceType } from 'api/types'
import { RootStateType } from 'app/store'

type AppStateType = { error: string; qrCode: string } & GetStateInstanceType

const initialState: AppStateType = {
  stateInstance: 'notAuthorized',
  error: '',
  qrCode: '',
}

const slice = createSlice({
  name: 'app/slice',
  initialState,
  reducers: {
    setStateInstance: (state, action: PayloadAction<StateInstanceType>) => {
      state.stateInstance = action.payload
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
    setQrCode: (state, action: PayloadAction<string>) => {
      state.qrCode = action.payload
    },
  },
})

export const getStateInstance = createAsyncThunk('news', async (_, { dispatch, getState }) => {
  const { auth } = getState() as RootStateType
  const LoginData = { idInstance: auth.idInstance, apiTokenInstance: auth.apiTokenInstance }

  try {
    if (!auth.idInstance || !auth.apiTokenInstance) {
      dispatch(setStateInstance('notAuthorized'))

      return
    }

    const response = await API.getStateInstance(LoginData)

    dispatch(setStateInstance(response.stateInstance))
  } catch (e) {
    console.log(e)
  }
})

export const fetchQr = createAsyncThunk('news', async (_, { getState, dispatch }) => {
  const { auth } = getState() as RootStateType

  if (auth.idInstance && auth.apiTokenInstance) {
    const ws = new WebSocket(`wss://api.green-api.com/waInstance${auth.idInstance}/scanqrcode/${auth.apiTokenInstance}`)

    ws.addEventListener('message', (event) => {
      const data = JSON.parse(event.data)

      if (data.type === 'qrCode') {
        dispatch(setQrCode(data.message))
      }

      if (data.type === 'alreadyLogged') {
        dispatch(setStateInstance('authorized'))
      }
    })

    ws.addEventListener('error', () => {
      dispatch(setError('Проверьте введенные данные'))
    })
  }

  const LoginData = { idInstance: auth.idInstance, apiTokenInstance: auth.apiTokenInstance }

  try {
    await API.getQR(LoginData)
  } catch (e) {
    console.log(e)
  }
})

export const appReducer = slice.reducer
export const { setStateInstance, setError, setQrCode } = slice.actions

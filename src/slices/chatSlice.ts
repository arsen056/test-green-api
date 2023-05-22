import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { API } from 'api/api'
import { ResponseGetChatHistory } from 'api/types'
import { RootStateType } from 'app/store'

type StateType = {
  existsWhatsapp: boolean
  chatID: string
  chatHistory: ResponseGetChatHistory[]
  error: string
}

const initialState: StateType = {
  existsWhatsapp: false,
  chatID: '',
  chatHistory: [],
  error: '',
}

const slice = createSlice({
  name: 'chat/slice',
  initialState,
  reducers: {
    setChatID: (state, action: PayloadAction<string>) => {
      state.chatID = action.payload + state.chatID
    },
    setExistsWhatsapp: (state, action: PayloadAction<boolean>) => {
      state.existsWhatsapp = action.payload
    },
    setErrorChats: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
    setChatHistory: (state, action: PayloadAction<ResponseGetChatHistory[]>) => {
      console.log('setChatHist')
      state.chatHistory = action.payload.reverse()
    },
  },
})

export const getExists = createAsyncThunk('existsWhatsapp', async (chatID: string, { dispatch, getState }) => {
  const { auth } = getState() as RootStateType
  const LoginData = { idInstance: auth.idInstance, apiTokenInstance: auth.apiTokenInstance, phoneNumber: chatID }

  try {
    const response = await API.getExistsWhatsapp(LoginData)

    if (response.existsWhatsapp) {
      dispatch(setErrorChats(''))
      dispatch(setExistsWhatsapp(true))
      dispatch(setChatID(chatID))
      dispatch(getChatHistory())

      return
    }

    dispatch(setErrorChats('У этого номера отсутвует whatsapp'))
  } catch (e) {
    dispatch(setErrorChats('У этого номера отсутвует whatsapp'))
  }
})

export const getChatHistory = createAsyncThunk('getChatHistory', async (_, { dispatch, getState }) => {
  const { auth, chats } = getState() as RootStateType
  const LoginData = {
    idInstance: auth.idInstance,
    apiTokenInstance: auth.apiTokenInstance,
    chatId: chats.chatID,
    count: 15,
  }

  try {
    const response = await API.getChatHistory(LoginData)

    dispatch(setChatHistory(response))
  } catch (e) {
    console.log(e)
  }
})

export const sendMessage = createAsyncThunk('sendMessage', async (message: string, { dispatch, getState }) => {
  const { auth, chats } = getState() as RootStateType
  const LoginData = {
    idInstance: auth.idInstance,
    apiTokenInstance: auth.apiTokenInstance,
    chatId: chats.chatID,
    message,
  }

  try {
    await API.sendMessage(LoginData)

    setTimeout(() => {
      dispatch(getChatHistory())
      // eslint-disable-next-line no-magic-numbers
    }, 1000)
  } catch (e) {
    console.log(e)
  }
})

export const chatReducer = slice.reducer
export const { setExistsWhatsapp, setChatID, setErrorChats, setChatHistory } = slice.actions

import axios from 'axios'

import {
  ExistsWhatsappResponseType,
  ExistsWhatsappType,
  GetHistoryChatType,
  GetStateInstanceType,
  LoginType,
  QrResponseType,
  ResponseGetChatHistory,
  ResponseSendMessage,
  SendMessageType,
} from './types'

const instance = axios.create({ baseURL: 'https://api.green-api.com/' })

export const API = {
  getQR(data: LoginType) {
    return instance
      .get<QrResponseType>(`waInstance${data.idInstance}/qr/${data.apiTokenInstance}`)
      .then((res) => res.data)
  },
  getStateInstance(data: LoginType) {
    return instance
      .get<GetStateInstanceType>(`waInstance${data.idInstance}/getStateInstance/${data.apiTokenInstance}`)
      .then((res) => res.data)
  },
  getExistsWhatsapp(data: LoginType & ExistsWhatsappType) {
    return instance
      .post<ExistsWhatsappResponseType>(`waInstance${data.idInstance}/checkWhatsapp/${data.apiTokenInstance}`, {
        phoneNumber: data.phoneNumber,
      })
      .then((res) => res.data)
  },
  getChatHistory(data: LoginType & GetHistoryChatType) {
    const payload: GetHistoryChatType = { chatId: `${data.chatId}@c.us`, count: data.count }

    return instance
      .post<ResponseGetChatHistory[]>(`waInstance${data.idInstance}/getChatHistory/${data.apiTokenInstance}`, payload)
      .then((res) => res.data)
  },

  sendMessage(data: LoginType & SendMessageType) {
    const payload: SendMessageType = { chatId: `${data.chatId}@c.us`, message: data.message }

    return instance
      .post<ResponseSendMessage>(`waInstance${data.idInstance}/SendMessage/${data.apiTokenInstance}`, payload)
      .then((res) => res.data)
  },
}

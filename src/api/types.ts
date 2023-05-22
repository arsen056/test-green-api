export type LoginType = {
  idInstance: string
  apiTokenInstance: string
}

export type GetHistoryChatType = {
  chatId: string
  count: number
}

export type SendMessageType = {
  chatId: string
  message: string
}

export type ResponseSendMessage = {
  idMessage: string
}

export type ResponseGetChatHistory = {
  idMessage: string
  timestamp: number
  statusMessage: string
  typeMessage: string
  chatId: string
  textMessage: string
  senderId?: string
}

export type ExistsWhatsappType = {
  phoneNumber: string
}

export type ExistsWhatsappResponseType = {
  existsWhatsapp: boolean
}

export type QrResponseType = {
  type: string
  message: string
}

export type GetStateInstanceType = {
  stateInstance: StateInstanceType
}

export type StateInstanceType = 'notAuthorized' | 'authorized' | 'blocked' | 'sleepMode' | 'starting'

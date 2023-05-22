import { RootStateType } from 'app/store'

export const selectChatHistory = (state: RootStateType) => state.chats.chatHistory

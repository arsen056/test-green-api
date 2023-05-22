import { RootStateType } from 'app/store'

export const selectChatId = (state: RootStateType) => state.chats.chatID

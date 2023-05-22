import { RootStateType } from 'app/store'

export const selectExistsWhatsapp = (state: RootStateType): boolean => state.chats.existsWhatsapp

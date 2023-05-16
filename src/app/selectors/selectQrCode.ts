import { RootStateType } from 'app/store'

export const selectQrCode = (state: RootStateType): string => state.app.qrCode

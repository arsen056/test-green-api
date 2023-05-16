import { RootStateType } from 'app/store'

export const selectError = (state: RootStateType): string => state.app.error

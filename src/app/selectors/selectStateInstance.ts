import { StateInstanceType } from 'api/types'
import { RootStateType } from 'app/store'

export const selectStateInstance = (state: RootStateType): StateInstanceType => state.app.stateInstance

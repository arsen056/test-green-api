export type LoginType = {
  idInstance: string
  apiTokenInstance: string
}

export type QrResponseType = {
  type: string
  message: string
}

export type GetStateInstanceType = {
  stateInstance: StateInstanceType
}

export type StateInstanceType = 'notAuthorized' | 'authorized' | 'blocked' | 'sleepMode' | 'starting'

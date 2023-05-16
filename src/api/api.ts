import axios from 'axios'

import { GetStateInstanceType, LoginType, QrResponseType } from './types'

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
}

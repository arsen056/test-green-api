import React from 'react'

import { useSelector } from 'react-redux'

import { selectQrCode } from 'app/selectors/selectQrCode'
import { Login } from 'components/login'
import { ShowQr } from 'components/showQr'

export const Auth = () => {
  const qrCode = useSelector(selectQrCode)

  return qrCode ? <ShowQr qrCode={qrCode} /> : <Login />
}

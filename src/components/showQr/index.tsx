import React, { FC } from 'react'

type Props = {
  qrCode: string
}

export const ShowQr: FC<Props> = ({ qrCode }) => {
  return <img src={`data:image/png;base64,${qrCode}`} alt='qrCode' />
}

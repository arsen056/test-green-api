import React, { FC } from 'react'

type Props = { message: string; type?: 'messageClient' | 'messageManager' }

export const Message: FC<Props> = ({ message, type = 'messageClient' }) => {
  return (
    <div className='messageInChat'>
      <div className={type}>{message}</div>
    </div>
  )
}

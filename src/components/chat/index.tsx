import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { selectChatHistory } from 'app/selectors/selectChatHistory'
import { selectChatId } from 'app/selectors/selectChatId'
import { Message } from 'components/message'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { getExists, sendMessage } from 'slices/chatSlice'

export const Chat = () => {
  const dispatch = useAppDispatch()
  const { number } = useParams()
  const history = useSelector(selectChatHistory)

  console.log(history)
  const chatId = useSelector(selectChatId)
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    if (!chatId) {
      dispatch(getExists(number as string))
    }
  }, [chatId])

  return (
    <div className='messages'>
      {history.map((message) => (
        <Message
          key={message.idMessage}
          type={message.senderId ? 'messageClient' : 'messageManager'}
          message={message.textMessage}
        />
      ))}
      <div>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type='text'
          placeholder='Введите сообщение'
        />
        <button onClick={() => dispatch(sendMessage(message))} type='button'>
          Отправить
        </button>
      </div>
    </div>
  )
}

import React, { useState } from 'react'

import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { selectChatError } from 'app/selectors/selectError'
import { selectExistsWhatsapp } from 'app/selectors/selectExistsWhatsapp'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { getExists } from 'slices/chatSlice'

export const EnterNumber = () => {
  const dispatch = useAppDispatch()
  const [number, setNumber] = useState<string>('')

  const error = useSelector(selectChatError)
  const existsWhatsapp = useSelector(selectExistsWhatsapp)

  const openChat = () => dispatch(getExists(number))

  return !existsWhatsapp ? (
    <div>
      <label>
        Введите номер
        <input
          id='number'
          type='text'
          placeholder='999 999 99 99'
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button type='button' onClick={openChat}>
          Открыть чат
        </button>
        <div>{error}</div>
      </label>
    </div>
  ) : (
    <Navigate to={number} />
  )
}

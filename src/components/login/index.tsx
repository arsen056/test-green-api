import React, { FormEvent, useState } from 'react'

import { useSelector } from 'react-redux'

import { selectError } from 'app/selectors/selectError'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { fetchQr } from 'slices/appSlice'
import { setLoginData } from 'slices/authSlice'

export const Login = () => {
  const dispatch = useAppDispatch()
  const [idInstance, setIdInstance] = useState<string>('')
  const [apiTokenInstance, setApiTokenInstance] = useState<string>('')

  const error = useSelector(selectError)

  const getQr = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(setLoginData({ idInstance, apiTokenInstance }))
    dispatch(fetchQr())
  }

  return (
    <form onSubmit={getQr}>
      <input value={idInstance} onChange={(e) => setIdInstance(e.target.value)} type='text' placeholder='id instance' />
      <input
        value={apiTokenInstance}
        onChange={(e) => setApiTokenInstance(e.target.value)}
        type='text'
        placeholder='token'
      />
      <button type='submit'>Получить QR для входа</button>
      <div>{error}</div>
    </form>
  )
}

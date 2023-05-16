import React, { useEffect } from 'react'

import { BrowserRouter } from 'react-router-dom'

import { AppRouter } from 'components/appRouter'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { getStateInstance } from 'slices/appSlice'

const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getStateInstance())
  }, [])

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App

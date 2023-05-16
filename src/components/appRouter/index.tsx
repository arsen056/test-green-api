import React from 'react'

import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'

import { selectStateInstance } from 'app/selectors/selectStateInstance'
import { privateRoutes, publicRoutes } from 'components/appRouter/routes'

export const AppRouter = () => {
  const stateInstance = useSelector(selectStateInstance)

  return stateInstance === 'authorized' ? (
    <Routes>
      <Route path='/*' element={<Navigate to='/chat' />} />
      {privateRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  ) : (
    <Routes>
      <Route path='/*' element={<Navigate to='/login' />} />
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  )
}

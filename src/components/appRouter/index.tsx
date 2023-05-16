import React from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'

import { privateRoutes, publicRoutes } from 'utils/routes'

export const AppRouter = () => {
  const user = false

  return user ? (
    <Routes>
      <Route path='/' element={<Navigate to='/chat' />} />
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

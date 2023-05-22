import React from 'react'

import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import { selectStateInstance } from 'app/selectors/selectStateInstance'
import { privateRoutes, publicRoutes } from 'components/appRouter/routes'

export const AppRouter = () => {
  const stateInstance = useSelector(selectStateInstance)

  return stateInstance === 'authorized' ? (
    <Routes>
      {privateRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path='/*' element={<h2>404</h2>} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path='/*' element={<h2>404</h2>} />
    </Routes>
  )
}

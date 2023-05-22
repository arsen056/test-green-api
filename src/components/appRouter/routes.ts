import { Auth } from 'components/auth'
import { Chat } from 'components/chat'
import { EnterNumber } from 'components/enterNumber'

export const publicRoutes = [
  {
    path: '/',
    Component: Auth,
  },
]

export const privateRoutes = [
  {
    path: '/',
    Component: EnterNumber,
  },
  {
    path: '/:number',
    Component: Chat,
  },
]

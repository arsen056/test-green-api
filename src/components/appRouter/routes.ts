import { Auth } from 'components/auth'
import { Chat } from 'components/chat'

export const publicRoutes = [
  {
    path: '/login',
    Component: Auth,
  },
]

export const privateRoutes = [
  {
    path: '/chat',
    Component: Chat,
  },
]

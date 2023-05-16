import { Chat } from 'components/chat'
import { Login } from 'components/login'

export const publicRoutes = [
  {
    path: '/login',
    Component: Login,
  },
]

export const privateRoutes = [
  {
    path: '/chat',
    Component: Chat,
  },
]

import { useDispatch } from 'react-redux'

import { store } from 'app/store'

export type UseAppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<UseAppDispatch>()

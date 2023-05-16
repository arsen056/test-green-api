import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

import { appReducer } from 'slices/appSlice'
import { authReducer } from 'slices/authSlice'

const persistConfig = {
  key: 'auth',
  storage,
}

const rootReducer = combineReducers({ app: appReducer, auth: persistReducer(persistConfig, authReducer) })

export type RootStateType = ReturnType<typeof rootReducer>

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk),
})

export const persistor = persistStore(store)

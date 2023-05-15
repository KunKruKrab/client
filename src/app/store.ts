import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import { persistReducer, persistStore } from 'redux-persist'
import { encryptTransform } from 'redux-persist-transform-encrypt'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  transforms: [
    encryptTransform({
      secretKey: 'awayfromus-ultimate-secret-key-in-the-universe',
      onError: function (error: Error) {
        console.log(error)
      },
    }),
  ],
}

const rootReducer = combineReducers({
  user: userReducer,
})

const presistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  reducer: presistedReducer,
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

import { configureStore } from '@reduxjs/toolkit'
import miniaturaReducer from './slices/miniatura/reducer'

export const store = configureStore({
  reducer: {
    miniatura: miniaturaReducer
  },
})
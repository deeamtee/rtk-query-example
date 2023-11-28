import { configureStore } from '@reduxjs/toolkit'
import { cardsApi } from '../services/cards/cards'

export const store = configureStore({
  reducer: {[cardsApi.reducerPath]: cardsApi.reducer},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardsApi.middleware),
})
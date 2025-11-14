import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import cartSlice from './slices/cartSlices'

export const store = configureStore({
  reducer: {
    userDetails: userSlice,
    cartDetails: cartSlice,
  },
})
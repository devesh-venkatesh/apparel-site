import { configureStore } from "@reduxjs/toolkit"
import refreshStorage from "./middleware/refresh-storage"

import cartSlice from "./cart/cart-slice"
import userSlice from "./user/user-slice"

const store = configureStore({
  reducer: { user: userSlice.reducer, cart: cartSlice.reducer },
  middleware: [refreshStorage],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store

import { configureStore } from "@reduxjs/toolkit"
import refreshStorage from "./middleware/refresh-storage"

import cartSlice from "./cart-slice"
import userSlice from "./user-slice"

const store = configureStore({
  reducer: { user: userSlice.reducer, cart: cartSlice.reducer },
  middleware: [refreshStorage],
})

export default store

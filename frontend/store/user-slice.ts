import { createSlice } from "@reduxjs/toolkit"

const initialState = {}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
})

export const cartActions = userSlice.actions

export default userSlice

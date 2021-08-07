import { createSlice } from "@reduxjs/toolkit"
import IUser from "./user-interface"

const initialState: IUser = {}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
})

export const cartActions = userSlice.actions

export default userSlice

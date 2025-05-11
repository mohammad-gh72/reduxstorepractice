import { createSlice } from "@reduxjs/toolkit";

const initialCart = { cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {},
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;

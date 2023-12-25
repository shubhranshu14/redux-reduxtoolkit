import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const bankingSlice = createSlice({
  name: "banking",
  initialState,
  reducers: {
    moneyCredit(state, action) {
      return state + action.payload;
    },
    moneyDebited(state, action) {
      return state - action.payload;
    },
  },
});

export const { moneyCredit, moneyDebited } = bankingSlice.actions;
export default bankingSlice.reducer;

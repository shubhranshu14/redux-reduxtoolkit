import { configureStore } from "@reduxjs/toolkit";
import bankingReducer from "../features/Banking/bankingSlice";

export default configureStore({
  reducer: {
    bank: bankingReducer,
  },
});

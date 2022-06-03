import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "../Slices/countrySlice";

const store = configureStore({
  reducer: {
    country: countrySlice,
  },
});

export default store;

import { createSlice } from "@reduxjs/toolkit";

const countrySlice = createSlice({
  name: "country",
  initialState: {
    data: [],
  },

  reducers: {
    fillTextAction: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const { fillTextAction } = countrySlice.actions;

const countryReducer = countrySlice.reducer;
export default countryReducer;

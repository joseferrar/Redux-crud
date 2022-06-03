import { createSlice } from "@reduxjs/toolkit";

const countrySlice = createSlice({
  name: "country",
  initialState: {
    fillText: [],
  },

  reducers: {
    fillTextAction: (state, { payload }) => {
      state.fillText = payload;
    },
  },
});

export const { fillTextAction } = countrySlice.actions;

const countryReducer = countrySlice.reducer;
export default countryReducer;

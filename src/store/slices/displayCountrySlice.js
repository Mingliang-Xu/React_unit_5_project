import { createSlice } from "@reduxjs/toolkit";

import initialCountry from "../../assets/initialCountry";

const initialState = {
  value: initialCountry,
};

export const displayCountrySlice = createSlice({
  name: "displayCountry",
  initialState: initialState,
  reducers: {
    setDisplayCuntry(state, action) {
      state.value = action.payload;
    },
    deleteDisplayCountry(state, action) {
      state.value = null;
    },
  },
});

export const displayCountryActions = displayCountrySlice.actions;
export const selectDispaly = (state) => {
  return state.displayedCountry.value;
};
export default displayCountrySlice.reducer;

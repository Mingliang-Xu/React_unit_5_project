import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [{ name: { common: "America" } }],
};

const potentialCountriesSlice = createSlice({
  name: "potentialCountries",
  initialState: initialState,
  reducers: {
    setPotentialCountries(state, action) {
      state.value = action.payload;
    },
    deletePotentialCountries(state, action) {
      state.value = null;
    },
  },
});

export const selectPotentials = (state) => {
  return state.potentialCountries.value;
};
export default potentialCountriesSlice.reducer;
export const potentialCountriesActions = potentialCountriesSlice.actions;

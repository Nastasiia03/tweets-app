import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";

const filtersInitialState = {
  status: statusFilters[0],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload.value;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

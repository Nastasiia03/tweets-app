import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./usersSlice";
import { filtersReducer } from "./filterSlice";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        filters: filtersReducer
    }
});
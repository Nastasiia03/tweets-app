import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, updateUsers} from "./operations";

const usersSlice = createSlice({
    name: "users",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: builder => 
        builder
            .addCase(fetchUsers.pending, (state, action) => {
                state.isLoading = true; 
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = [...state.items, ...action.payload]; 
                console.log(state.items)
            })
            .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
  state.error = action.payload;
            })
            .addCase(updateUsers.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(updateUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                const index = state.items.findIndex(
                user => user.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
            })
            .addCase(updateUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            })


export const usersReducer = usersSlice.reducer;
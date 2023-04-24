import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6446c151ee791e1e29082685.mockapi.io";

export const fetchUsers = createAsyncThunk(
    "users/fetchAll",
  async (_, thunkAPI) => {
    try {
        const response = await axios.get("/users");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
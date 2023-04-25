import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6446c151ee791e1e29082685.mockapi.io";

export const fetchUsers = createAsyncThunk(
    "users/fetchAll",
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/users?limit=3&page=${page}`);
      console.log(response.count)
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateUsers = createAsyncThunk(
  "users/updateUser",
  async (user, thunkAPI) => {
    try {
      const response = await axios.put(`/users/:${user.id}`, {
        followers: user.followers + 1,
        following: !user.following
      });
      console.log(response.data)
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
// import axiosInstance from "@/shared/lib/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createUser = createAsyncThunk(
  'auth/signup',
  async (credentials, thunkApi) => {
    try {
      const res = await axios.post('https://onepieceshop-production-f646.up.railway.app/api/v1/signup/register', credentials);
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error);
    }
  }
)
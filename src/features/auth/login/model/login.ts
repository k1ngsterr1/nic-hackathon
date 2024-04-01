import axiosInstance from "@/shared/lib/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface LoginCredentials {
  email_address: string;
  password: string;
}

export const login = createAsyncThunk(
  'auth/login',
  async (credentials: LoginCredentials, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post('/login', credentials);
      console.log(res.data.accessToken);
      return res.data.accessToken;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)
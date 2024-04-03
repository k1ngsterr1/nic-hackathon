import axiosInstance from "@/shared/lib/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface LoginCredentials {
  email_address: string;
  password: string;
}

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: LoginCredentials, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("api/v1/singin/token-email", credentials);
      console.log(res.data.accessToken);
      localStorage.setItem("@access-token", res.data.accessToken);
      localStorage.setItem("@refresh-token", res.data.refreshToken);
      return res.data.accessToken;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

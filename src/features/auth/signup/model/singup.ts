// import axiosInstance from "@/shared/lib/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export interface IUser {
    username: string | null,
    password: string | null,
    email: string | null,
    phone: number | null,
    name: string | null,
    lastname: string | null,
    card_number: number | null
}

export const createUser = createAsyncThunk(
  'auth/signup',
  async (credentials: IUser, thunkApi) => {
    try {
      const res = await axios.post('https://onepieceshop-production-f646.up.railway.app/api/v1/signup/register', credentials);
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error);
    }
  }
)

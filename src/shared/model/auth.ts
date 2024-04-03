import { login } from "@/features/auth/login/model/login";
import { createUser } from "@/features/auth/signup/model/singup";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface User {
  username: string;
  password: string;
  email: string;
  phone: number;
  name: string;
  lastname: string;
  card_number: number;
}

export interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(
      createUser.rejected,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload.message;
      }
    );
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export default userSlice.reducer;

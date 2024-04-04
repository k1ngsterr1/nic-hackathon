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

interface CartItem {
  id: string;
  name?: string;
  price?: string;
  photo?: string;
  quantity: number;
}

export interface UserState {
  user: User | null;
  cart: CartItem[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  cart: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addItemCard: (state, action: PayloadAction<CartItem>) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += quantity || 1;
      } else {
        state.cart.push({ id, quantity: quantity || 1 });
      }
    },
  },
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
  },
});

export const { addItemCard } = userSlice.actions;

export default userSlice.reducer;

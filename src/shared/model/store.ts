import { configureStore } from "@reduxjs/toolkit";
// import authReducer from '@/features/auth/login/model/authSlice';

const store = configureStore({
  reducer: {
  },
});

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch 


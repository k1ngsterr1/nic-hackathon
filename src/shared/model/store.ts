import { configureStore } from "@reduxjs/toolkit";
import userSlice from './auth'

const store = configureStore({
  reducer: {
    user: userSlice
  },
  devTools: true
});

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch 


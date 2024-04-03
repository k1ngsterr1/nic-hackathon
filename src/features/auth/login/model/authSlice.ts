// import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// interface AuthState {
//   isAuthenticated: boolean;
//   accessToken: string | null;
// };

// const initialState: AuthState = {
//   isAuthenticated: false,
//   accessToken: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     setAuthenticated(state, action: PayloadAction<string>) {
//       state.isAuthenticated = true;
//       state.accessToken = action.payload;
//     },
//     setUnauthenticated(state) {
//       state.isAuthenticated = false;
//       state.accessToken = null;
//     }
//   }
// })

// export const { setAuthenticated, setUnauthenticated } = authSlice.actions;
// export default authSlice.reducer;
// 
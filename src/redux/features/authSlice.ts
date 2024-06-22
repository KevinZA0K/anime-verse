import { auth } from "@/db/db";
import { createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const initialState = {
  isAuthenticated: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    signIn: (state, action) => {
      const { email, password } = action.payload;
      signInWithEmailAndPassword(auth, email, password);
    },
    signUp: (state, action) => {
      const { email, password } = action.payload;
      createUserWithEmailAndPassword(auth, email, password);
    },
    signOutReducer: (state) => {
        signOut(auth)
        state.isAuthenticated = false;
        state.user = null;
    }
  },
});

export const { setUser, signIn, signUp, signOutReducer } = authSlice.actions;

export default authSlice.reducer;

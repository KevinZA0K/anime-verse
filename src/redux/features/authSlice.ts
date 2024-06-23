import { auth, db } from "@/db/db";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addData } from "./firebaseFunctions/addData";

const initialState = {
  isAuthenticated: false,
  user: null,
};

export const signUp = createAsyncThunk(
  'auth/signUp',
  async ({email,password}:any, {rejectWithValue}) => {
     try{
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      const data = {
        email,
        lists: {},
        username: "-"
      }


      const addResult = await addData({collectionName: "user", data});
      const userEmail = userCredential.user.email;
      return userEmail;
     }catch(error:any){
      return rejectWithValue(error.message)
     }
  }
)

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
    // signUp:  async (state, action) => {
    //   const { email, password } = action.payload;
    //   createUserWithEmailAndPassword(auth, email, password);
    //   const add = await addData({collectionName:"user",data: email})
    // },
    signOutReducer: (state) => {
        signOut(auth)
        state.isAuthenticated = false;
        state.user = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state,action) => {
      console.log("todo bien")
    })
  }
});

export const { setUser, signIn,  signOutReducer } = authSlice.actions;

export default authSlice.reducer;

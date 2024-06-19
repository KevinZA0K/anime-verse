import { auth } from "@/db/db";
import { createSlice } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";

const initialState = {
    isAuthenticated: false,
    user: null
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state,action) => {
            state.user = action.payload
            state.isAuthenticated = true
        },
        signIn: (state,action) => {
            const {email, password} = action.payload
            signInWithEmailAndPassword(auth,email,password)
        }
    }
})

export const {setUser,signIn} = authSlice.actions

export default authSlice.reducer
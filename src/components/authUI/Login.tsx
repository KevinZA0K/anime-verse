"use client"
import { signIn } from '@/redux/features/authSlice'
import { useAppDispatch } from '@/redux/hooks'
import {useRouter} from "next/navigation"

import React from 'react'

export const Login = () => {

  const dispatch = useAppDispatch()

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    try{
      await dispatch(signIn({email,password}))
      
    }catch(e:any) {
      console.log(e.message)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input type='text' name='email' id='email' className='border'></input>
        <label htmlFor='email'>Password</label>
        <input type='password' name='password' id='password' className='border'></input>
        <input type='submit'></input>
    </form>
  )
}

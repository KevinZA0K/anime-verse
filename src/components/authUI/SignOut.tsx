"use client"
import { signOutReducer } from '@/redux/features/authSlice'
import { useAppDispatch } from '@/redux/hooks'
import { useRouter } from 'next/navigation'
import React from 'react'

const SignOut = () => {

    const dispatch = useAppDispatch()
    const router = useRouter()

    const handleClick = (e:any) => {
        dispatch(signOutReducer())
        router.refresh()

    }

  return (
    <button onClick={handleClick}>Sign Out</button>
  )
}

export default SignOut
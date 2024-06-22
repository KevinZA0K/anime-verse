"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import {Menu} from "lucide-react"
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/db/db'
import { setUser } from '@/redux/features/authSlice'
import AuthUser from './AuthUser'
import SignOut from '../authUI/SignOut'

export const Header = () => {
  const dispatch = useAppDispatch()
  const isAuthenticated = useAppSelector(state => state.authReducer.isAuthenticated)
  const user = useAppSelector(state => state.authReducer.user)

  useEffect(()=>{
    onAuthStateChanged(auth, currentUser =>{
      if(currentUser != null){
        dispatch(setUser(currentUser.email))
        console.log("disparado")
      } 
    })
  },[dispatch])

  return (
    <header className='flex justify-between border h-24 items-center px-12'>
    <span><Link href={"/"}>Animeverse</Link></span>
    <Menu className='md:hidden'/>
    <nav className='hidden md:block'>
      <ul className='md:flex gap-12 hidden'> 
        <li><Link href="/lists">Lists</Link></li>
        {isAuthenticated ? <Link href="/">{user}</Link>:<AuthUser />}
        <li>{isAuthenticated && <SignOut />}</li>
      </ul>
    </nav>
    </header>
  )
}

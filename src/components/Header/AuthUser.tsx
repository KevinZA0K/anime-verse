"use client"
import Link from 'next/link'
import React from 'react'

const AuthUser = () => {
  return (
    <>
        <li><Link href="/auth/login">Log In</Link></li>
        <li><Link href="/auth/register">Register</Link></li>
    </>
  )
}

export default AuthUser
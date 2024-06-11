"use client"
import React, { FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export const SearchSection = () => {
  const router = useRouter()

  const handleSubmit = (e:any) => {
    e.preventDefault()
    const query = e.target.query.value
    router.push(`search/${query}`)
  }

  return (
    <form method='GET' onSubmit={(e) => handleSubmit(e)}>
      <input type='text' className='border' name='query'/>
      <input type='submit' />
    </form>
  )
}

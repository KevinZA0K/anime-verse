"use client"
import React, { FormEvent } from 'react'
import { useRouter } from 'next/navigation'

interface Props {
  isInSearch:boolean
}

export const SearchSection = ({isInSearch}:Props) => {
  const router = useRouter()

  const handleSubmit = (e:any) => {
    e.preventDefault()
    const query = e.target.query.value
    if(isInSearch){
      router.replace(`${query}`)
    }else{
      router.push(`/search/${query}`)
    }
  }

  return (
    <form method='GET' onSubmit={(e) => handleSubmit(e)}>
      <input type='text' className='border' name='query'/>
      <input type='submit' />
    </form>
  )
}

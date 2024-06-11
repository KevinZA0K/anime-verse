"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

interface Props{
    title:string
    images:string
    mal_id:string
}

const Cards = ({title,images,mal_id}:Props) => {

    const router = useRouter()

    const handleClick = (e:any) => {
        router.push(`/anime/${mal_id}`)
    }

  return (
    <div onClick={(e) => handleClick(e)} className='cursor-pointer'>
        <img src={images}></img>
        <h2>{title}</h2>
    </div>
  )
}

export default Cards
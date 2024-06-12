"use client"
import AnimePage from '@/components/utils/AnimePage'
import { useParams } from 'next/navigation'
import React from 'react'

const Anime = () => {
  const {mal_id} = useParams()

  return (
    <AnimePage mal_id={mal_id} />
  )
}

export default Anime
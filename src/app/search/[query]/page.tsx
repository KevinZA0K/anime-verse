"use client"
import { useParams, useRouter } from 'next/navigation'
import React from 'react'

const Pagina = () => {
    const router = useRouter()
    const {query} = useParams()
  return (
    router.push(`${query}/1`)
  )
}

export default Pagina
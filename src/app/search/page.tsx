"use client"
import { SearchSection } from '@/components/HomePage/SearchSection'
import { SearchPage } from '@/components/SearchPage/SearchPage'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const page = () => {



  return (
    <div>
        <SearchSection isInSearch={true} />
        <SearchPage />
    </div>
  )
}

export default page
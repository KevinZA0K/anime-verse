"use client"
import { SearchSection } from '@/components/HomePage/SearchSection'
import { SearchPage } from '@/components/SearchPage/SearchPage'
import { useParams } from 'next/navigation'
import React from 'react'

export const Search = () => {
  const {query}:any = useParams()
  return (
    <>
    <SearchSection isInSearch={true} />
    <SearchPage query={query} />
    </>
  )
}

export default Search;
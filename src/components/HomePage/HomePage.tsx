import React from 'react'
import { SearchSection } from './SearchSection'
import { AnimeGridsHomePage } from './AnimeGridsHomePage'

export const HomePage = () => {
  return (
    <>
        <SearchSection isInSearch={false}/>
        <AnimeGridsHomePage />
    </>
  )
}

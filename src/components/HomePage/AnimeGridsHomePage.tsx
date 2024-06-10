import React from 'react'
import { AnimeCarousel } from './AnimeCarousel'

export const AnimeGridsHomePage = () => {
  return (
    <section>
        <AnimeCarousel title='Seasonal Animes' url='https://api.jikan.moe/v4/seasons/now' />
        <AnimeCarousel title='Top Rated Animes' url='https://api.jikan.moe/v4/top/anime'/>
    </section>
  )
}

import { useFetch } from '@/hooks/useFetch'
import React from 'react'
import Cards from '../utils/Cards'

interface Props {
    query:string
}

export const SearchPage = ({query}:Props) => {
    const {data,error,loading} = useFetch(`https://api.jikan.moe/v4/anime?q=${query}`)
  return (
    <div>,
        {data && data.data && data.data.map((anime:any) => (
            <Cards title={anime.title} images={anime.images.jpg.image_url} key={anime.mal_id} mal_id={anime.mal_id}/>
        ))}
    </div>
  )
}

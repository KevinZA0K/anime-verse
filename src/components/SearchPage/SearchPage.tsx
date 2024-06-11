import { useFetch } from '@/hooks/useFetch'
import React from 'react'

interface Props {
    query:string
}

export const SearchPage = ({query}:Props) => {
    const {data,error,loading} = useFetch(`https://api.jikan.moe/v4/anime?q=${query}`)
  return (
    <div>
        {data && data.data && data.data.map((anime:any) => (
            <div key={anime.mal_id}>{anime.title}</div>
        ))}
    </div>
  )
}

import { useFetch } from '@/hooks/useFetch'
import React from 'react'
import Cards from '../utils/Cards'

interface Props {
    query:string
    page:number
}

export const SearchPage = ({query,page}:Props) => {
    const {data,error,loading} = useFetch(`https://api.jikan.moe/v4/anime?q=${query}&page=${page}`)
  return (
    <div>
      {data && data.data && data.data.length === 0 && <p>Not Animes Found</p>}
      {loading && <p>Cargando...</p>}
        {data && data.data && data.data.map((anime:any) => (
            <Cards title={anime.title} images={anime.images.jpg.image_url} key={anime.mal_id} mal_id={anime.mal_id}/>
        ))}
    </div>
  )
}

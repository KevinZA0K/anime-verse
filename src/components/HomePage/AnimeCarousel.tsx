"use client"
import { useFetch } from '@/hooks/useFetch'
import { useRouter } from 'next/navigation'
import React from 'react'
import Cards from '../utils/Cards'

interface Props {
    title: string
    url:string
}

export const AnimeCarousel = ({title,url}:Props) => {
    const router = useRouter()
    const {data,loading,error} = useFetch(url)

  return (
    
    <div>
        <h2>{title}</h2>
        {loading && <span>Cargando...</span>}
        {error && <span>Error!</span>}
        <ul className=''>
            {
                data && data.data && data.data.map((anime:any)=>(
                    <Cards title={anime.title} images={anime.images.jpg.image_url} key={anime.mal_id} mal_id={anime.mal_id}/>
                ))
            }
        </ul>
    </div>
  )
}

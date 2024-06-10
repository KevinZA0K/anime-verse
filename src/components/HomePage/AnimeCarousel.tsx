"use client"
import { useFetch } from '@/hooks/useFetch'
import { useRouter } from 'next/navigation'
import React from 'react'


interface Props {
    title: string
    url:string
}

export const AnimeCarousel = ({title,url}:Props) => {
    const router = useRouter()
    console.log("Renderizando componente")
    const {data,loading,error} = useFetch(url)

  return (
    
    <div>
        <h2>{title}</h2>
        {loading && <span>Cargando...</span>}
        {error && <span>Error!</span>}
        <ul className='grid grid-cols-12'>
            {
                data && data.data && data.data.map((anime:any)=>(
                    <li key={anime.mal_id}>
                        <img src={anime.images.jpg.image_url}></img>
                        <h2>{anime.title}</h2>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

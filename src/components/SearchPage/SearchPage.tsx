"use client"
import { useFetch } from "@/hooks/useFetch";
import { MoveLeft, MoveRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import Cards from "../utils/Cards";
import { useRouter, useSearchParams } from "next/navigation";

export const SearchPage = () => {

  /*LOS SEARCH PARAMS */
  const params = useSearchParams()
  const query = params.get('query')
  const page = params.get('page') || 1

  /* NO EXISTE PAGE POR LO TANTO ES 1 */

  /*Declaración de variables */
  const router = useRouter()
  const { data, error, loading } = useFetch(
    `https://api.jikan.moe/v4/anime?q=${query}&page=${page}`
  );
const [grid, setGrid] = useState<any>([])

  /* USE EFFECT PARA EL GRID */
  useEffect(()=>{
    if(data){
      setGrid(data)
    }
  },[data])
  

  const nextPage = () => {
    router.push(`/search?query=${query}&page=${Number(page) + 1}`);
  };

  const prevPage = () => {
    router.push(`/search?query=${query}&page=${Number(page) - 1}`);

  }

  if (loading){
    return <p>Cargando...</p>
  }

  console.log(grid)

  if (grid && grid.data) {
    return (
      <>
        <div className="flex">
          {data.data.length === 0 && (
            <p>Not Animes Found</p>
          )}

          {
            grid.data.map((anime: any) => (
              <Cards
                title={anime.title}
                images={anime.images.jpg.image_url}
                key={anime.mal_id}
                mal_id={anime.mal_id}
              />
            ))}
        </div>

        {data.pagination.current_page > 1 && <button className="p-4 rounded-md bg-slate-400 mr-8" onClick={prevPage}>
          <MoveLeft />
        </button>}
        {data.pagination.has_next_page && <button onClick={nextPage} className="p-4 rounded-md bg-slate-400">
          <MoveRight />
        </button>}
      </>
    );
  }
};

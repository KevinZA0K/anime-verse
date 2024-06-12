import { useFetch } from "@/hooks/useFetch";
import { useParams } from "next/navigation";
import React from "react";

interface Props{
    mal_id: string | string[]
}

const AnimePage = ({ mal_id }:Props) => {
  const { data, error, loading } = useFetch(
    `https://api.jikan.moe/v4/anime/${mal_id}`
  );
  console.log(data);
  return (
    <div>
        {error && <p>Error</p>}
        {loading && <p>Cargando...</p>}
        {data && data.data && <span>{data.data.type}</span>}
      {data && data.data && <h2>{data.data.title}</h2>}
      {data && data.data && <h3>{data.data.title_japanese}</h3>}
      {data && data.data && <img src={data.data.images.jpg.large_image_url} />}
    </div>
  );
};

export default AnimePage;

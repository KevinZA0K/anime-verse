import { useEffect, useState } from "react";

export const useFetch = (url: string) => {

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((datas) => setData(datas))
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, [url]);


  return { data, loading, error };
};

import { useEffect, useState } from "react";

export function useFetch(url, requestOptions) {
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setIsFetching(false));
  }, []);

  return { data, error, isFetching };
}

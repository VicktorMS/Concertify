import { useEffect, useState } from "react";

export function useFetchBandsInTown(url) {
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  const baseUrl = "https://rest.bandsintown.com/";
  
  // Isso não deveria estar aqui
  const secretBandsInTown = "?app_id=b44ac6574df8cdc7291e1e543bea0a67";

  useEffect(() => {
    fetch(`${baseUrl}${url}${secretBandsInTown}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setIsFetching(false));
  }, [url]);

  return { data, error, isFetching };
}

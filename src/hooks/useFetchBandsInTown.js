import { useEffect, useState } from "react";

const BASE_URL = "https://rest.bandsintown.com/";

export function useFetchBandsInTown(endpoint, apiKey = "") {
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);
      try {
        const response = await fetch(`${BASE_URL}${endpoint}?app_id=${apiKey}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setIsFetching(false);
      }
    };

    fetchData();
  }, [endpoint, apiKey]);

  return { data, error, isFetching };
}

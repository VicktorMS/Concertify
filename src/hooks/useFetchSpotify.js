import { useEffect, useState } from "react";
import { fetchSpotifyAccessToken } from "/src/services/fetchSpotifyAccessToken";

export function useFetchSpotify(url, method) {
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        let storedAccessToken = localStorage.getItem("spotifyAccessToken");
        let storedExpireTime = localStorage.getItem("accessTokenSpotifyExpiresIn");
        if (!storedAccessToken || storedExpireTime <= Date.now()) {
          const resp = await fetchSpotifyAccessToken();
          localStorage.setItem("spotifyAccessToken", resp.accessToken);
          localStorage.setItem("accessTokenSpotifyExpiresIn", Date.now() + resp.expiresIn * 1000);
          storedAccessToken = resp.accessToken;
          storedExpireTime = Date.now() + resp.expiresIn * 1000;
        }

        const response = await fetch(url, {
          method,
          headers: { Authorization: `Bearer ${storedAccessToken}` },
        });

        if (!response.ok) {
          throw new Error("Erro ao buscar dados.");
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setIsFetching(false);
      }
    }

    fetchData();
  }, [url, method]);

  return { data, error, isFetching };
}

import { useEffect, useState } from "react";

import { fetchSpotifyAccessToken } from "/src/services/fetchSpotifyAccessToken";

export function useFetchSpotify(url, method) {
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  let storedAccessToken = localStorage.getItem("spotifyAccessToken");
  let storedExpireTime = localStorage.getItem("accessTokenSpotifyExpiresIn");

  async function fetchData() {
    if (!storedAccessToken || storedExpireTime <= Date.now()) {
      const resp = await fetchSpotifyAccessToken();
      
      localStorage.setItem("spotifyAccessToken", resp.accessToken);
      localStorage.setItem(
        "accessTokenSpotifyExpiresIn",
        Date.now() + resp.expiresIn * 1000
      );

      storedAccessToken = localStorage.getItem("spotifyAccessToken");
      storedExpireTime = localStorage.getItem("accessTokenSpotifyExpiresIn");
    }


    fetch(url, {
      method,
      headers: { Authorization: "Bearer " + storedAccessToken },
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setIsFetching(false));
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, isFetching };
}

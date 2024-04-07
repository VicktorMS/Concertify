import { useFetch } from "../hooks/useFetch";

export function fetchSpotifyPlaylistData(playlistID, spotifyAccessToken, storedExpireTime) {
  if (spotifyAccessToken && storedExpireTime > Date.now()) {
    return { data, error, isFetching } = useFetch(
      `https://api.spotify.com/v1/playlist/${playlistID}`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + spotifyAccessToken },
      }
    );
  } else return "Expired or invalid Spotify access token";
}

  // NÃO USAR ESSAS FUNÇÕES, USAR APENAS O HOOK

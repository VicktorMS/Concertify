function fetchSpotifyDataFromSeveralArtists(artistsIds, spotifyAccessToken, storedExpireTime) {
    if (spotifyAccessToken && storedExpireTime > Date.now()) {
        const { data, error, isFetching } = useFetch(
        `https://api.spotify.com/v1/artists?ids=${artistsIds}`,
        {
          method: "GET",
          headers: { Authorization: "Bearer " + spotifyAccessToken },
        }
        );
        return data, error, isFetching;
    }
    else return console.log("Expired or invalid Spotify access token");
  }

  // NÃO USAR ESSAS FUNÇÕES, USAR APENAS O HOOK
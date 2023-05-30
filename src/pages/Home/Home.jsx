import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import ArtistCard from "/src/components/ArtistCard/ArtistCard";
import ConcertsHomeCard from "/src/components/ConcertsHomeCard/ConcertsHomeCard";
import { useFetch } from "../../hooks/useFetch";
import { filterArtistsFromSpotifyPlaylist } from "/src/utils/filterArtistsFromSpotifyPlaylist.js";
import LoadingArtistCard from "../../components/LoadingArtistCard/LoadingArtistCard";

function Home({ artistsSearchData }) {
  const [numberOfArtists, setNumberOfArtists] = useState(20);

  const playlistId = "37i9dQZEVXbMDoHDwVN2tF";
  
  const renderLoadingCards = () => {
    const loadingCards = [];

    for (let i = 0; i < 20; i++) {
      loadingCards.push(<LoadingArtistCard key={i} />);
    }

    return loadingCards;
  };
  const {
    data: playlistData,
    error: playlistError,
    isFetching: isFetchingPlaylist,
  } = useFetch(`https://api.spotify.com/v1/playlists/${playlistId}`, "GET");

  function filterArtistsIdsFromPlaylistToString(ids) {
    if (playlistData && !playlistError && !isFetchingPlaylist) {
      const allArtistsIds = filterArtistsFromSpotifyPlaylist(playlistData);
      const fewArtistsIds = allArtistsIds.slice(0, ids);
      return fewArtistsIds.join(",");
    }
  }

  const stringOfArtistsIds =
    filterArtistsIdsFromPlaylistToString(numberOfArtists);


  const {
    data: artistsData,
    error: artistsError,
    isFetching: isFetchingArtists,
  } = useFetch(
    `https://api.spotify.com/v1/artists?ids=${stringOfArtistsIds}`,
    "GET"
  );

  return (
    <>
      <div className={styles.homeTopArtist}>
        <div className={styles.categoryTitle}>
          <h2>Descubra novas experiencias Incriveis</h2>
          <p>Artistas do momento</p>
        </div>
        <div className={styles.cardsNav}>
          {artistsError && <p>Não foi buscar artistas </p>}
          {artistsData && artistsData?.artists[0]
            ? artistsData?.artists.map((artist, index) => (
                <ArtistCard data={artist} key={index} />
              ))
            : <>{renderLoadingCards()}</>}
        </div>
      </div>
    </>
  );
}

export default Home;

//   {/* {console.log(topArtistsData)} */}
//   {/* {topArtistsData ? (
//     topArtistsData.map((artist, index) => (
//       <ArtistCard key={index + "topArtist"} data={artist} />
//     ))
//   ) : (
//     <div>Carregando...</div>
//   )} */}

// useEffect(() => {
//   const storedAccessToken = localStorage.getItem("spotifyAccessToken");
//   const storedExpireTime = localStorage.getItem(
//     "accessTokenSpotifyExpiresIn"
//   );

//   if (storedAccessToken && storedExpireTime > Date.now()) {
//     console.log("Token já existe")
//     console.log("chave em cache", storedAccessToken)
//     setSpotifyAccessToken(storedAccessToken);
//     setSpotifyExpireTimeAccessToken(storedExpireTime);
//     console.log("Chave em Estado", spotifyAccessToken)
//     console.log("Expire em Estado", spotifyExpireTimeAccessToken)

//   } else {
//     // Caso não esteja armazenado, obter um novo AccessToken
//     fetchSpotifyAccessToken().then(({ accessToken, expiresIn }) => {
//       localStorage.setItem("spotifyAccessToken", accessToken);
//       localStorage.setItem(
//         "accessTokenSpotifyExpiresIn",
//         Date.now() + expiresIn * 1000
//       );
//       setSpotifyAccessToken(accessToken);
//       setSpotifyExpireTimeAccessToken(Date.now() + expiresIn * 1000)
//     });
//   }

// }, []);

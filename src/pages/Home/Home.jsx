import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import ArtistCard from "/src/components/ArtistCard/ArtistCard";
import ConcertsHomeCard from "/src/components/ConcertsHomeCard/ConcertsHomeCard";
// import { useFetch } from "../../hooks/useFetchBandsInTown";
import { fetchSpotifyAccessToken } from "../../utils/fetchSpotifyAccessToken";

function Home({ artistsSearchData }) {
  const [spotifyAccessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const storedAccessToken = localStorage.getItem("spotifyAccessToken");
    const storedExpireTime = localStorage.getItem(
      "accessTokenSpotifyExpiresIn"
    );

    if (storedAccessToken && storedExpireTime > Date.now()) {
      setAccessToken(storedAccessToken);
    } else {
      // Caso não esteja armazenado, obter um novo AccessToken
      fetchSpotifyAccessToken().then(({ accessToken, expiresIn }) => {
        localStorage.setItem("spotifyAccessToken", accessToken);
        localStorage.setItem(
          "accessTokenSpotifyExpiresIn",
          Date.now() + expiresIn * 1000
        );
        setAccessToken(accessToken);
      });
    }
  }, []);

  return (
    <>
      <div className={styles.homeTopArtist}>
        <div className={styles.categoryTitle}>
          <h2>Artistas em Alta</h2>
        </div>
        <div className={styles.cardsNav}>
          {console.log(artistsSearchData?.name)}
        </div>
      </div>
      <div className={styles.homeTopConcerts}>
        <div className={styles.categoryTitle}>
          <h2>Shows em Alta</h2>
        </div>
        <div className={styles.cardsNav}>
          <ConcertsHomeCard />
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

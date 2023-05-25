import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import ArtistCard from "/src/components/ArtistCard/ArtistCard";
import ConcertsHomeCard from "/src/components/ConcertsHomeCard/ConcertsHomeCard";

import { useFetch } from "../../hooks/useFetch";

import { fetchSpotifyAccessToken } from "/src/services/fetchSpotifyAccessToken";
import { fetchSpotifyPlaylistData } from "../../services/fetchSpotifyPlaylistData";

function Home({ artistsSearchData }) {
    
  const [spotifyAccessToken, setSpotifyAccessToken] = useState(null);
  const [spotifyExpireTimeAccessToken, setSpotifyExpireTimeAccessToken] = useState(null);


  // console.log(artistsSearchData);

  
  useEffect(() => {
    const storedAccessToken = localStorage.getItem("spotifyAccessToken");
    const storedExpireTime = localStorage.getItem(
      "accessTokenSpotifyExpiresIn"
    );

    if (storedAccessToken && storedExpireTime > Date.now()) {
      console.log("Token já existe")
      console.log("chave em cache", storedAccessToken)
      setSpotifyAccessToken(storedAccessToken);
      setSpotifyExpireTimeAccessToken(storedExpireTime);
      console.log("Chave em Estado", spotifyAccessToken)


    } else {
      // Caso não esteja armazenado, obter um novo AccessToken
      fetchSpotifyAccessToken().then(({ accessToken, expiresIn }) => {
        localStorage.setItem("spotifyAccessToken", accessToken);
        localStorage.setItem(
          "accessTokenSpotifyExpiresIn",
          Date.now() + expiresIn * 1000
        );
        setSpotifyAccessToken(accessToken);
        setSpotifyExpireTimeAccessToken(Date.now() + expiresIn * 1000)
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
          {/* {console.log(artistsSearchData?.name)} */}
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

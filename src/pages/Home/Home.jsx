import React, { useState, useEffect, useParams } from "react";
import styles from "./Home.module.css";
import ArtistCard from "/src/components/ArtistCard/ArtistCard";

function Home() {
  const [artists, setArtists] = useState([]);

  const fetchDataSpotify = async () => {
    let token_url = window.location.hash;
    let token_pure = token_url
      .substring(1)
      .split("&")
      .find((elem) => elem.startsWith("access_token"))
      .split("=")[1];
    window.localStorage.setItem("token", token_pure);
    try {
      const response = await fetch(
        "https://api.spotify.com/v1/me/top/artists",
        {
          method: "get",
          headers: new Headers({
            Authorization: `Bearer ${token_pure}`,
          }),
        }
      );
      const result = await response.json();
      setArtists(result);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchDataSpotify();
  }, []);

  return (
    <>
      <div className={styles.homeTopArtist}>
        <div className={styles.categoryTitle}>
          <h2>Artistas em Alta</h2>
          <p>Mostrar todos</p>
        </div>
        <div className={styles.cardsNav}>
          {artists.items?.map((artist, index) => (
            <ArtistCard key={index} data={artist} />
          ))}
        </div>
      </div>
      <div className={styles.homeTopConcerts}>
        <div className={styles.categoryTitle}>
          <h2>Shows em Alta</h2>
          <p>Mostrar todos</p>
        </div>
        <div className={styles.cardsNav}></div>
      </div>
    </>
  );
}

export default Home;
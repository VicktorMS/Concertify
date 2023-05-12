import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import ArtistCard from "/src/components/ArtistCard/ArtistCard";
function Home() {
  const [artists, setArtists] = useState([]);

  const secretBandSinTown = "b44ac6574df8cdc7291e1e543bea0a67";

  const fetchDataSpotify = async () => {
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
    let token_url = window.location.hash;
    let token_pure = token_url
      .substring(1)
      .split("&")
      .find((elem) => elem.startsWith("access_token"))
      .split("=")[1];
    window.localStorage.setItem("token", token_pure);

    fetchDataSpotify();
  }, []);

  console.log(artists);

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

// curl -X POST "https://accounts.spotify.com/api/token" \
//      -H "Content-Type: application/x-www-form-urlencoded" \
//      -d "grant_type=client_credentials&client_id=6fc0b1f2e7a24dcf836d4c6937e746a9&client_secret=d48491bd1a6c4a899d6544c0dcd22e68"

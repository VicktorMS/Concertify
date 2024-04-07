import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import ArtistCard from "/src/components/ArtistCard/ArtistCard";
import { useFetchSpotify } from "../../hooks/useFetchSpotify";
import {
  arrayToString,
  filterArtistsFromSpotifyPlaylist,
} from "/src/utils/utils";
import GenerateCardsLoading from "../../components/GenerateCardsLoading/GenerateCardsLoading";

function Home() {
  const [numberOfArtists, setNumberOfArtists] = useState(50);

  //Id da playlist com Top Artistas
  const playlistId = "37i9dQZEVXbMDoHDwVN2tF";

  //Requisição da Playlist de top 50 artistas
  const {
    data: playlistData,
    error: playlistError,
    isFetching: isFetchingPlaylist,
  } = useFetchSpotify(
    `https://api.spotify.com/v1/playlists/${playlistId}`,
    "GET"
  );

  //Transforma a requisição da Playlist em uma string com ids dos artistas
  let stringOfArtistsIds;
  if (playlistData && !playlistError && !isFetchingPlaylist) {
    stringOfArtistsIds = arrayToString(
      filterArtistsFromSpotifyPlaylist(playlistData),
      numberOfArtists
    );
  }

  //Requisição dos artistas
  const {
    data: artistsData,
    error: artistsError,
    isFetching: isFetchingArtists,
  } = useFetchSpotify(
    `https://api.spotify.com/v1/artists?ids=${stringOfArtistsIds}`,
    "GET"
  );

  return (
    <div className={styles.homeTopArtist}>
      <div className={styles.categoryTitle}>
        <h2>Descubra novas experiencias Incríveis</h2>
        <p>Artistas do momento</p>
      </div>
      <div className={styles.cardsNav}>
        {artistsError && <p>Não possível foi buscar artistas </p>}
        {artistsData && artistsData?.artists[0] ? (
          artistsData?.artists?.map((artist, index) => (
            <ArtistCard data={artist} key={index} />
          ))
        ) : (
          <GenerateCardsLoading numberOfCards={numberOfArtists} />
        )}
      </div>
    </div>
  );
}

export default Home;

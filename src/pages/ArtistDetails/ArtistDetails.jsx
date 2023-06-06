import React, { useState, useEffect } from "react";
import styles from "./ArtistDetails.module.css";
import { useParams } from "react-router-dom";
import { useFetchSpotify } from "/src/hooks/useFetchSpotify.js";
import { useFetchBandsInTown } from "/src/hooks/useFetchBandsInTown.js";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ArtistInfo from "/src/components/ArtistInfo/ArtistInfo";
import ConcertCard from "/src/components/ConcertCard/ConcertCard";

function ArtistDetails() {
  // const [artistData, setArtistData] = useState([null]);
  const params = useParams();
  const paramsToArray = params["*"].split("/");

  const {
    data: artistData,
    error: artistError,
    isFetching: isFetchingArtist,
  } = useFetchSpotify(
    `https://api.spotify.com/v1/artists/${paramsToArray[0]} `,
    "GET"
  );

  const {
    data: concertsData,
    error: concertsError,
    isFetching: isFetchingConcerts,
  } = useFetchBandsInTown(`artists/${paramsToArray[1]}/events`);

  console.log("concerts", !isFetchingConcerts && concertsData)

  return (
    <div className={styles.artistPage}>
      {isFetchingArtist ? (
        <p>Carregando...</p>
      ) : (
        <ArtistInfo artistData={artistData} />
      )}

      <div className={styles.concertsContainer}>
        <h3>Principais Shows</h3>
        <ul>
          {isFetchingConcerts ? (
            <p>Carregando...</p>
          ) : (
            concertsData.map((concert, index) => (
              <ConcertCard key={index} concertData={concert} />
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default ArtistDetails;

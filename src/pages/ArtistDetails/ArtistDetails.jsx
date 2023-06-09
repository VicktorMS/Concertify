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

  // Requisição Spotify da informação do artista com o parâmetro
  const {
    data: artistData,
    error: artistError,
    isFetching: isFetchingArtist,
  } = useFetchSpotify(
    `https://api.spotify.com/v1/artists/${paramsToArray[0]} `,
    "GET"
  );

  // Requisição dos shows do artista com o parâmetro nome
  const {
    data: concertsData,
    error: concertsError,
    isFetching: isFetchingConcerts,
  } = useFetchBandsInTown(`artists/${paramsToArray[1]}/events`);

  console.log("concerts", !isFetchingConcerts && concertsData.length);

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
          {(() => {
            if (concertsError) return <p>Deu erro</p>;

            else if (isFetchingArtist) return <p>Carregando...</p>;
            
            else if (!isFetchingConcerts && !concertsError) {

              //API do BandsInTown manda a mensagem de erro por JSON
              if (concertsData && concertsData.errorMessage)
                return <p>{concertsData.errorMessage}</p>;

              else {

                if (concertsData.length === 0)
                  return <p>Esse artista não está fazendo shows</p>;

                else
                  return concertsData?.map((concert, index) => (
                    <ConcertCard key={index} concertData={concert} />
                  ));
              }
            }
          })()}
        </ul>
      </div>
    </div>
  );
}

export default ArtistDetails;

// {isFetchingConcerts ? (
//   <p>Carregando...</p>
// ) : (
//   concertsData.map((concert, index) => (
//     <ConcertCard key={index} concertData={concert} />
//   ))
// )}

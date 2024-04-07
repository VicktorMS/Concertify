import React from "react";
import { useParams } from "react-router-dom";
import styles from "./ArtistDetails.module.css";
import { useFetchBandsInTown } from "/src/hooks/useFetchBandsInTown.js";
import ArtistInfo from "/src/components/ArtistInfo/ArtistInfo";
import ConcertCard from "/src/components/ConcertCard/ConcertCard";

function ArtistDetails({ artistsSearchData }) {
  const params = useParams();
  const paramsToArray = params["*"].split("/");

  const { data: concertsData, error: concertsError, isFetching: isFetchingConcerts } = useFetchBandsInTown(`artists/${paramsToArray[1]}/events`);
  const { data: artistData, error: artistError, isFetching: isFetchingArtist } = useFetchBandsInTown(`artists/${paramsToArray[1]}`);

  const renderArtistInfo = () => {
    if (isFetchingArtist) return <p>Carregando...</p>;
    if (artistError) return <p>Erro ao carregar dados do artista.</p>;
    return <ArtistInfo artistData={artistData} />;
  };

  const renderConcerts = () => {
    if (concertsError) return <p>Desculpe, ocorreu algum erro ao buscar Shows do artista. <br/>Por favor tente novamente mais tarde.</p>;
    if (isFetchingConcerts) return <p>Carregando...</p>;
    if (!concertsData || concertsData.length === 0) return <p>Esse artista não está fazendo shows</p>;
    return concertsData.map((concert, index) => <ConcertCard key={index} concertData={concert} />);
  };

  return (
    <div className={styles.artistPage}>
      {renderArtistInfo()}
      <div className={styles.concertsContainer}>
        <h3>Principais Shows</h3>
        <ul>{renderConcerts()}</ul>
      </div>
    </div>
  );
}

export default ArtistDetails;

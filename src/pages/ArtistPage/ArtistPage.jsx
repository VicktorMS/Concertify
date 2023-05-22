import React, { useState, useEffect } from "react";
import styles from "./ArtistPage.module.css";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import StadiumIcon from '@mui/icons-material/Stadium';

const secretBandSinTown = "b44ac6574df8cdc7291e1e543bea0a67";

function ArtistPage() {

  let artist_url = window.location.href;
  let artist_Name = artist_url.substring(2).split("artist/")[1]

  const [artist, setArtist] = useState([])
  const [artistsEvent, setArtistsEvent] = useState([]);
  const [notFound, setNotFound] = useState(false)
  let ArtistPage;

  const fetchDataBandsintown = async () => {
  
    try {
      let [artistRequest, artistEventRequest] = await Promise.all([
        fetch(`https://rest.bandsintown.com/artists/${artist_Name}?app_id=${secretBandSinTown}`),
        fetch(`https://rest.bandsintown.com/artists/${artist_Name}/events?app_id=${secretBandSinTown}&date=upcoming`),
      ]);
      const artistResponse = await artistRequest.json();
      const artistEventResponse = await artistEventRequest.json();

      if(artistResponse.error){
        setNotFound(true);
      }

      setArtist(artistResponse)
      setArtistsEvent(artistEventResponse)

    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchDataBandsintown();
  }, []);

  console.log(artistsEvent)

  if(notFound) {
    ArtistPage = (
      <div className={styles.artistNotFound}>
        <h1>Artista não Encontrado</h1>
      </div>
    )
  } else {
    const { name, thumb_url, tracker_count, upcoming_event_count } = artist;

    ArtistPage = (
      <div className={styles.artistPage}>
        <div className={styles.artistContainer}>
          <img src={thumb_url} alt={`Imagem de perfil de ${name}`} />
          <h2>{name}</h2>
          <div className={styles.stats}>
            <div className={styles.popularity}>
              <AutoAwesomeIcon />
              <b>Seguidores: {tracker_count}</b> 
            </div>
            <div className={styles.popularity}>
              <StadiumIcon />
              <b>Proximos shows: {upcoming_event_count}</b> 
            </div>
          </div>
        </div>

        <div className={styles.concertsContainer}>
          <h2>Shows</h2>
          <br/>
          {artistsEvent.map((artistEvent, index) => (
            <div>
              <li key={index}>{artistEvent.title ? artistEvent.title : artistEvent.venue.name}</li>
              <p>{artistEvent.datetime}</p>
              <br/>
            </div>
          ))}
          <ul></ul>
        </div>
      </div>
    )
  }

  return (
    <>
      {ArtistPage}
    </>
  );
}

export default ArtistPage;

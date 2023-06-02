import React, { useState, useEffect } from 'react'
import styles from './ArtistDetails.module.css'
import {useParams} from 'react-router-dom'
import { useFetchSpotify } from "/src/hooks/useFetchSpotify.js";
import { useFetchBandsInTown } from "/src/hooks/useFetchBandsInTown.js";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

function ArtistDetails() {
    // const [artistData, setArtistData] = useState([null]);
    const params = useParams();
    const paramsToArray = params['*'].split('/');

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
    } = useFetchBandsInTown(
      `artists/${paramsToArray[1]}/events`
    );

    console.log("sptfy",!isFetchingArtist && artistData)
    console.log("bit",!isFetchingConcerts && concertsData)

    return (
      <div className={styles.artistPage}>
        <div className={styles.artistContainer}>
          <h2>{paramsToArray[1]}</h2>
          <div className={styles.stats}>
            <div className={styles.popularity}><AutoAwesomeIcon/><b>Popularidade:</b> 81</div>
          </div>
        </div>
        <div className={styles.concertsContainer}>
          <p>Teste</p>
          <ul>
          </ul>
        </div>
      </div>
    )
}

export default ArtistDetails
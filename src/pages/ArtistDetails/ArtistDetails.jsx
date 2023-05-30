import React, { useState, useEffect } from 'react'
import styles from './ArtistDetails.module.css'
import {useParams} from 'react-router-dom'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

function ArtistDetails() {
    const [artistData, setArtistData] = useState([null])
    const params = useParams()
    const currentArtistName = params['*']


    
    
    
    return (
      <div className={styles.artistPage}>
        
        <div className={styles.artistContainer}>
          {/* <img src={img} alt={`Imagem de perfil de ${name}`} /> */}
          <h2>{currentArtistName}</h2>
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
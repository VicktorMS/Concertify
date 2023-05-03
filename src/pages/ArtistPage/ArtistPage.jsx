import React, { useState, useEffect } from 'react'
import styles from './ArtistPage.module.css'
import { useQueryClient } from 'react-query'
import {useParams} from 'react-router-dom'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

function ArtistPage() {
    const [artistData, setArtistData] = useState([null])
    const params = useParams()
    const currentArtistID = params['*']

    const queryClient = useQueryClient()

    async function getCurrentArtistDataInCache(){
      try{
        const artistsDataInCache = await queryClient.getQueryData('artists');
        console.log('cache: ', artistsDataInCache )
        const currentArtistData = artistsDataInCache.find(artistData => artistData.id === currentArtistID) || {};
        console.log("Artista Atual", currentArtistData)
        setArtistData(currentArtistData)
      }catch(error){
        console.log('Erro ao buscar dados em cache: ', error)
      }
    }
  
    useEffect(()=>{
      getCurrentArtistDataInCache()
    }, [])
    
    console.log("Artist", artistData)

    const {name, img, followers} = artistData
    return (
      <div className={styles.artistPage}>
        
        <div className={styles.artistContainer}>
          <img src={img} alt={`Imagem de perfil de ${name}`} />
          <h2>{name}</h2>
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

export default ArtistPage

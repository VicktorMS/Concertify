import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import ArtistCard from '/src/components/ArtistCard/ArtistCard';
import axios from 'axios';
import { useQuery } from 'react-query';

function Home() {
    const {data, isFetching} = useQuery('artists', async () => {
        const response = await axios.get('/data/topArtists.json')
        return response.data
    },{
        staleTime: 1000 * 60
    })
    // console.log(data)

  return (
    <>
        <div className={styles.homeTopArtist}>
            <div className={styles.categoryTitle}>
                <h2>Artistas em Alta</h2>
                <p>Mostrar todos</p>
            </div>
            <div className={styles.cardsNav}>
                {isFetching && <p>Carregando...</p>}
                {data?.map((artist, index) => (
                    <ArtistCard 
                        key={index + 'topArtist'}
                        data={artist}
                    /> ))}
            </div>
        </div>
        <div className={styles.homeTopConcerts}>
            <div className={styles.categoryTitle}>
                <h2>Shows em Alta</h2>
                <p>Mostrar todos</p>
            </div>
            <div className={styles.cardsNav}>
            
            </div>
        </div>
    </>
  )
}

export default Home

// curl -X POST "https://accounts.spotify.com/api/token" \
//      -H "Content-Type: application/x-www-form-urlencoded" \
//      -d "grant_type=client_credentials&client_id=6fc0b1f2e7a24dcf836d4c6937e746a9&client_secret=d48491bd1a6c4a899d6544c0dcd22e68"

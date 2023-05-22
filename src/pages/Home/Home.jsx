import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import ArtistCard from '/src/components/ArtistCard/ArtistCard';
import ConcertsHomeCard from '/src/components/ConcertsHomeCard/ConcertsHomeCard';
import axios from 'axios';

function Home() {
    const [topArtistsData, setTopArtistsData] = useState(null);

    useEffect(() => {
        axios
            .get('/data/topArtists.json')
            .then(response => setTopArtistsData(response.data))
            .catch(error => console.log(error))
    }, []);

  return (
    <>
        <div className={styles.homeTopArtist}>
            <div className={styles.categoryTitle}>
                <h2>Artistas em Alta</h2>
            </div>
            <div className={styles.cardsNav}>
                {console.log(topArtistsData)}
                { topArtistsData ? topArtistsData.map((artist, index) => (
                    <ArtistCard 
                        key={index + 'topArtist'}
                        data={artist}
                    /> )): <div>Carregando...</div>}
            </div>
        </div>
        <div className={styles.homeTopConcerts}>
            <div className={styles.categoryTitle}>
                <h2>Shows em Alta</h2>
            </div>
            <div className={styles.cardsNav}>
                <ConcertsHomeCard/>            
            </div>
        </div>
    </>
  )
}

export default Home
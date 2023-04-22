import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import ArtistCard from '/src/components/ArtistCard/ArtistCard';
import axios from 'axios';

function Home() {
    const [topArtistsData, setTopArtistsData] = useState(null);

    useEffect(() => {
        axios
            .get('/public/data/topArtists.json')
            .then(response => setTopArtistsData(response.data))
            .catch(error => console.log(error))
    }, []);

  return (
    <>
        <div className={styles.homeTopArtist}>
            <div className={styles.categoryTitle}>
                <h2>Artistas em Alta</h2>
                <p>Mostrar todos</p>
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
                <p>Mostrar todos</p>
            </div>
            <div className={styles.cardsNav}>
            
            </div>
        </div>
    </>
  )
}

export default Home
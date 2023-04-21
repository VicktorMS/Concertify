import React from 'react'
import styles from './Home.module.css'
import ArtistCard from '/src/components/ArtistCard/ArtistCard'

function Home() {
  return (
    <>
        <div className={styles.homeTopArtist}>
            <div className={styles.categoryTitle}>
                <h2>Artistas em Alta</h2>
                <p>Mostrar todos</p>
            </div>
            <div className={styles.cardsNav}>
                <ArtistCard
                    img={"/public/image/artist_default.png"}
                    name={"Michael Jackson"}
                    followers={'12.2K'}
                />
                <ArtistCard
                    img={"/public/image/artist_default.png"}
                    name={"Michael Jackson"}
                    followers={'12.2K'}
                />
                <ArtistCard
                    img={"/public/image/artist_default.png"}
                    name={"Michael Jackson"}
                    followers={'12.2K'}
                />
            </div>
        </div>
        <div className={styles.homeTopConcerts}>
            <div className={styles.categoryTitle}>
                <h2>Shows em Alta</h2>
                <p>Mostrar todos</p>
            </div>
            <div className={styles.cardsNav}>
            <ArtistCard
                    img={"/public/image/artist_default.png"}
                    name={"Michael Jackson"}
                    followers={'12.2K'}
                />
            </div>
        </div>
    </>
  )
}

export default Home
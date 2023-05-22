import React from 'react'
import styles from './ArtistCard.module.css'

function ArtistCard({data}) {
  const {img, name, followers} = data
  return (
    <div className={styles.ArtistCard}>
        <img src={img} alt="Artist image" />
        <div className={styles.info}>
            <p><b>{name}</b></p>
            <p>{followers}</p>
        </div>
    </div>
  )
}

export default ArtistCard
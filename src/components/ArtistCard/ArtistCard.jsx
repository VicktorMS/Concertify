import React from 'react'
import styles from './ArtistCard.module.css'
import {Link} from 'react-router-dom'

function ArtistCard({data}) {
  const {id,img, name, followers} = data
  return (
    <Link to={`/home/artist/${id + name}`} style={{ textDecoration: 'none', color: '#fff' }}>
      <div className={styles.ArtistCard}>
          <img src={img} alt="Artist image" />
          <div className={styles.info}>
              <p><b>{name}</b></p>
              <p>{followers}</p>
          </div>
      </div>
    </Link>
  )
}

export default ArtistCard
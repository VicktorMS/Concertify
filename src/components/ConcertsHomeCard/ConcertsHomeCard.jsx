import React from 'react'
import styles from "./ConcertsHomeCard.module.css";

function ConcertsHomeCard() {
  return (
    <div className={styles.ConcertsHomeCard}>
        <img src='/image/artist_default.png' alt="Artist image" style={{marginBottom: 6}}/>
        <div className={styles.info}>
            <p>
              <span className={styles.dateHighLight}>15 Jan </span>  
                &gt; 
              <span className={styles.dateHighLight}>17 Jan </span> 
            </p>
            <p style={{marginTop: 4}}><b>Festival Lorem Ipsum</b></p>
            <p>Riocentro - Rio de Janeiro</p>
        </div>
    </div>
  )
}

export default ConcertsHomeCard
import React from "react";
import styles from "./LoadingArtistCard.module.css";
import Skeleton from '@mui/material/Skeleton';

function LoadingArtistCard() {
  return (
    <div className={styles.LoadingCard}>
      <Skeleton variant="rectangular" animation="wave" width={210} height={180} />
      <div className={styles.info}>
        <Skeleton variant="text" animation="wave" sx={{ fontSize: '1.5rem' }} />
        <Skeleton variant="text"animation="wave" sx={{ fontSize: '3rem' }} />
      </div>
    </div>
  );
}

export default LoadingArtistCard;

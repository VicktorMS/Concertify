import React from "react";
import styles from "./GenerateCardsLoading.module.css";
import Skeleton from '@mui/material/Skeleton';

function LoadingArtistCard() {
  return (
    <div className={styles.LoadingCard}>
      <Skeleton variant="rectangular" animation="wave" width={200} height={185} />
        <Skeleton variant="text" animation="wave" sx={{fontSize: '1.5rem' }} />
        <Skeleton variant="text"animation="wave" sx={{ fontSize: '2rem', width: "30%" }} />
      <div className={styles.info}>
      </div>
    </div>
  );
}

function GenerateCardsLoading({ numberOfCards }) {
  const loadingCards = Array.from({ length: numberOfCards }, (_, index) => (
    <LoadingArtistCard key={index} />
  ));

  return <>{loadingCards}</>;
}

export default GenerateCardsLoading;

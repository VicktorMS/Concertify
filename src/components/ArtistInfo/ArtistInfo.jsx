import React from "react";
import styles from "./ArtistInfo.module.css"
import abbreviate from "number-abbreviate";


function ArtistInfo({ artistData }) {
  const { 
    name, 
    image_url, 
    tracker_count,
  } = artistData

  return (
    <aside className={styles.artistContainer}>
      <img src={image_url} />
      <div className={styles.info}>
        <div>
          <h2>{name}</h2>
          <p>
            Seguidores {abbreviate(tracker_count)}
          </p>
        </div>
      </div>
    </aside>
  );
}

export default ArtistInfo;

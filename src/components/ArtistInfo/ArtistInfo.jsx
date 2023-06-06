import React from "react";
import styles from "./ArtistInfo.module.css"
import abbreviate from "number-abbreviate";


function ArtistInfo({ artistData }) {
  const { 
    name, 
    images, 
    popularity, 
    followers,
    genres,
    external_urls
  } = artistData

  return (
    <aside className={styles.artistContainer}>
      <img src={images[0]?.url} />
      <div className={styles.info}>
        <div>
          <h2>{name}</h2>
          <p>
            Seguidores {abbreviate(followers.total)}
          </p>
          <p>{genres.join(', ')}</p>
        </div>
      </div>
    </aside>
  );
}

export default ArtistInfo;

import React from "react";
import styles from "./ArtistCard.module.css";
import abbreviate from "number-abbreviate";
import { Link } from "react-router-dom";

function ArtistCard({ data }) {
  const { id, images, name, followers } = data;
  return (
    <Link to={`/home/${id}/${name}`} style={{ textDecoration: "none", color: "#fff" }}>
      <div className={styles.ArtistCard}>
        <img src={images[0].url} alt="Artist image" />
        <div className={styles.info}>
          <p>
            <b>{name}</b>
          </p>
          <p>{abbreviate(followers.total, 2)}</p>
        </div>
      </div>
    </Link>
  );
}

export default ArtistCard;


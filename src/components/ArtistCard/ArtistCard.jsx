import React from "react";
import styles from "./ArtistCard.module.css";
import { Link } from "react-router-dom";

function ArtistCard({ data }) {
  const { id, images, name, followers } = data;
  return (
    <Link
      to={`/home/artist/${name}`}
      style={{ textDecoration: "none", color: "#fff" }}
    >
      <div className={styles.ArtistCard}>
        <img src={Object.values(images)[2].url} alt="Artist image" />
        <div className={styles.info}>
          <p>
            <b>{name}</b>
          </p>
          <p>{followers.total}</p>
        </div>
      </div>
    </Link>
  );
}

export default ArtistCard;

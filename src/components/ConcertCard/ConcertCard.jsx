import React from "react";
import styles from "./ConcertCard.module.css";

function ConcertCard({ concertData }) {
  const {
    lineup,
    venue,
    offers,
    title,
    starts_at: startsAt,
    ends_at: endsAt,
  } = concertData;

  const {
    city,
    country,
    name,
    postal_code: postalCode,
    street_address: streetAddress,
  } = venue;

  const formattedStartsAt = new Date (startsAt)

  return (
    <div className={styles.concertCard}>
      <div>
        <p><b>{name}</b></p>
        <p>{`${formattedStartsAt.getDate()}/${formattedStartsAt.getMonth()}/${formattedStartsAt.getFullYear()} - ${formattedStartsAt.getHours()}:${formattedStartsAt.getMinutes()}`} {endsAt && ` - ${endsAt}`}</p>
        <p>{country} - {city}</p>
        <p>{streetAddress}</p>
      </div>
      <div>
        <p>
          <b></b>
        </p>
        <p>
          <b></b>
        </p>
      </div>
    </div>
  );
}

export default ConcertCard;

import React from "react";

function CardBanner({ img }) {
  return (
    <figure className="card-banner">
      <img
        src={img}
        width={520}
        height={325}
        loading="lazy"
        alt="Elephant"
        className="img-cover"
      />
    </figure>
  );
}

export default CardBanner;

import React from "react";

function InstaPostList({ imgNo }) {
  return (
    <div>
      <a href="/" className="insta-post-link">
        <img
          src={`/images/insta-${imgNo}.jpg`}
          width={320}
          height={300}
          loading="lazy"
          alt="Lion"
          className="img-cover"
        />
        <ion-icon name="logo-instagram" />
      </a>
    </div>
  );
}

export default InstaPostList;

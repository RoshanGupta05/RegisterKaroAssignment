import React from "react";
import img4 from "../Asset/Coinbase-logo.png";
import img2 from "../Asset/Dropbox-Logo.png";
import img3 from "../Asset/Spotify_logo_with_text.svg.png";
import img1 from "../Asset/download (4).png";
import img5 from "../Asset/Zoom-Logo.png";

function Companies() {
  const images = [
    { src: img1, alt: "Coinbase" },
    { src: img2, alt: "Dropbox" },
    { src: img3, alt: "Spotify" },
    { src: img4, alt: "Slack" },
    { src: img5, alt: "Zoom" },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-6 p-8 bg-white">
      {images.map((image, index) => (
        <div key={index} className="flex items-center">
          <img
            src={image.src}
            alt={image.alt}
            className="h-12 md:h-16 object-contain"
            title={image.alt} // Optional: Add a title attribute for hover tooltips
          />
        </div>
      ))}
    </div>
  );
}

export default Companies;

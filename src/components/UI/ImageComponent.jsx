import { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

export default function ImageComponent({ src, alt }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };

    img.src = src;
  }, [src]);

  return (
    <>
      <div style={{ display: imageLoaded ? "none" : "inline" }}>
        <Blurhash
          hash=""
          width={200}
          height={200}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </div>

      {imageLoaded && (
        <img
          src={src}
          alt={alt}
          style={{ display: imageLoaded ? "none" : "inline" }}
          
        />
      )}
    </>
  );
}

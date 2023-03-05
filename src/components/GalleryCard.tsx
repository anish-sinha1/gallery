import React from "react";

const GalleryCard: React.FC<{ title: string; imageSrc: string }> = ({
  title,
  imageSrc,
}) => {
  return (
    <div className="gallery-card">
      <div className="gallery-card__title">{title}</div>
      <img className="gallery-card__img" src={imageSrc} alt={title} />
    </div>
  );
};

export default GalleryCard;

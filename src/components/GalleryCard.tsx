import React from "react";
import { useNavigate } from "react-router-dom";

const GalleryCard: React.FC<{
  title: string;
  imageSrc: string;
  path: string;
}> = ({ title, imageSrc, path }) => {
  const navigate = useNavigate();
  return (
    <div className="gallery-card" onClick={() => navigate(`/gallery/${path}`)}>
      <div className="gallery-card__title">{title}</div>
      <img className="gallery-card__img" src={imageSrc} alt={title} />
    </div>
  );
};

export default GalleryCard;

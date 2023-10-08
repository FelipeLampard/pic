import React, { useContext } from "react";
import { PhotosIndex } from "../index/PhotosIndex";

const Favorites = () => {
  const { photos } = useContext(PhotosIndex);

  const favoritePhotos = photos.filter((photo) => photo.isFavorite);

  return (
    <div>
      <div className="d-flex justify-content-center">
        <h1 className="text-success">Fotos favoritas</h1>
      </div>

      <div className="p-3 gallery grid-columns-4">
        {favoritePhotos.map((photo) => (
          <div key={photo.id} className="photo">
            <img src={photo.src.tiny} alt={photo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;

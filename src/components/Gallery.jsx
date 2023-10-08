import { useContext } from "react";
import { PhotosIndex } from "../index/PhotosIndex";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { photos, setPhotos } = useContext(PhotosIndex);

  const addPlus = (id) => {
    const newPhotos = photos.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      }
      return photo;
    });
    setPhotos(newPhotos);
  };

  return (
    <div className="gallery grid-columns-5 p-3">
      {photos.map((photo, i) => (
        <div
          key={photo.id}
          onClick={() => addPlus(photo.id)}
          className="photo"
          style={{ backgroundImage: `url(${photo.src.large})` }}
        >
          <IconHeart filled={photo.isFavorite} />
          <section>
            <p>{photo.alt}</p>
          </section>
        </div>
      ))}
    </div>
  );
};

export default Gallery;

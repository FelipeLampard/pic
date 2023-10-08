import { createContext } from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const PhotosIndex = createContext();

const URL = "./photos.json";

const PhotosGive = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const takePhotos = async () => {
    try {
      const respuesta = await axios.get(URL);
      if (respuesta.status !== 200) {
        throw new Error("No hay info");
      }
      const { photos: photosDB } = respuesta.data;
      setPhotos(photosDB.map((item) => ({ ...item, isFavorite: false })));
    } catch (error) {}
  };

  useEffect(() => {
    takePhotos();
  }, []);

  return (
    <PhotosIndex.Provider
      value={{
        photos,
        setPhotos,
      }}
    >
      {children}
    </PhotosIndex.Provider>
  );
};

export default PhotosGive;

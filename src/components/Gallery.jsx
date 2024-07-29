import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../hooks/useStores";
import GalleryItem from "./GalleryItem";

const Gallery = observer(() => {
  const { galleryStore } = useStores();

  useEffect(() => {
    galleryStore.loadPhotos();
  }, [galleryStore]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {galleryStore.photos.map((photo) => (
        <GalleryItem key={photo.id} photo={photo} />
      ))}
    </div>
  );
});

export default Gallery;

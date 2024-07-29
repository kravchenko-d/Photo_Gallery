import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";

class GalleryStore {
  photos = [];

  constructor() {
    makeAutoObservable(this);
  }


async loadPhotos() {
      try {
        const response = await axios.get(
          "http://localhost:8055/items/photos"
        );
        runInAction(() => {
          this.photos = response.data.data;
        });
      } catch (error) {
        console.error("Failed to load photos", error);
      }
    }
  }

const galleryStore = new GalleryStore();
export default galleryStore;

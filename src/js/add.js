import { ref as dbRef, push, set } from "firebase/database";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL
} from "firebase/storage";
import { db, storage } from "./libs/firebaseConfig";

const imageInput = document.querySelector("#imageInput");

imageInput.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploadedImage = reader.result;
    document.querySelector(
      ".display-image"
    ).style.backgroundImage = `url(${uploadedImage})`;
  });
  reader.readAsDataURL(this.files[0]);
});

// Save Album Handler
const addAlbumForm = document.forms["addAlbumForm"];
addAlbumForm.addEventListener("submit", handleSave);

function handleSave(e) {
  e.preventDefault();
  const albumName = addAlbumForm["albumName"].value.trim();
  const artistName = addAlbumForm["artistName"].value.trim();
  const genre = addAlbumForm["genre"].value.trim();
  const release = addAlbumForm["release"].value;
  const cost = addAlbumForm["cost"].value;
  const desc = addAlbumForm["desc"].value.trim();
  const imageFile = imageInput;
  console.log({
    albumName, artistName, genre, release, cost, desc, imageInput
  });
}
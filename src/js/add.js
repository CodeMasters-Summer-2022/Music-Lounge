import { ref as dbRef, push, set } from "firebase/database";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL
} from "firebase/storage";
import { db, storage } from "./libs/firebaseConfig";
import { showNotification } from "./libs/utils";

// Show image preview when an image is selected
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


const addAlbumForm = document.forms["addAlbumForm"];
addAlbumForm.addEventListener("submit", handleSave);

// Save Album Handler
function handleSave(e) {
  e.preventDefault();

  let albumImage = null;
  if (imageInput.files.length > 0) {
    albumImage = imageInput.files[0];
  }

  const newAlbum = {
    title: addAlbumForm["albumName"].value.trim(),
    artist: addAlbumForm["artistName"].value.trim(),
    genre: addAlbumForm["genre"].value.trim(),
    release: Number(addAlbumForm["release"].value),
    cost: Number(addAlbumForm["cost"].value),
    description: addAlbumForm["desc"].value.trim(),
    imgFile: albumImage
  };

  if (!validateInputs(newAlbum)) {
    showNotification("Please fill all album details & add an album cover", "error");
    return;
  }

  savenewAlbum(newAlbum);
}

// Validate all the data input by the user
function validateInputs(album) {
  const { title, artist, genre, release, cost, description, imgFile } = album;

  const isValid =
    title !== "" &&
    artist !== "" &&
    genre !== "" &&
    release !== "" &&
    cost !== "" &&
    description !== "" &&
    !!imgFile;

  return isValid;
}

// Save the new album details to firebase RTD
async function savenewAlbum({
  title,
  artist,
  genre,
  release,
  cost,
  description,
  imgFile
}) {
  const dataRef = dbRef(db, "albums/");
  const newAlbumRef = await push(dataRef); // Generates a unique key for the new album record
  const imageRef = storageRef(storage, `images/albums/${newAlbumRef.key}`);

  const uploadResult = await uploadBytes(imageRef, imgFile);
  const imgStoragePath = uploadResult.metadata.fullPath;
  const imgUrl = await getDownloadURL(imageRef);

  // Save album details to RTD
  set(newAlbumRef, {
    id: newAlbumRef.key,
    title,
    artist,
    genre,
    release,
    cost,
    description,
    imgUrl,
    imgStoragePath
  })
    .then(() => {
      showNotification("Album added successfully");
    })
    .catch((err) => {
      console.log(err.message);
      showNotification("Album could not be added", "error");
    });
}

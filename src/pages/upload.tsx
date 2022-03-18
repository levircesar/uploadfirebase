
import React, { useState } from "react";
import {  storageRef ,ref,uploadBytesResumable, getDownloadURL } from "../firebase";

const ReactFirebaseFileUpload = () => {
  const [image, setImage] = useState<any>(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = (e : any) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const metadata = {
    contentType: 'image/jpeg'
  };
  

  const handleUpload = () => {
    var milliseconds = new Date().getTime();
    const storageNewRef  = ref(storageRef, `images/${milliseconds}-${image.name}`);
    const uploadTask =uploadBytesResumable(storageNewRef, image ,metadata);
    uploadTask.on(
      "state_changed",
      (snapshot: any) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error: any) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUrl(downloadURL);
        });
      }
    );
  };

  console.log("image: ", image);

  return (
    <div>
      <progress value={progress} max="100" />
      <br />
      <br />
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      <br />
      {url}
      <br />
      <img src={url || "http://via.placeholder.com/300"} alt="firebase-image" />
    </div>
  );
};

export default ReactFirebaseFileUpload;
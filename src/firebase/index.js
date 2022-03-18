import {initializeApp} from "firebase/app";
import {getStorage , ref,uploadBytesResumable, getDownloadURL} from "firebase/storage";
const config = {
  apiKey: "AIzaSyAP4p80ox_ZO2oyeJQ53n8_ILSkgzZ8gkY",

  authDomain: "todolist-fedb2.firebaseapp.com",

  databaseUrl: "gs://todolist-fedb2.appspot.com",

  projectId: "todolist-fedb2",

  storageBucket: "todolist-fedb2.appspot.com",

  messagingSenderId: "124728057620",

  appId: "1:124728057620:web:38feca1eac81a4fc21ac01"
}

initializeApp(config)


const storage = getStorage();
const storageRef = ref(storage);
export { storage ,storageRef ,ref,uploadBytesResumable, getDownloadURL };



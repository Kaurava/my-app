import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { createConversationApi } from "./conversations";
import { createMessageApi } from "./messages";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNYBkLHe4iVvKUJNmoB-fpkUo8MdwPbOo",
  authDomain: "my-app-fa8f6.firebaseapp.com",
  databaseURL: "https://my-app-fa8f6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-app-fa8f6",
  storageBucket: "my-app-fa8f6.appspot.com",
  messagingSenderId: "851724189031",
  appId: "1:851724189031:web:655bdb71673476491683c2",
  measurementId: "G-7XX3B1T4PW"
};

export const firibase = initializeApp(firebaseConfig);

export const analytics = getAnalytics(firibase);
export const auth = getAuth(firibase);
export const database = getDatabase(firibase);


// setTimeout(() => {
//   createConversationApi("room5");
//   createConversationApi("room6");
//   createConversationApi("room7");
//   console.log("end")
// }, 2000)

setTimeout(() => {
  createMessageApi({id: 1, author: "User", data: new Date().getTime(), message: "Привет"}, "room5");
  createMessageApi({id: 1, author: "User", data: new Date().getTime(), message: "Большой Привет"}, "room5");
  createMessageApi({id: 1, author: "User", data: new Date().getTime(), message: "Привет"}, "room6");
  createMessageApi({id: 1, author: "User", data: new Date().getTime(), message: "Привет"}, "room7");  console.log("end")
}, 2000)


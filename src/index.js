import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const firebase = require("firebase");
require("firebase/firestore");

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCQZsGTTvv2QpnOtDUoPlBzf1F3PMhha7o",
  authDomain: "evernote-clone-3b1fc.firebaseapp.com",
  databaseURL: "https://evernote-clone-3b1fc.firebaseio.com",
  projectId: "evernote-clone-3b1fc",
  storageBucket: "evernote-clone-3b1fc.appspot.com",
  messagingSenderId: "289704807311",
  appId: "1:289704807311:web:35d15b14c9dd4e53e059fa",
  measurementId: "G-1Q3Z9M4FKR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();

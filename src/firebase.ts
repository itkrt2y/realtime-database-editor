import * as firebase from "firebase/app";

firebase.initializeApp({
  apiKey: "AIzaSyCI_zUKRlQgdsDPpc8BxPVXtJQlmxcINUY",
  authDomain: "editor-sample-c4570.firebaseapp.com",
  databaseURL: "https://editor-sample-c4570.firebaseio.com",
  projectId: "editor-sample-c4570",
  storageBucket: "",
  messagingSenderId: "568111051412",
  appId: "1:568111051412:web:636bd3fed7aa99c4deba81"
});

import "firebase/database";
export const db = firebase.database();

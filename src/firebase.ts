import * as firebase from "firebase/app";

firebase.initializeApp({
  apiKey: "<api key>",
  authDomain: "<auth domain>",
  databaseURL: "<database URL>",
  projectId: "<project id>",
  storageBucket: "",
  messagingSenderId: "<message sender id>",
  appId: "<app id>"
});

import "firebase/database";
export const database = firebase.database();

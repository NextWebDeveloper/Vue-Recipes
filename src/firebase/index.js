import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBZPaG2CtiF_B2McQuqEJ9P2YXlovZZW5c",
  authDomain: "meal-recipes.firebaseapp.com",
  databaseURL: "https://meal-recipes.firebaseio.com",
  projectId: "meal-recipes",
  storageBucket: "meal-recipes.appspot.com",
  messagingSenderId: "1082821226596"
};
firebase.initializeApp(config);

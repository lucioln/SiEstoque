import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBKHRjWwmdklocWFzEl56eKKAIIgw0YT44",
  authDomain: "siestoque.firebaseapp.com",
  projectId: "siestoque",
  storageBucket: "siestoque.appspot.com",
  messagingSenderId: "715395737513",
  appId: "1:715395737513:web:3fc4762c6e413687c846b8"
};
  
  // Initialize Firebase
export default firebase.initializeApp(firebaseConfig);

import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyCUr5dqbxcUVWV-zvprM9vA7W3nJZmnSJw",
    authDomain: "spotimusic-dbdbb.firebaseapp.com",
    projectId: "spotimusic-dbdbb",
    storageBucket: "spotimusic-dbdbb.appspot.com",
    messagingSenderId: "757704289113",
    appId: "1:757704289113:web:5fdc6a8a1501e3266a3a48"
};

export default firebase.initializeApp(firebaseConfig);
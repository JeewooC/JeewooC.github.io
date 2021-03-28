import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBrE6LUNKCtFgvaLjNKEZTfJlpKofHMlqk",
    authDomain: "viridi-c4949.firebaseapp.com",
    projectId: "viridi-c4949",
    storageBucket: "viridi-c4949.appspot.com",
    messagingSenderId: "813233171406",
    appId: "1:813233171406:web:2b02551aff42907ecd199f",
    measurementId: "G-NTDH7V69M2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
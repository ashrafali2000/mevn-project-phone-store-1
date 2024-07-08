import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
// import firebaseConfig from './config';
const firebaseConfig = {
    apiKey: "AIzaSyCoi0HxrqRTmNYTbbyZjlrTA2zV_DVFAg8",
    authDomain: "vuejs-ecommerce-website-1.firebaseapp.com",
    projectId: "vuejs-ecommerce-website-1",
    storageBucket: "vuejs-ecommerce-website-1.appspot.com",
    messagingSenderId: "693923065705",
    appId: "1:693923065705:web:12f38daad8efac3dd257f8",
    measurementId: "G-FGGSV61BB8"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const Provider = new firebase.auth.GoogleAuthProvider();
export default firebaseApp;
export { Provider };

import firebase from '@firebase/app';
import '@firebase/analytics';
import '@firebase/database';
import flamelink from 'flamelink';

// Initialize Firebase
var config = {
    apiKey: 'AIzaSyD8kV2Q6pXCcr940eTlNzdbXu5cl5G2v9c', // should probably remove this
    authDomain: 'gretchen-gambill.firebaseapp.com',
    databaseURL: 'https://gretchen-gambill.firebaseio.com/',
    storageBucket: 'gretchen-gambill.appspot.com',
    projectId: "gretchen-gambill",
    messagingSenderId: "626045632551",
    appId: "1:626045632551:web:7c6c10ff93c87c8b",
    measurementId: "G-GSLE5B67DN"
};

const firebaseApp = firebase.initializeApp(config);

const flamelinkInstance = flamelink({ firebaseApp });

// Initialize Firebase Analytics
const analytics = firebase.analytics(firebaseApp);

export { flamelinkInstance, analytics }

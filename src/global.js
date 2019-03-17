import * as firebase from 'firebase';
import flamelink from 'flamelink';

// Initialize Firebase
var config = {
    apiKey: 'AIzaSyD8kV2Q6pXCcr940eTlNzdbXu5cl5G2v9c', // should probably remove this
    authDomain: 'gretchen-gambill.firebaseapp.com',
    databaseURL: 'https://gretchen-gambill.firebaseio.com/',
    storageBucket: 'gretchen-gambill.appspot.com',
    projectId: "gretchen-gambill",
};

const firebaseApp = firebase.initializeApp(config);

// // TODO: tighten permissions on firebase db
// // TODO: get flamelink working
const flamelinkInstance = flamelink({ firebaseApp });

export { flamelinkInstance }

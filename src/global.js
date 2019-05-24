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

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const firebaseApp = admin.initializeApp(functions.config().firebase);

// // TODO: tighten permissions on firebase db
// // TODO: get flamelink working
const flamelinkInstance = flamelink({ firebaseApp, isAdminApp: true });

function renderImages(contentToLoad) {
    exports.addMessage = functions.https.onRequest((req, res) => {
        return flamelinkInstance.content.get(contentToLoad)
            .then(images => res.status(200).json({ images }))
            .error(error => res.status(500).json({ error }));
    })
}

export { flamelinkInstance, renderImages }

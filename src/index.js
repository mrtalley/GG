import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as firebase from 'firebase';
import flamelink from 'flamelink';
// import admin from 'firebase-admin';
// import lozad from 'lozad';

import App from './App';
import * as serviceWorker from './serviceWorker';

// var serviceAccount = require("./firebase-adminsdk.json");

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));

// Initialize Lozad
// const observer = lozad();
// observer.observe();

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyD8kV2Q6pXCcr940eTlNzdbXu5cl5G2v9c', // should probably remove this
  authDomain: 'gretchen-gambill.firebaseapp.com',
  databaseURL: 'https://gretchen-gambill.firebaseio.com',
  storageBucket: 'gretchen-gambill.appspot.com',
  projectId: "gretchen-gambill",
};

const firebaseApp = firebase.initializeApp(config);

const flamelinkInstance = flamelink({ firebaseApp });

flamelinkInstance.content.get('Images')
    .then(images => console.log(images))
    .catch(error => console.log('something bad happened :-(\n', error));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();

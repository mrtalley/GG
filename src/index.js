import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase';
import lozad from 'lozad';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));

// Initialize Lozad
const observer = lozad();
observer.observe();

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyD8kV2Q6pXCcr940eTlNzdbXu5cl5G2v9c',
  authDomain: 'gretchen-gambill.firebaseapp.com',
  databaseURL: 'https://gretchen-gambill.firebaseio.com',
  storageBucket: 'gretchen-gambill.appspot.com',
};

firebase.initializeApp(config);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();

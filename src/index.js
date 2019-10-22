import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import WebFont from 'webfontloader';

import App from './App';
import * as serviceWorker from './serviceWorker';

WebFont.load({
    custom: {
        families: [
            'warnock-pro',
            'ambroise-firmin-std'
        ],
        urls: ['https://use.typekit.net/ssh7edh.css']
    }
})

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();

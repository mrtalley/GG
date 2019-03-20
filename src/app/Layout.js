import React from 'react';
import Helmet from 'react-helmet';

import Header from './layout/Header';
import Router from './layout/Router';

import '../assets/styles/scss/layout.scss';

const Layout = () => (
    <div>
        <Helmet
            title='Gretchen Gambill'
            meta={[
                {
                    name: 'description',
                    content: 'A Gretchen Gambill Art Portfolio'
                }
            ]}
        />
        <Header />
        <div className="content-container">
            <Router />
        </div>
    </div>
)

export default Layout;

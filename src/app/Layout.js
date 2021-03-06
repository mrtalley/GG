import React from 'react';
import Helmet from 'react-helmet';

import Header from './layout/Header';
import Router from './layout/Router';

// Scss
import '../assets/styles/scss/layout.scss';

const Layout = () => (
    <div className='background'>
        <Helmet
            title='GAMBILLART'
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

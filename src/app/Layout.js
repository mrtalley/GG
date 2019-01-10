import React from 'react';
import Helmet from 'react-helmet';

import Header from './layout/Header';
import Site from './layout/Site';
import Router from './layout/Router';

const Layout = () => (
    <div>
        <Helmet
            title='GG'
            meta={[
                {
                    name: 'description',
                    content: 'Personal website of artist Grechen Gambill'
                }
            ]}
        />
        <Header />
        <Router />
    </div>
)

export default Layout;

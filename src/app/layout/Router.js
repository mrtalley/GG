import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home';
import About from '../About';
import GraphicDesign from '../GraphicDesign';
import FineArt from '../FineArt';

const Router = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/graphicdesign' component={GraphicDesign} />
        <Route path='/fineart' component={FineArt} />
    </Switch>
);

export default Router;

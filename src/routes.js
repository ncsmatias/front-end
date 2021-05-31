import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Confirm from './pages/Confirm';
import Shop from './pages/Shop';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/confirm' component={Confirm} />
                <Route path='/shop' component={Shop} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Confirm from './pages/Confirm';
import Shop from './pages/Shop';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route  path='/home' component={Home} />
                <Route path='/confirm' component={Confirm} />
                <Route path='/shop' component={Shop} />
                <Route path='/cadastro' component={Cadastro} />
                <Route exact path='/' component={Login} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
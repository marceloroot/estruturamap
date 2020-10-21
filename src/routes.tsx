import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Landing from './pages/Landing';
import EstruturaMap from './pages/EstruturaMap';

function Routes(){
    return(
          <BrowserRouter>
          <Switch>
             <Route path="/" exact component={Landing} />
             <Route path="/app" component={EstruturaMap} /> 
          </Switch>
          </BrowserRouter>
    );
}

export default Routes;
import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Landing from './pages/Landing';
import EstruturaMap from './pages/EstruturaMap';
import Estrutura from './pages/Estrutura';
import CreateEstrutura from './pages/CreateEstrutura';

function Routes(){
    return(
          <BrowserRouter>
          <Switch>
             <Route path="/" exact component={Landing} />
             <Route path="/app" component={EstruturaMap} /> 
             <Route path="/estrutura/create" component={CreateEstrutura} /> 
             <Route path="/estrutura/:id" component={Estrutura} /> 
          </Switch>
          </BrowserRouter>
    );
}

export default Routes;
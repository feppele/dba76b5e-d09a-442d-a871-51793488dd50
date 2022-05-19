import { Route, Switch } from 'react-router-dom';

// Pages
import MainPage from './pages/MainPage';
import NarBar from './comps/NavBar';

import { useState, createContext, useContext } from "react";


function App() {


  return(
    <div>

      <NarBar />

      <Switch>
        <Route path='/' exact>
          <MainPage />
        </Route>

      </Switch>

    </div>
  );

}

export default App;


import { Route, Switch } from 'react-router-dom';

// Pages
import MainPage from './pages/MainPage';
import Warenkorb from './pages/Warenkorb';
import NavBar from './components/NavBar';


function App() {

  return(
    <div>

      <NavBar />

      <Switch>
        <Route path='/' exact>
          <MainPage />
        </Route>

        <Route path='/warenkorb'>
          <Warenkorb />
        </Route>
      </Switch>

    </div>
  );

}

export default App;


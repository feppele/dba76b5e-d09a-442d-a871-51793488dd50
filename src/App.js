import { Route, Switch } from 'react-router-dom';

// Pages
import MainPage from './pages/MainPage';
import Warenkorb from './pages/Warenkorb';
import NavBar from './components/NavBar';
import { useState, createContext, useContext } from "react";


function App() {

  const [warenkorbEvents,setWarenkorbEvents]= useState([])
  const [searchValue,setSearchValue]= useState("")


  function callbackFromDayBoxToApp(ele){
    setWarenkorbEvents([...warenkorbEvents, ele]);
  }

  // is called when EventBox (MinusButton) in Warenkorb is pressed ==> remove this Event from Warenkorb
  function callbackFromWarenKorbToApp(id){
    setWarenkorbEvents(warenkorbEvents.filter(warenkEvent => warenkEvent._id != id ))
  }

  // this function is passed to NavBar and is called from there as a callback function
  function search(e){

    if(e.key!== "Enter"){
        return;
    }
    const search = e.target.value
    setSearchValue(search)
    console.log(search)

}

  console.log(warenkorbEvents)

  return(
    <div>

      <NavBar search={search} warenkorbCount={warenkorbEvents.length}/>

      <Switch>
        <Route path='/' exact>
          <MainPage searchValue={searchValue} callbackFromDayBoxToApp={callbackFromDayBoxToApp} warenkorbEvents={warenkorbEvents}/>
        </Route>

        <Route path='/warenkorb'>
          <Warenkorb callbackFromWarenKorbToApp={callbackFromWarenKorbToApp} warenkorbEvents={warenkorbEvents}/>
        </Route>
      </Switch>

    </div>
  );

}

export default App;


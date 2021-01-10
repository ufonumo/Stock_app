
import React from 'react';
import './App.css';
import './bootstrap.min.css';
import NavbarTab from './components/navbar';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Newsapp from "./pages/stock_API";
import UpdateOnstocks from "./pages/update_stocks";
import FormStock from './components/form';


const App = () => {

  return (
    
    <div className="App">
      <Router>
        <Switch>
          <Route path='/FormStock' isAuthed={true} component={FormStock} />
          <Route path="/stock_API" isAuthed={true}  component={Newsapp} />
         
          <Route path="/UpdateOnstocks" isAuthed={true} component={UpdateOnstocks}/>
        </Switch>

        <NavbarTab/>
       

      </Router>

      
     
    </div>
  );
}

export default App;

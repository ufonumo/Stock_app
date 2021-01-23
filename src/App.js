
import React from 'react';
import './App.css';
import './bootstrap.min.css';
import NavbarTab from './components/navbar';
import {BrowserRouter , Route} from "react-router-dom";
import Newsapp from "./pages/stock_API";
import UpdateOnstocks from "./pages/update_stocks";
import FormStock from './components/form';
import Converter from "./pages/converter";

const App = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <NavbarTab/>

        <Route exact path='/' component={FormStock} />
        <Route  exact path="/stock_API"  component={Newsapp} />
      
        <Route exact path="/UpdateOnstocks"  component={UpdateOnstocks}/>
        <Route exact path='/Converter'  component={Converter}/>

      </div>
    </BrowserRouter>

  );
}

export default App;

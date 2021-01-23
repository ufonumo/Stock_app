
import React, { useEffect, useState } from 'react';
import './App.css';
import './bootstrap.min.css';
import NavbarTab from './components/navbar';
import {BrowserRouter , Route} from "react-router-dom";
import Newsapp from "./pages/stock_API";
import UpdateOnstocks from "./pages/update_stocks";
import FormStock from './components/form';
import Converter from "./pages/converter";
import Loader from 'react-loader-spinner';

const App = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000);
  }, [])

  return (
    <BrowserRouter>
      <div className="App">

        {
          loading ?
           <Loader className='text-center spinner' type="Circles" color="#941515" height={80} width={80} />
          :

          <div>
            <NavbarTab/>

            <Route exact path='/' component={FormStock} />
            <Route  exact path="/stock_API"  component={Newsapp} />

            <Route exact path="/UpdateOnstocks"  component={UpdateOnstocks}/>
            <Route exact path='/Converter'  component={Converter}/>

          </div>
        }

      </div>
    </BrowserRouter>

  );
}

export default App;

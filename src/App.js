
import React from 'react';
import './App.css';
import './bootstrap.min.css';
import news from './assets/news.jpg';
import online from "./assets/online.jpg";
import reality from "./assets/reality.jpg";
import NavbarTab from './components/navbar';
import Carousel from 'react-bootstrap/Carousel';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Newsapp from "./pages/stock_API";
import UpdateOnstocks from "./pages/update_stocks";


const App = () => {


  return (
    
    <div className="App">
      <Router>
        <Switch>
          <Route path="/stock_API" component={Newsapp} />
         
          <Route path="/UpdateOnstocks" component={UpdateOnstocks}/>
        </Switch>

        <NavbarTab/>
        <div className='container'>
          <div className='row news_container'>
            <div className="col-lg-6 stock">
              <Carousel>
                <Carousel.Item interval={3000}>
                  <img
                    className="d-block w-100"
                    src={online}
                    alt="First slide"
                  />
                  
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <img
                    className="d-block w-100"
                    src={reality}
                    alt="Second slide"
                  />
                
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <img
                    className="d-block w-100"
                    src={news}
                    alt="Third slide"
                  />
                  
                </Carousel.Item>
              </Carousel>

            </div>
            <div className='col-lg-6 stock'>
              <h2>Have you ever thought of ways to get daily news or updates about the stock market within your comfort zone? Then you've come to the right place <span role="img" aria-label="smile">🥰</span></h2>
            </div>
        </div>
        </div>
       
      
       
      </Router>

      
     
    </div>
  );
}

export default App;

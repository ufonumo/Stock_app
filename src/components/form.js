import React from 'react';
import news from '../assets/news.jpg';
import online from "../assets/online.jpg";
import reality from "../assets/reality.jpg";
import Carousel from 'react-bootstrap/Carousel';
import Spinner from 'react-bootstrap/Spinner';



const FormStock = () =>{

    return(
      
        <div className='container'>
          <div className='row news_container'>

          <Spinner className='text-center'  size="lg" animation="grow" variant="dark" role="status">
                <div className="sr-only text-center">Loading...</div>
           </Spinner>

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
     
    )
};

export default FormStock;
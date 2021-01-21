import React from 'react';
import news from '../assets/news.jpg';
import online from "../assets/online.jpg";
import reality from "../assets/reality.jpg";
import photoone from "../assets/austin-distel-DfjJMVhwH_8-unsplash.jpg";
import obi from "../assets/obi-onyeador-qXfD_nG4j-U-unsplash.jpg";
import photoTwo from "../assets/juliana-malta-Uy0Bq8vYjk4-unsplash.jpg";
import Carousel from 'react-bootstrap/Carousel';


const FormStock = () =>{

    return(
      
        <div className='container-fluid fluid'>

              <Carousel>
                <Carousel.Item interval={20000}>
                  <img
                    className="d-block w-100 image"
                    src={photoone}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <div className='row'>
                      <div className='col-lg-5 col-sm-12 '></div>
                      <div className=' col-lg-7 col-sm-12 text-right news_heading'>
                        <div className='new_header'>
                          <h3>Find your latest news with Thee's News App</h3>
                          <p>No matter what niche or industry you are the master of, let Thee's news website do its thing and take you to extreme heights. </p>
                        </div>

                      </div>
                    </div>
                  </Carousel.Caption>
                  
                </Carousel.Item>
                <Carousel.Item interval={20000}>
                  <img
                    className="d-block w-100 image"
                    src={obi}
                    alt="Second slide"
                  />

                     <Carousel.Caption>
                    <div className='row'>
                      <div className='col-lg-5 col-sm-12 '></div>
                      <div className=' col-lg-7 col-sm-12 text-right news_heading'>
                        <div className='new_header'>
                          <h3>Find your latest news with Thee's News App</h3>
                          <p>No matter what niche or industry you are the master of, let Thee's news website do its thing and take you to extreme heights. </p>
                        </div>

                      </div>
                    </div>
                  </Carousel.Caption>
                
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <img
                    className="d-block w-100 image"
                    src={photoTwo}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <div className='row'>
                      <div className='col-lg-5 col-sm-12 '></div>
                      <div className=' col-lg-7 col-sm-12 text-right news_heading'>
                        <div className='new_header'>
                          <h3>Find your latest news with Thee's News App</h3>
                          <p>No matter what niche or industry you are the master of, let Thee's news website do its thing and take you to extreme heights. </p>
                        </div>

                      </div>
                    </div>
                  </Carousel.Caption>
                  
                </Carousel.Item>
              </Carousel>

        
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
     
    )
};

export default FormStock;
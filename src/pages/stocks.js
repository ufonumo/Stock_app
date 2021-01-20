import React from "react";
import Spinner from 'react-bootstrap/Spinner';


const Stock = ({ loading, heading, summary, image, URL, source, category}) =>{
    // const stocks = `https://finnhub.io/api/v1/news?category=general&token=${API_KEY}`
   // for exhange symbols https://finnhub.io/api/v1/stock/symbol?exchange=US&token
   
//    if(loading){
//     return <Spinner animation="border" className=' text-center' role="status">
//                 <span className="sr-only">Loading...</span>
//             </Spinner>;
//     }

    return(       
       
        <div className="col-lg-4 stock_item">
        {/* <Spinner animation="border" className=' text-center' role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>;
             */}
            <div className="stock_head ">
                <h1>{heading}</h1>
                <sub className='text-left'>CATEGORY:  {category}</sub>
                <img src={image} alt='images'/>
                <article>{summary}..</article>
                <a href={URL}>Click here to read more </a>
                <p>Source: {source}</p>

            </div>
           
        </div>
    )
};

export default Stock;
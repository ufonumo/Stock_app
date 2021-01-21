import React from "react";

const Stock = ({ heading, summary, image, URL, source, category}) =>{
    // const stocks = `https://finnhub.io/api/v1/news?category=general&token=${API_KEY}`
   // for exhange symbols https://finnhub.io/api/v1/stock/symbol?exchange=US&token

    return(       
       
        <div className="col-lg-4 stock_item">

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
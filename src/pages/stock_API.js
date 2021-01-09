
import React, { useEffect, useState } from 'react';
import '../App.css';
import '../bootstrap.min.css';
import NavbarTab from "../components/navbar";
import Stock from "./stocks";

const Newsapp = () => {

  const API_KEY = 'bvp58r748v6s8216s8m0	'; 

  // gets recipe data and displays it
  let [news, setNews] = useState([]);

  const [query, setQuery] = useState('goat')

  const [search, setSearch] = useState("");

  useEffect(()=>{
    getNews()
  }, [query]);


  const getNews = async ()=>{
    const response = await fetch( `https://finnhub.io/api/v1/news?category=general&token=${API_KEY}`);
    let data = await response.json();
    // console.log(data);
    setNews(data);
  };


  return (
    <div className="App ">
       
       <NavbarTab/>
       
      <div className='container'>
        <div className="row news_container">
          {news.map( list =>(
            
            <Stock

            key={list.id}
            heading={list.headline}
            image={list.image}
            source={list.source}
            summary={list.summary}
            URL= {list.url}
            category={list.category}
            />
          ))}
        </div>
      </div>
      
  
     
    </div>
  );
}

export default Newsapp;
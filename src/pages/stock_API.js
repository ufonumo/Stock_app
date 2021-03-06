
import React, { useEffect, useState } from 'react';
import '../App.css';
import '../bootstrap.min.css';
import Stock from "./stocks";
import {Pagination} from "../components/Pagination";
import Loader from 'react-loader-spinner';

const Newsapp = () => {

  const API_KEY = 'bvp58r748v6s8216s8m0	'; 

  // gets recipe data and displays it
  let [news, setNews] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [newsPerPage] = useState(20);
  let [loading, setloading] = useState(false);


  useEffect(()=>{
    
    const getNews = async ()=>{
      setloading(true);
      const response = await fetch( `https://finnhub.io/api/v1/news?category=general&token=${API_KEY}`);
      let data = await response.json();
      setNews(data);
      setloading(false)

    };

    getNews()
  }, []);

  const indexOfLastPost = currentPage * newsPerPage;
  const indexOfFirstPost = indexOfLastPost - newsPerPage;
  const currentProfiles = news.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) =>{
    setCurrentPage(pageNumber)
  };

  if(loading){
    return   <Loader className='text-center  spinner' type="Circles" color="#941515" height={80} width={80} />
  }

  return (
    <div className="App ">
              
      <div className='container-fluid'>
        <div className="row news_container">

          {currentProfiles.map( list =>(
            <Stock

            key={list.id}
            heading={list.headline}
            image={list.image}
            source={list.source}
            summary={list.summary}
            URL= {list.url}
            category={list.category}
            loading={loading}
            />
            
          ))}

          <Pagination
            profilePerPage={newsPerPage}
            totalProfiles={news.length}
              paginate={paginate}
           />
        </div>
      </div>
      
  
     
    </div>
  );
}

export default Newsapp;

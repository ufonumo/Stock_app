
import React, { useEffect, useState } from 'react';
import '../App.css';
import '../bootstrap.min.css';
import Stock from "./stocks";
import {Pagination} from "../components/Pagination";
import Spinner from 'react-bootstrap/Spinner';

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
    return <Spinner animation="border" className=' spinner_border text-center' role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>;
    }

  return (
    <div className="App ">
              
      <div className='container'>
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

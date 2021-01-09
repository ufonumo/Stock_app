import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

const FormStock = () =>{

    const API_KEY = 'Y4NYBY6LJCDUVZQN	'; 

    // gets recipe data and displays it
    let [stocks, setStocks] = useState([]);
  
    const [query, setQuery] = useState('')
  
    const [search, setSearch] = useState("");
  
    useEffect(()=>{
      getStocks()
    }, [query]);
  
  
    const getStocks = async ()=>{
      const response = await fetch( `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${API_KEY}`);
      let data = await response.json();
      console.log(data);
      setStocks(data);
    };
  
    const updateSearch = e =>{
      setSearch(e.target.value);
      console.log(search);
    };
  
    const getSearch = e =>{
      e.preventDefault();
      setQuery(search);
      setSearch('');
    };
  
    return(
      
        <Form inline onSubmit={getSearch} className='search_form justify-content-center'>
            <FormControl type="text" value={search} onChange={updateSearch} placeholder="Search for stocks" className="mr-sm-2 search_bar" />
            <Button  type="submit"  variant="outline-success">Search</Button>
        </Form>
     
    )
};

export default FormStock;
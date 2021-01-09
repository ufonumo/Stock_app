import React, { useEffect, useState } from 'react';
import {Line} from 'react-chartjs-2';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

const UpdateOnstocks = () => {
  const [chartData, setChartData] = useState({});
  const [stockChartXValues, setEmployeeSalary] = useState([]);
  const [stockChartYValues, setstockChartYValues] = useState([]);
  const [StockSymbol, setStockSymbol] = useState('');

  // window.setInterval(() => {
  //   fetchStock();
  // }, 5000)

  let [stocks, setStocks] = useState([]);
  
  const [query, setQuery] = useState('')

  const [search, setSearch] = useState("");



 const fetchStock = () =>{
    const API_KEY = 'Y4NYBY6LJCDUVZQN';
    let StockSymbol = 'amzn';
    //setStockSymbol = StockSymbol;
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${query}&outputsize=compact&apikey=${API_KEY}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];
    console.log(stockChartYValuesFunction);

    fetch(API_Call)
      .then(
        function(response) {
          return response.json();
        }
      )
      .then(
        function(data) {

          for (var key in data['Time Series (Daily)']) {
            stockChartXValuesFunction.push(key);
            stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
          }

          setChartData({
            labels: stockChartXValuesFunction,
            datasets: [
              {
                label: "Price per day",
                data: stockChartYValuesFunction,
                backgroundColor: ["#9415157e"],
                borderWidth: 4,
                fill: false,
                 borderColor: "#9415157e",
                 legend: false
              }
            ]
          });

        }
      )
  };

  useEffect(() => {
    fetchStock();
  }, [query]);

  const updateSearch = e =>{
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

    return (
      <div className='search_stock'>
        <h1 className='text-center pb-4'>Search for any Stocks based on their symbols</h1>

        <Form inline onSubmit={getSearch} className='search_form justify-content-center'>
            <FormControl type="text" value={search} onChange={updateSearch} placeholder="Search for stocks" className="mr-sm-2 search_bar" />
            <Button  type="submit"  variant="outline-success">Search</Button>
        </Form>

        <div className='chart'>
          <Line
            data={chartData}
            text={StockSymbol}

            options={{
              title:{
                display:true,
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              },
              layout: {
                padding: {
                    top: 5,
                    left: 15,
                    right: 15,
                    bottom: 15
                }
            }
            }}
          />
        </div>
        
{/* 
        <Plot
          data={[
            {
              x: this.state.stockChartXValues,
              y: this.state.stockChartYValues,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'red'},
            }
          ]}
          layout={{width: 720, height: 440, title: 'A Fancy Plot'}}
        /> */}
      </div>
    )
  }


export default UpdateOnstocks;

// const UpdateOnstocks = ({heading, summary, image, URL, source, category}) =>{
//     // const stocks = `https://finnhub.io/api/v1/news?category=general&token=${API_KEY}`
//    // for exhange symbols https://finnhub.io/api/v1/stock/symbol?exchange=US&token

//   //  const API_KEY = 'bvp58r748v6s8216s8m0	'; 
//   //  const API_KEY = 'ed531f02a3msh6797870f4c910ddp19f532jsn69dc526334cc	';  // for yahoo
//     const API_KEY = 'ed531f02a3msh6797870f4c910ddp19f532jsn69dc526334cc'; // for aplha vantage

//    let [stocks, setStocks] = useState([]);
//    const [query, setQuery] = useState('goat')

//    useEffect(()=>{
//     getStocks()
//   }, [query]);
   
//   const getStocks = async ()=>{
//     const response = await fetch( `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=tsla&interval=5min&apikey=${API_KEY}`);
//     let data = await response.json();
//     console.log(data);
//     setStocks(data);
//   };

    
//     return(
        
       
//         <div className="col-lg-3 stock_item">
//             <div className="stock_head">
//                 <h1>{heading}</h1>
//                 <sub>{category}</sub>
//                 <img src={image} alt='images'/>
//                 <article>{summary}</article>
//                 <p>{source}</p>
//                 <a href={URL}></a>

//             </div>
            
           
//         </div>
            
//     )
// };

// export default UpdateOnstocks;
import React, { useEffect, useState } from 'react';
import {Line} from 'react-chartjs-2';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

const UpdateOnstocks = () => {

  const [chartData, setChartData] = useState({});
  const [query, setQuery] = useState('')

  const [search, setSearch] = useState("");

 const fetchStock = () =>{
    const API_KEY = 'Y4NYBY6LJCDUVZQN';
    let API_Call = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=demo=${API_KEY}`;
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

            options={{
              title:{
                display:true,
                fontSize:20
              },
              legend:{
                display:false,
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


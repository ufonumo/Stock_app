import React, { useEffect, useState } from 'react';
import Convert from "../components/convert";


const API_URL = 'https://api.exchangeratesapi.io/latest';

export default function Converter() {
    
    const [currencyOptions, setcurrencyOptions] = useState([]);
    const [searchCurrency, setsearchCurrency] = useState();
    const [resultCurrency, setresultCurrency] = useState();
    const [exchangeRate, setExchangeRate] = useState();
    const [amount, setAmount] = useState(1);
    const [amountFromCurrency, setamountFromCurrency] = useState(true);

    let toAmount, fromAmount
    if(amountFromCurrency){
        fromAmount = amount
        toAmount = amount * exchangeRate
    }else{
        toAmount = amount
        fromAmount = amount / exchangeRate
    }

    useEffect(() => {
       fetch(API_URL)
       .then(resp => resp.json())
       .then(data => {
           const firstCurrency  = Object.keys(data.rates)[0]
           setcurrencyOptions([data.base , ...Object.keys(data.rates)]);
           setresultCurrency(firstCurrency);
           setsearchCurrency(data.base)
           setExchangeRate(data.rates[firstCurrency]);

        })
       
    }, []);

    useEffect(() => {
        if(searchCurrency != null && resultCurrency != null){
            fetch(`${API_URL}?base=${searchCurrency}`)
            .then(resp => resp.json())
            .then(data => {
                setExchangeRate(data.rates[resultCurrency] ) ;
            })
        }
       
    }, [searchCurrency, resultCurrency])

    function handleFromAmountChange (e) {
        setAmount(e.target.value)
        setamountFromCurrency(true)
    }

    function handleToAmountChange (e) {
        setAmount(e.target.value)
        setamountFromCurrency(false)
    }

    return (
        <div className='search_stock text-center container'>
            <h2 className='pb-4'> Convert to any currency of your choice</h2>

            <Convert 
                currencyOptions={currencyOptions}
                selectedCurrency={searchCurrency}
                onChangeCurrency={e => setsearchCurrency(e.target.value)}
                amount={fromAmount}
                onChangeAmount={handleFromAmountChange}
            />
               <p className='equal'>===</p> 
            <Convert 
                currencyOptions={currencyOptions} 
                selectedCurrency={resultCurrency}
                onChangeCurrency={e => setresultCurrency(e.target.value)}
                amount={toAmount}
                onChangeAmount={handleToAmountChange}

            />
        </div>
    )
}

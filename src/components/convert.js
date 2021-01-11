import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form'


export default function Convert(props) {
    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        amount,
        onChangeAmount
    } = props
    return (
        <div>
            <input type='number' value={amount} onChange={onChangeAmount}/>
            <select value={selectedCurrency} onChange={onChangeCurrency} >
                {
                    currencyOptions.map(option =>(
                        <option key={option} value={option}> {option}</option>

                    ))
                }
            </select>

        </div>
    )
}

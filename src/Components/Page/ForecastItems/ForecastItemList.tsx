import React from 'react';
import { useState, useEffect } from 'react';
import { forecastItemModel } from '../../../Interfaces'
import ForecastItemCard from './ForecastItemCard';
import axios from 'axios';

function ForecastItemList() {
    
    const [forecastItems, setForecastItems] = useState<forecastItemModel[]>([]);

    // fetch
    /*useEffect (()=>{
      fetch("https://localhost:7138/WeatherForecast").then((response)=> response.json()).then((data)=>{
        console.log(data);
        setForecastItems(data);
      })
    },[]);*/
  

    // axios
    useEffect (()=>{
      axios.get("https://localhost:7138/WeatherForecast").then((data)=>{
       // console.log(data);
        setForecastItems(data.data);
      })
    },[]);


    return (
        <div className= "container row">
            {forecastItems.map((forecastItem,index)=> 
              ( 
                <ForecastItemCard forecastItem ={forecastItem} key= {index}/>
              ))
            }
        </div>
    )
}

export default ForecastItemList;

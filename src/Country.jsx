import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { json } from 'react-router-dom';



const Country = (props) => {
const [data,setData] = React.useState([]);

const fetchData = () =>{
    fetch("https://restcountries.com/v2/all?fields=name,region,area")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setData(data)
    });
}
React.useEffect(() =>{
    fetchData();
    
},[]);
  return Object.keys(props).lenght > 0 ? (
    <div style={{padding: "40px"}}>
     <h1>Country data</h1>
     
                <ul>
                    {data.map((props) => (
                        <li key={props.id}>{props[0].name},
                        <li>{props[0].region}</li>
                        <li>{props[0].area}</li>
                        <li>{props[0].independent}</li>
                        </li>
                        
                        
                    ))}
                </ul>
                {/* <ul>
                    {data.map((item) => (
                        <li key={item.id}>{item.region}</li>
                        
                        
                    ))}
                </ul> */}
     {/* <h2>First Name: {data.result[0].name.first}</h2> */}
      
    </div>
  ) : (
    <h1>Data pending....</h1>
  );
}

export default Country
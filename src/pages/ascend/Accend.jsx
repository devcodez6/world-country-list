import React from 'react'
import "./accend.css";


const CountryList = (props) => {
    const countryFilter = props.data
    .filter((countries) => {
        return countries.area < 65300
    })
    .sort((a, b) => {
        return a.countries-b.counries > 0 
       
                
    })

    .map((countries) => {
        return (
        <li className="main-li">
            <li className="liList-aa" key={props.id}> {countries.id}</li>
          <li className="liList-a" key={props.id}>Coutry: {countries.name}</li>
          <li className="liList-b" key={props.id}>Region: {countries.region}</li>
          <li className="liList-c" key={props.id}>Area: {countries.area}</li>
          <hr/>
          </li>
           )
        })
    // .map((countries)=> {
    //     return (
    //         <li>
    //            <li> {countries.name} </li>
    //             <li>{countries.region}</li>
    //         </li>
    //     )
    // })
  return <ul>{countryFilter}</ul>;
    
  
}

export default CountryList
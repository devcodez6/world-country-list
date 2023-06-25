import React from 'react'

const Oceania = (props) => {
    const countryFilter = props.data
    .filter((countries) => {
        return countries.region == Oceania
    })
    .sort((a, b) => {
        return a.countries-b.counries 
       
                
    })

    .map((countries) => {
        return (
        <li className="main-li">
            {/* <li className="liList-aa" key={props.id}> {countries.id}</li> */}
          <li className="liList-a" key={props.id}>Coutry: {countries.name}</li>
          <li className="liList-b" key={props.id}>Region: {countries.region}</li>
          <li className="liList-c" key={props.id}>Area: {countries.area}</li>
          <hr/>
          </li>
           )
        })
    
    
  return <ul>{countryFilter}</ul>;
    
  
}

export default Oceania
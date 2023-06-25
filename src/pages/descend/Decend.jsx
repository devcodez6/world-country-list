import React from 'react'

const Decend = (props) => {
    const countryFilter = props.data
    .filter((countries) => {
        return countries.area < 65300
    })
    .sort((a, b) => {
       
        return  b.countries - a.countries > 0
       
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

       
       
  return <ul>{countryFilter }</ul>;
    
  
}


export default Decend
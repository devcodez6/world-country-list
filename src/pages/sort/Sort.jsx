import React from 'react'
    import { useEffect } from 'react'
    import { useState } from 'react'
   import "./effect.css"


const Effect = () => {
    
    
    
        const [data, setData] = useState([])
    
    const apiGet = () => {    
    fetch("https://restcountries.com/v2/all?fields=name,region,area")
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        setData(json);
    });
    const CoutryList = props.data
    .filter((area) => {
      return area.
    })
    };
    
    useEffect(() => {
     
    },[])
    
    
      return (
        <div className="">
            <div className="main">
            <h2>Countries In The World</h2> <br/>
            </div>
            <button className="button" onClick={apiGet}>Country List</button>
            <h5>Click on the <i>-button-</i> to view the list</h5>
            <br/>
            <div className="list">
                <ul className="List">
                    {data.map((props) => (
                      <li className="main-li">
                        <li className="liList-a" key={props.id}>Coutry: {props.name}</li>
                        <li className="liList-b" key={props.id}>Region: {props.region}</li>
                        <li className="liList-c" key={props.id}>Area: {props.area}</li>
                        <hr/>
                        </li>
                        
                        
                        
                    ))}
                </ul>
               
                
            </div>
        </div>
      );
    };

export default Effect
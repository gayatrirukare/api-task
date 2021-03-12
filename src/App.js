import React, { useState, useEffect, useMemo } from "react";
import Table from './Table';
import "./App.css";
import Market from './Market'
import Details from './Details'
import axios from 'axios' 
import styles from './mystyle.module.css'; 

function App() {
  const [data, setData] = useState([]);
  const [details, setDetails] = useState([]);
  const columns= useMemo(() =>
   [
      {
        Header : "Market List",
        columns: [
            
            {
              Header: "Market Name",
              accessor: "marketname"
            },
            {
              Header : "Distance From ZIP",
              accessor: "distance"
            }
          ]

  }])
  function getZip(zip){

    axios.get ('https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip='+zip)
        .then(response => {
          dataFromMarket(response.data.results)           
        })
        .catch(error => {
           console.log(error)
        })
  };
  function dataFromMarket(results){
  
    var newArr = results.map(function(item){
      
      return {
          id: item.id,
          marketname: item.marketname.slice(item.marketname.indexOf(" ")+1, item.marketname.length),
          distance:item.marketname.split(" ")[0]
        };
   });
    setData(newArr)
  }; 
  function marketId(id) {
    axios.get ('https://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id='+id)
        .then(response => {
          setDetails(response.data.marketdetails)   
        })
        .catch(error => {
           console.log(error)
        })
    
  }  
  return (
    <div className="App">
        < Market getZipCode={getZip}/>
      <div className={styles.tableDetail}>
            <Table columns={columns} data={data} showDetails= {marketId}/>
            <Details details={details} />
        </div>
    </div>
  );
}
export default App;

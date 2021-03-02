import React, { useState, useEffect, useMemo } from "react";
import Table from "./Table";
import "./App.css";
import Market from './Market'
import Details from "./Details"

function TableApp() {
  const [data, setData] = useState([]);

  function passData(results){
  
    var newArr = results.map(function(item){
      
      return {
          id: item.id,
          marketname: item.marketname.slice(item.marketname.indexOf(" ")+1, item.marketname.length),
          distance:item.marketname.split(" ")[0]
        };

   });
    setData(newArr)
  }
  
  const columns= useMemo(() =>
   [
      {
        Header : "Market Information",
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
  
  return (
    <div className="App">
      < Market dataFromMarket={passData} />
      <Table columns={columns} data={data} showDetails={Details.getData}/>
      <Details/>
      
    </div>
  );

}

export default TableApp;
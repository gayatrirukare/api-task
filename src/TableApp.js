import React, { useState, useEffect, useMemo } from "react";
import Table from "./Table";
import "./App.css";
import Market from './Market'

function TableApp() {
  
  const [data, setData] = useState([]);

  function passData(results){
    setData(results)
  }
  
  const columns= useMemo(() =>
   [
      {
        Header : "Market Information",
        columns: [
            {
              Header: "ID",
              accessor: "id"
            },
            {
              Header: "Market Name",
              accessor: "marketname"
            }
          ]

  }])
  
  return (
    <div className="App">
      < Market dataFromMarket={passData} />
      <Table columns={columns} data={data} />
      
    </div>
  );

}

export default TableApp;
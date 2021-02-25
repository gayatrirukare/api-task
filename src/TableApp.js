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
        Header : "group",
        columns: [
            {
              Header: "ID",
              accessor: "id"
            },
            {
              Header: "Name",
              accessor: "marketname"
            }
          ]

  }])
  
  return (
    <div className="App">
      < Market dataFromMarket={passData} a="c"/>
      <Table columns={columns} data={data} />
      
    </div>
  );

}

export default TableApp;
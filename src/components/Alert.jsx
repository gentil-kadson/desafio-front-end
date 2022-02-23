// import AlertItem from "./AlertItem";
import React from "react";
import "./Alert.css";
import { useState } from "react";

function Alert() {
  const [ isData, setIsData ] = useState([])

  fetch("https://621584abc9c6ebd3ce2a353c.mockapi.io/api/ps/alerts")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setIsData(data)
    });

  console.log(isData);

  return (
    <aside id="warnings">
      <h1 className="warning-title">Alertas</h1>
      <div className="alerts-container">
        {/* { alerts.map(alert => {
            <AlertItem message={alert.message} tags={alert.tags} value={alert.value} total={alert.total}/>
        }) } */}
      </div>
    </aside>
  );
}

export default Alert;

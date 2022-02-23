import AlertItem from "./AlertItem";
import React from "react";
import "./Alert.css";
import { useState, useEffect } from "react";

function Alert() {
  const [ isData, setIsData ] = useState([])

  useEffect(() => {
    fetch("https://621584abc9c6ebd3ce2a353c.mockapi.io/api/ps/alerts")
    .then(response => {
      return response.json()
    })
    .then(data => {
      setIsData(data.data.alerts)
    });
  }, [])


  console.log(isData);

  return (
    <aside id="warnings">
      <h1 className="warning-title">Alertas</h1>
      <div className="alerts-container">
        { isData.map((alert, index) => {
          return <AlertItem key={index+1} message={alert.message} tags={alert.tags} value={alert.value} total={alert.total} />
        })}
      </div>
    </aside>
  );
}

export default Alert;

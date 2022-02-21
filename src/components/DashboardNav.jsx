import React from "react";
import dashboard from "../assets/images/dashboard.svg";
import "./DashboardNav.css";
// import DoritosOne from '../assets/images/doritos1.svg'
// import DoritosTwo from '../assets/images/doritos2.svg'

function DashboardNav() {
  return (
    <div id="dashboard-nav">
      {/* <img src={DoritosOne} alt="doritos1" />
      <img src={DoritosTwo} alt="doritos2" /> */}
      <div className="aspects-container">
        <div className="aspects-header">
          <img src={dashboard} alt="dashboard-header-icon" />
          <h1 className="aspects-header-title">Resumo do faturamento</h1>
        </div>

        <div className="breadcrumb-container">
          <p>Breadcrumb aqui</p>
        </div>

        <div className="form-selector-container">
          <form action="/" method="get">
            <select name="person" id="person">
              <option value="none">Status da nota</option>
              <option value="p1">Person 1</option>
              <option value="p2">Person 2</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DashboardNav;

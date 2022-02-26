import React from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Details from "./components/Details";
import FirstGraphicData from "./components/FirstGraphicData";
import LoginForm from "./components/LoginForm";
import { Route, Routes} from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/" element={<div id="form-container"> <LoginForm /> </div>}/>

        <Route path="/graphics" element={<Dashboard> <FirstGraphicData/> </Dashboard>}></Route>

        <Route path="/details" element={<Dashboard> <Details /> </Dashboard>}/>
      </Routes>
  );
}

export default App;

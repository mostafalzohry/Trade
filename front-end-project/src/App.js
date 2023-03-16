import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import React, { useState } from "react";
import Nav from "./Components/Nav";

import Home from "./Components/Home/Home";

import Regisiterpage from "./Pages/registerpage";
import Loginpage from "./Pages/loginpage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        
        <Routes>



          <Route path="/home" exact element={<Home/>} />

          <Route path="/" exact element={<Home/>} />

          <Route path="/register"  exact element={<Regisiterpage/>} />

          <Route path="/login"exact element={<Loginpage/>} />

       

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

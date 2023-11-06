import React from "react";
import {Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Solarwinds from "./pages/Solarwinds";
import HomePage from "./pages/HomePage";
import { Contact } from "./pages/Contact";
import Bigfix from "./pages/Bigfix";
import { AboutUs } from "./pages/AboutUs";
import { Products } from "./pages/Products.js";

function App() {
  return (
    <div className="App">
      <>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Products" element={<Products   />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/SolarWinds" element={<Solarwinds />} />
            <Route path="/bigfix" element={<Bigfix />} />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Routes>
      </>
    </div>
  );
}

export default App;

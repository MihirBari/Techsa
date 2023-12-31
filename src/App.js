import React from "react";
import {Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Solarwinds from "./pages/Solarwinds";
import HomePage from "./pages/HomePage";
import { Contact } from "./pages/Contact";
import BigFix from "./pages/Bigfix.js";
import { AboutUs } from "./pages/AboutUs";
import { Products } from "./pages/Products.js";
import { FreshWorksPage } from "./pages/FreshWorksPage.js";
import { TeanablePage } from "./pages/TeanablePage.js";
import { ArmisPage } from "./pages/ArmisPage.js";
import { ResourcePage } from "./pages/ResourcePage.js";
import { Career } from "./pages/Career.js";
import { Database } from "./component/SolarWinds/Database.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
 //window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <div className="App">
      <>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Products" element={<Products   />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Career" element={<Career />} />
            <Route path="/SolarWinds" element={<Solarwinds />} />
            <Route path="/bigfix" element={<BigFix />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/FreshWorks" element={<FreshWorksPage />} />
            <Route path="/Tenable" element={<TeanablePage />} />
            <Route path="/Armis" element={<ArmisPage />} />
            <Route path="/Resource" element={<ResourcePage />} />
            <Route path="/Database" element={<Database />} />
          </Routes>

          <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" />
      </>
    </div>
  );
}

export default App;

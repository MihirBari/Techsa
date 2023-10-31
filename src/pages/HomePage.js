import React from "react";
import { NavBar } from "../component/NavBar";
import { Banner } from "../component/Banner";
import { Skills } from "../component/Points/skills";
import { Products } from "../component/Products";
import "../App.css";
import { Image } from "../component/Image/Image";
import { GeoLocationDisplay } from "../component/GeoLocationDisplay";
import { Footer } from "../component/Footer";

const HomePage = () => {
  return (
    <>
      <div className="App">
        <NavBar />
       
        <Banner />
        <br/>
        <br/>
        <Skills />
        <Products />
        <Image />
        <br>
        </br>
        <br />
        <GeoLocationDisplay />
        <br/>
        <br/>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;

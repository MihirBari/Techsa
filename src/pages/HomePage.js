import React, { useState, useEffect } from "react";
import { NavBar } from "../component/NavBar";
import { Banner } from "../component/Banner";
import { Skills } from "../component/Points/skills";
import { Products } from "../component/Products/Products";
import "../App.css";
import { Image } from "../component/Image/Image";
import { GeoLocationDisplay } from "../component/GeoLocationDisplay";
import { Footer } from "../component/Footer";
import { Loader } from "../component/loader";
import Box from "../assets/img/box.svg";
import HeroClaravineAnimation from "../component/HeroClaravineAnimation" 

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="App">
          <NavBar />
          <Banner />
     
          <img
            style={{
              height: "450px",
              width: "350px",
              display: "block",
              margin: "auto",
            }}
            src={Box}
            alt=""
          />
          {/* <HeroClaravineAnimation /> */}
          <br />
          <br />
          <Skills />
          <Products />
          {/* <Image /> */}
          <br></br>
          <br />
          <GeoLocationDisplay />
          <br />
          <br />
          <Footer />
        </div>
      )}
    </>
  );
};

export default HomePage;

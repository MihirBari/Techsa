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

import React, { useState, useEffect } from "react";
import { NavBar } from "../component/NavBar";
import { Banner } from "../component/Banner";
import { Skills } from "../component/Points/skills";
import { Products } from "../component/Products/Products";
import "../App.css";
import { GeoLocationDisplay } from "../component/GeoLocationDisplay";
import { Footer } from "../component/Footer";
import { Loader } from "../component/loader";

import HeroClaravineAnimation from "../component/HeroClaravineAnimation" 
import { Helmet } from "react-helmet";

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
              <Helmet>
            <title>Home | Techsa Services Pvt Ltd.</title>
            <meta name="description" content="Description of your About Us page" />
          </Helmet>
          <NavBar />
          <Banner />
          {/* <HeroClaravineAnimation /> */}
          <br />
          <br />
          <Skills />
          <Products />
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

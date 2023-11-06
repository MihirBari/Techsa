import React, { useState, useEffect } from "react";
import { NavBar } from "../component/NavBar";
import { Banner } from "../component/Banner";
import { Skills } from "../component/Points/skills";
import { Products } from "../component/Products";
import "../App.css";
import { Image } from "../component/Image/Image";
import { GeoLocationDisplay } from "../component/GeoLocationDisplay";
import { Footer } from "../component/Footer";
import { Loader } from "../component/loader"; // Assuming you have a loader component

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  // Simulate a loading delay (you can replace this with actual loading logic)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Set the time you want for loading to complete
  }, []);

  return (
    <>
      {loading ? (
        // Display the loader while the page is loading
        <Loader />
      ) : (
        // When loading is done, display the main content
        <div className="App">
          <NavBar />
          <Banner />
          <br />
          <br />
          <Skills />
          <Products />
          <Image />
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

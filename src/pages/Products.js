import React, { useEffect, useState } from "react";
import { NavBar } from "../component/NavBar";
import { Loader } from "../component/loader";
import { Footer } from "../component/Footer";
import { Solarwinds } from "./ProductPage/Solarwinds";
import { BigFix } from "./ProductPage/BigFix";
import { FreshWorks } from "./ProductPage/FreshWorks";
import { Tenable } from "./ProductPage/Tenable";
import { Armis } from "./ProductPage/Armis";
import Aos from "aos";
import "aos/dist/aos.css";
export const Products = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="App">
            <NavBar />
            <div className="ProductsPage">
              <Solarwinds />
              <div data-aos="fade-left"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600">
              <BigFix />
              </div>
              <div data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600">
              <FreshWorks />
              </div>
              <div data-aos="fade-left"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600">
              <Tenable />
              </div>
              <div data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600">
              <Armis />
              </div>
            </div>
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

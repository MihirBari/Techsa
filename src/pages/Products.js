import React, { useEffect, useState } from "react";
import { NavBar } from "../component/NavBar";
import { Loader } from "../component/loader";
import { Footer } from "../component/Footer";
import { Solarwinds } from "./ProductPage/Solarwinds";
import { BigFix } from "./ProductPage/BigFix";
import { FreshWorks } from "./ProductPage/FreshWorks";
import { Tenable } from "./ProductPage/Tenable";
import { Armis } from "./ProductPage/Armis";
export const Products = () => {
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
        <>
          <div className="App">
            <NavBar />
            <div className="ProductsPage">
              <Solarwinds />
              <BigFix />
              <FreshWorks />
              <Tenable />
              <Armis />
            </div>
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

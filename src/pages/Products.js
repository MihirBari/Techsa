import React, { useEffect, useState } from "react";
import { NavBar } from "../component/NavBar";
import { Loader } from "../component/loader";
import { Footer } from "../component/Footer";
import { Solarwinds } from "./ProductPage/Solarwinds";
import { BigFix } from "./ProductPage/BigFix";
import { FreshWorks } from "./ProductPage/FreshWorks";
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
            </div>
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

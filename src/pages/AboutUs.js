import React, { useEffect, useState } from "react";
import { NavBar } from "../component/NavBar";
import { Loader } from "../component/loader";
import { Footer } from "../component/Footer";
import { About } from "../component/About.js";

export const AboutUs = () => {
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
        <div>
          <NavBar />
          <section>
            <div className="App">
              <About />
            </div>
          </section>
          <Footer />
        </div>
      )}
    </>
  );
};

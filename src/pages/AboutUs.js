import React, { useEffect, useState } from "react";
import { NavBar } from "../component/NavBar";
import { Loader } from "../component/loader";
import { Footer } from "../component/Footer";
import { About } from "../component/About/About";
import { Helmet } from 'react-helmet';

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
           <Helmet>
            <title>About Us | Techsa Services Pvt Ltd.</title>
            <meta name="description" content="Description of your About Us page" />
          </Helmet>

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

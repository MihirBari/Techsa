import React, { useEffect, useState } from "react";
import { NavBar } from "../component/NavBar";
import { Loader } from "../component/loader";
import { Footer } from "../component/Footer";

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
            <div className="App">AboutUs vhudhus
            <br />
            jqwo</div>
          </section>
          <Footer />
        </div>
      )}
    </>
  );
};

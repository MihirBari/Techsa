import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export const GeoLocationDisplay = () => {
  const gifUrl = require("../assets/img/World.gif");
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
    data-aos="fade-zoom-in"
    data-aos-offset="200"
    data-aos-easing="ease-in-sine"
    data-aos-duration="600"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2 style={{ textAlign: "center" }}>Our Clients</h2>
      <img
        style={{ width: "50%", height: "50%", margin: "auto" }}
        src={gifUrl}
        alt="Local GIF"
      />
    </div>
  );
};

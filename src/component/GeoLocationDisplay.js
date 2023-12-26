import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export const GeoLocationDisplay = () => {
  const gifUrl = require("../assets/img/worldd.gif");
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
      <h2 style={{ textAlign: "center", fontSize:'45px',fontWeight:'700',color:'red'}}> Customers Presence</h2>
      <img className="presence"
        src={gifUrl}
        alt="Local GIF"
      />
    </div>
  );
};

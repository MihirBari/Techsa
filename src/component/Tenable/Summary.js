import React from "react";
import img1 from "../../assets/Tenable.png";

export const Summary = () => {
  return (
    <div className="ten">
      <div>
        <img src={img1} alt="" />
      </div>
      <div>
        <p>
          SolarWinds stands out as the sole unified platform that seamlessly
          combines monitoring, observability, and service management. It
          empowers users with comprehensive insight into their IT
          infrastructure, enabling proactive identification of bottlenecks
          across the entire system.
        </p>
      </div>
    </div>
  );
};
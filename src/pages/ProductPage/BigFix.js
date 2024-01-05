import React from "react";
import projImg1 from "../../assets/img/136048.png";
import { Link } from "react-router-dom";

export const BigFix = () => {
  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>BIGFIX</h2>
      <div className="product-Big">
        <div className="InCenter">
          <p>
            BigFix provides a unified architecture, leveraging AI technology, to
            effectively manage and assure compliance of all servers, desktops,
            and mobile devices, whether they are in the office, at home, or in
            the cloud.
          </p>
          <Link to="/bigfix">
            <button>Read More</button>
          </Link>
        </div>
        <div>
          <img src={projImg1} alt="BigFix" />
        </div>
      </div>
    </>
  );
};

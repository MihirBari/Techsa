import React from "react";
import projImg1 from "../../assets/Tenable.png";
import { Link } from "react-router-dom";

export const Tenable = () => {
  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>TENABLE</h2>
      <div className="product-Big">
        <div>
          <p>
            Your attack surface is growing, always changing and more
            interconnected than ever. With specialized security tools offering
            an incomplete picture, it can feel impossible to answer the
            question, “How secure are we?” Tenable’s approach to exposure
            management combines visibility across all facets of the attack
            surface with business context so you can accurately understand your
            organization’s cyber risk and prioritize mitigation.
          </p>
          <Link to="/Tenable">
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

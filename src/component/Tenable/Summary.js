import React from "react";
import img1 from "../../assets/Tenable.png";
import { Helmet } from "react-helmet";

export const Summary = () => {
  return (
    <div className="ten">
      <Helmet>
        <title>Tenable | Techsa Services Pvt Ltd.</title>
        <meta name="description" content="Description of your About Us page" />
      </Helmet>
      <div>
        <img src={img1} alt="" />
      </div>
      <div>
        <p>
          Your attack surface is growing, always changing and more
          interconnected than ever. With specialized security tools offering an
          incomplete picture, it can feel impossible to answer the question,
          “How secure are we?” Tenable’s approach to exposure management
          combines visibility across all facets of the attack surface with
          business context so you can accurately understand your organization’s
          cyber risk and prioritize mitigation.
        </p>
      </div>
    </div>
  );
};

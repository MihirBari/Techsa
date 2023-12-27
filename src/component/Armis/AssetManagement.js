import React from "react";
import { Module } from "./Module";
import img1 from "../../assets/compliance/Pass+audits+and+avoid+fines+with+continuous+compliance.png";
import img2 from "../../assets/compliance/Improve+visibility+and+reduce+risk.png";
import img3 from "../../assets/compliance/Prioritize+remediation+with+compliance.png";

const modules = [
  {
    image: img1,
    title:
      `Siloed Asset Management`
      ,
    description: `
    The average security organization has 76 security tools to manage. Each of these tools generates independent data points, leading to a fragmented view of security.
    `,
  },
  {
    image: img2,
    title:
      "No Time for Manual and Complicated Reports or Audits",
    description: `
    There are hundreds of security controls, as defined by common security frameworks by organizations such as the National Institute of Standards and Technology (NIST) and the Center for Internet Security (CIS). However, identifying gaps in security controls can be difficult, and reporting is made almost impossible.
  `,
  },
  {
    image: img3,
    title: "Constant Change",
    description: `
    The attack surface is constantly changing as assets are added or removed and as OS, apps, configurations and connections evolve. In a rapidly evolving, perimeter-less world, organizations must continuously see, secure, protect and manage all critical assets.
  `,
  },
];

export const AssetManagement = () => {
  return (
    <div className="summary-module-container">
      <div className="sum">
        <h2 style={{ marginBottom: "20px" }}>Armis Centrix™ for Asset Management and Security</h2>
        <span>
        Complete inventory of all asset types to see and secure your attack surface
        </span>
      </div>

      <div className="mod">
        {modules.map(({ image, title, description }, index) => (
          <div key={index}>
            <Module image={image} title={title} description={description} />
          </div>
        ))}
      </div>
    </div>
  );
};

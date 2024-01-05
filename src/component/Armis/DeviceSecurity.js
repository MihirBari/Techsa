import React, { useEffect } from "react";
import { Module } from "./Module";
import img1 from "../../assets/compliance/Pass+audits+and+avoid+fines+with+continuous+compliance.png";
import img2 from "../../assets/compliance/Improve+visibility+and+reduce+risk.png";
import img3 from "../../assets/compliance/Prioritize+remediation+with+compliance.png";
import Aos from "aos";
import "aos/dist/aos.css";

const modules = [
  {
    image: img1,
    title:
      `Diverse Devices`
      ,
    description: `Medical devices exhibit intricate and varied designs, functionalities, and communication protocols, making them challenging to manage uniformly. From intricate imaging systems to wearable monitors, this diversity complicates the implementation of cohesive security measures, as each device type requires tailored approaches for protection.`,
  },
  {
    image: img2,
    title:
      "Sensitivity and Restriction",
    description: `
    Some medical devices, due to their sensitivity or critical function, may be too delicate to undergo routine security scans or updates, which are crucial for maintaining cybersecurity. Balancing the need for security with the imperative to avoid disruptions to patient care and device functionality poses a significant challenge.
  `,
  },
  {
    image: img3,
    title: "Network Visibility",
    description: `
    Networks can have various blindspots where assets can disappear and fall out of compliance. Maintaining effective network security and asset visibility is a balancing act.
  `,
  },
];

export const DeviceSecurity = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="summary-module-container"
    data-aos="fade-left"
    data-aos-offset="200"
    data-aos-easing="ease-in-sine"
    data-aos-duration="600">
      <div className="sum">
        <h2 style={{ marginBottom: "20px" }}>Armis Centrix™ for Medical Device Security</h2>
        <span>
        Complete visibility and security for all medical devices, clinical assets, and the entire healthcare ecosystem.
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

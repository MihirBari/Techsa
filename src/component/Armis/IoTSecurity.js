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
      `Lack of Discovery `
      ,
    description: `You can’t protect what you can’t see. Complex OT networks need a holistic approach to asset discovery, including safe passive and active scanning.
    Discover and locate up to 5x more assets than traditional tools find- managed and unmanaged- and create real time, complete inventories without manual intervention by IT teams.`,
  },
  {
    image: img2,
    title:
      "Out of Control IT/OT Convergence",
    description: `
    Armis delivers 10x deeper contextual asset awareness, streamlines workflows and speeds up remediation efforts. With easy access to granular industrial control systems (ICS) and OT device details you can prioritize and take action on risk-related insights and their connections.
  `,
  },
  {
    image: img3,
    title: "Ransomware Attacks and Data Breaches",
    description: `
    Reputation, Trust and ROI are all impacted by the growing attacks on critical infrastructure. Implementing Armis for OT instantly helps to improve your cyber and operational resilience.
  `,
  },
];

export const IoTSecurity = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="summary-module-container"  
    data-aos="fade-right"
    data-aos-offset="200"
    data-aos-easing="ease-in-sine"
    data-aos-duration="600">
      <div className="sum">
        <h2 style={{ marginBottom: "20px" }}>Armis Centrix™ for OT/ IoT Security</h2>
        <span>A powerful cybersecurity solution specifically designed to see, protect, manage and optimize all OT, IoT and ICS assets, systems, and processes in your environment.
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

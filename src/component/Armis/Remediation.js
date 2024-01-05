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
      `Inherent Security Control Limitations`
      ,
    description: `Medical devices are often un-agentable or unscannable, can’t install security software or leverage traditional security methods on them, and are unable be patched or modified in any way (including disabling services or otherwise normal operating system tasks).`,
  },
  {
    image: img2,
    title:
      "Legacy Devices",
    description: `
    Many healthcare institutions continue to rely on outdated medical devices with limited security features, creating a vulnerability gap as these devices lack robust defenses against modern cyber threats. Integrating these legacy devices into a cohesive security strategy requires striking a balance between preserving functionality, implementing necessary safeguards, and cost.
  `,
  },
  {
    image: img3,
    title: "Diverse Device Profiles",
    description: `
    The proliferation of interconnected medical devices, each with its unique operating system and communication protocols, poses a challenge in maintaining a standardized security framework.
  `,
  },
];

export const Remediation = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="summary-module-container"
    data-aos="fade-right"
    data-aos-offset="200"
    data-aos-easing="ease-in-sine"
    data-aos-duration="600"
    >
      <div className="sum">
        <h2 style={{ marginBottom: "20px" }}>Armis Centrix™ for Vulnerability Prioritization and Remediation</h2>
        <span>
        Go beyond vulnerability scanning to address the full cyber risk management lifecycle. Consolidate, prioritize and remediate all vulnerabilities based on potential risk to the business.
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

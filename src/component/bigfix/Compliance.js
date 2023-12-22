import React from "react";
import { Module } from "./Module";
import img2 from "../../assets/compliance/Improve+visibility+and+reduce+risk.png";
import img3 from "../../assets/compliance/Prioritize+remediation+with+compliance.png";

const modules = [
  {
    image: img2,
    title:
      "Endpoint Management Solution",
    description: `
    Support a large variety of endpoints including cloud, server, and desktop 
    devices, as well as specialized equipment such as point-of-sale (POS) devices,
     ATMs and self-service kiosks. The device discovery capabilities find all endpoints
      that you know about as well as previously unknown endpoints in your environment. 
      You can even quarantine endpoints that are out of compliance. Plus, it’s easy to deploy patches to
       distributed and virtual endpoints using multiple versions of the top twelve operating systems 
       (e.g. Windows, UNIX, Linux and MacOS etc.), 
    as well as third-party applications and policy-based patches - regardless of connection type or status.
  `,
  },
  {
    image: img3,
    title: "Continuous Compliance Monitoring",
    description: `
    Track the effectiveness of compliance efforts and quickly identify security exposures. Endpoint compliance status vs deployed policies is continuously collected, aggregated and reported on using a powerful Compliance Analytics Engine. Multiple reports are available out-of-the-box on security configurations, patching and vulnerabilities – showing current and historical trending – for entire deployments or for a single endpoint.
  `,
  },
];

export const Compliance = () => {
  return (
    <div className="summary-module-container">
      <div className="summary">
        <h2 style={{ marginBottom: "20px", textAlign:'center' }}> BigFix Compliance</h2>
        <span style={{textAlign:'center' }}>
          BigFix Compliance can help organizations both protect endpoints and
          meet security compliance requirements and policies.
        </span>
      </div>
    </div>
  );
};

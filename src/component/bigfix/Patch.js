import React from 'react';
import { Module } from './Module';
import img1 from "../../assets/inventory/Reduce+audit+fines+and+software+costs.png"
import img2 from "../../assets/inventory/Deliver+comprehensive+visibility.png"

const modules = [
  {
    image: img1,
    title: "Patch Management",
    description: ` BigFix  includes ready-to-deploy patch content for hundreds of different operating systems and third-party applications, eliminating the associated development and test time of IT staff often required by other solutions.`,
  },
  {
    image: img2,
    title: "Patch Compliance and reporting",
    description: `Track the effectiveness of compliance efforts and quickly identify security exposures. Endpoint compliance status vs deployed policies is continuously collected, aggregated and reported on using a powerful Compliance Analytics Engine. Multiple reports are available out-of-the-box on security configurations, patching and vulnerabilities – showing current and historical trending – for entire deployments or for a single endpoint.`,
  },
  
];

export const Patch = () => {
  return (
    <div className="summary-module-container">
      <div className="summary">
        <h2 style={{marginBottom:"20px"}}>BigFix Patch Management</h2>
        <span>
        Extend the power of BigFix Patch with the industry's fastest vulnerability remediation for Tenable, Rapid7 and Qualys users.

        </span>
      </div>

      <div className='module'>
         {modules.map(({image, title, description }, index) => (
          <div key={index} >
            <Module image={image} title={title} description={description} />
          </div>
        ))}
      </div>
    </div>
  );
};

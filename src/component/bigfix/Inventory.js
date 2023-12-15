import React from 'react';
import { Module } from './Module';
import img1 from "../../assets/inventory/Reduce+audit+fines+and+software+costs.png"
import img2 from "../../assets/inventory/Deliver+comprehensive+visibility.png"
import img3 from "../../assets/inventory/Improve+security+posture.png"
import img4 from "../../assets/inventory/Increase+efficiency+by+streamlining.png"

const modules = [
  {
    image: img1,
    title: "Reduce audit fines and software costs",
    description: `Discovers licensed and unlicensed software with drill-down granularity to reduce annual software expenditures and vendor-imposed software compliance penalties. Uses a consolidated console, single server, and single intelligent agent to compare discovered software against the number of available licenses. This visibility into software license consumption helps you plan software budgets based on inventory and usage trends. It also helps you plan for software upgrades and migrations by enabling administrators to determine which endpoints meet prerequisites.`,
  },
  {
    image: img2,
    title: "Comprehensive Software Audit",
    description: `
    Provides a comprehensive, real-time view of all assets to ensure software audit readiness across hundreds of thousands of endpoints. Includes information on over 9,100 software publishers, 38,000 software products and 105,000 application signatures and can easily accommodate homegrown and proprietary applications. Plus, it supports six different forms of discovery including a Software Identification Catalog (ISO 19770 enabled), customized template signatures, an installation registry, vendor-specific discover solutions, ISO SWID tags and hardware discovery
  `,
  },
  {
    image: img3,
    title: " Improve security posture",
    description: `
    Enables you to set security compliance policies for software and system configurations – helping IT and Security organizations collaborate to secure the enterprise by monitoring for unauthorized software while removing software which poses a security threat. Provides reports on the health and compliance of software assets in minutes, regardless of the size of the environment.
  `,
  },
  {
    image: img4,
    title: "Efficient Inventory Automation",
    description: `
    Automates inventory operations using a single solution – enabling IT organizations to reduce the number of hours and resources spent on inventory activities. Provides the ability to handle hundreds of thousands of endpoints using a single HCL BigFix server and intelligent agent, which reduces hardware and staffing costs compared to traditional asset management methods.
  `,
  },
];

export const Inventory = () => {
  return (
    <div className="summary-module-container">
      <div className="summary">
        <h2 style={{marginBottom:"20px"}}> BigFix Inventory</h2>
        <span>
        Maintain software audit readiness and improve security with asset inventory and software usage analysis.
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

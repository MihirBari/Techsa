import React from 'react';
import { Module } from './Module';
import img1 from "../../assets/workspace/One+solution+to+manage+and+secure+all+end+user+workspaces.png"
import img2 from "../../assets/workspace/Reduce+workstation+management+complexity+and+cost.png"
import img3 from "../../assets/workspace/Manage+mobile+devices+alongside+traditional+workstations.png"

const modules = [
  {
    image: img1,
    title: "Unified Endpoint Management",
    description: `Maintain real-time visibility into all desktops, laptops, and mobile devices through a single pane of glass. Reduce cyber risk and optimize endpoint management practices across all end user devices.`,
  },
  {
    image: img2,
    title: "Client Device Lifecycle Management",
    description: `
    Address the full system lifecycle of client devices including asset discovery, 
    software distribution, operating system deployment/updates, multiplatform matching, vulnerability 
    management, power management and remote desktop control. Enable employee self-service options to simplify 
    resolution of common issues while reducing the number of costly service desk tickets.
  `,
  },
  {
    image: img3,
    title: "Centralized Endpoint Management",
    description: `
    Manage up to 300,000 end user workstation devices -- desktops, laptops, and mobile devices -- using a single HCL BigFix Enterprise Server.  Maintain full visibility to all endpoint devices from a single management interface which improves security and simplifies IT management. 
  `,
  },
];

export const Workspace = () => {
  return (
    <div className="summary-module-container">
      <div className="summary">
        <h2 style={{marginBottom:"20px",textAlign:'center' }}> BigFix Workspace</h2>
        <span style={{textAlign:'center' }}>
        Improve employee experience, reduce help desk calls, and
         enhance endpoint security regardless of employee location, connection
        </span>
      </div>

      <div className='module'>
      <h2 style={{marginBottom:"20px",textAlign:'center' }}> BigFix Inventory</h2>
        <span style={{textAlign:'center' }}>
        Maintain software audit readiness and improve security with asset inventory and software usage analysis.
        </span>
      </div>
    </div>
  );
};

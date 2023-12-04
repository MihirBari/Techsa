import React from 'react';
import { Module } from './Module';
import img1 from "../../assets/workspace/One+solution+to+manage+and+secure+all+end+user+workspaces.png"
import img2 from "../../assets/workspace/Reduce+workstation+management+complexity+and+cost.png"
import img3 from "../../assets/workspace/Manage+mobile+devices+alongside+traditional+workstations.png"

const modules = [
  {
    image: img1,
    title: "One solution to manage and secure all end user workspaces",
    description: `Maintain real-time visibility into all desktops, laptops, and mobile devices through a single pane of glass. Reduce cyber risk and optimize endpoint management practices across all end user devices.`,
  },
  {
    image: img2,
    title: "Reduce workstation management complexity and cost",
    description: `
    Address the full system lifecycle of client devices including asset discovery, 
    software distribution, operating system deployment/updates, multiplatform matching, vulnerability 
    management, power management and remote desktop control. Enable employee self-service options to simplify 
    resolution of common issues while reducing the number of costly service desk tickets.
  `,
  },
  {
    image: img3,
    title: "Manage mobile devices alongside traditional workstations",
    description: `
    Manage up to 300,000 end user workstation devices -- desktops, laptops, and mobile devices -- using a single HCL BigFix Enterprise Server.  Maintain full visibility to all endpoint devices from a single management interface which improves security and simplifies IT management. 
  `,
  },
];

export const Workspace = () => {
  return (
    <div className="summary-module-container">
      <div className="summary">
        <h2 style={{marginBottom:"20px"}}> BigFix Workspace</h2>
        <span>
        Improve employee experience, reduce help desk calls, and
         enhance endpoint security regardless of employee location, connection
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

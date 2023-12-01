import React from 'react';
import { Module } from './Module';

const modules = [
  {
    title: "One solution to manage and secure all end user workspaces",
    description: `Maintain real-time visibility into all desktops, laptops, and mobile devices through a single pane of glass. Reduce cyber risk and optimize endpoint management practices across all end user devices.`,
  },
  {
    title: "Reduce workstation management complexity and cost",
    description: `
    Address the full system lifecycle of client devices including asset discovery, 
    software distribution, operating system deployment/updates, multiplatform matching, vulnerability 
    management, power management and remote desktop control. Enable employee self-service options to simplify 
    resolution of common issues while reducing the number of costly service desk tickets.
  `,
  },
  {
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
        {modules.map(({ title, description }, index) => (
          <div key={index} >
            <Module title={title} description={description} />
          </div>
        ))}
      </div>
    </div>
  );
};

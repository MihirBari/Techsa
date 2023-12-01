import React from 'react';
import { Module } from './Module';

const modules = [
  {
    title: "SolarWinds",
    description: `SolarWinds stands out as the sole unified platform that seamlessly combines monitoring, observability, and service management. It empowers users with comprehensive insight into their IT infrastructure, enabling proactive identification of bottlenecks across the entire system.`,
  },
  {
    title: "BigFix",
    description: `BigFix is the result of IBM's purchase of BigFix, Inc. Enabling it to offer additional security and compliance services. The software provides endpoint and security management in a single solution and enables organizations to see and manage physical and virtual endpoints.`,
  },
  {
    title: "Freshworks",
    description: `BigFix is the result of IBM's purchase of BigFix, Inc. Enabling it to offer additional security and compliance services. The software provides endpoint and security management in a single solution and enables organizations to see and manage physical and virtual endpoints.`,
  },
  {
    title: "Torq",
    description: `BigFix is the result of IBM's purchase of BigFix, Inc. Enabling it to offer additional security and compliance services. The software provides endpoint and security management in a single solution and enables organizations to see and manage physical and virtual endpoints.`,
  },
];

export const Patch = () => {
  return (
    <div className="summary-module-container">
      <div className="summary">
        <h2 style={{marginBottom:"20px"}}>BigFix Patch Management</h2>
        <span>
          BigFix is the result of IBM's purchase of BigFix, Inc. Enabling it to offer additional security 
          and compliance services. The software provides endpoint and security management
          in a single solution and enables organizations to see and manage physical and virtual endpoints.
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

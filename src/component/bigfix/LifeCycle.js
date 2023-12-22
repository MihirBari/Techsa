import React from 'react';
import { Module } from './Module';
import img1 from "../../assets/inventory/Reduce+risk+and+manage+the+entire+endpoint+system+lifecycle.png"
import img2 from "../../assets/inventory/Maximize+ROI+with+unparalleled+scalability.png"
import img3 from "../../assets/inventory/Reduce+management+complexity+and+cost.png"
import img4 from "../../assets/inventory/Deliver+comprehensive+visibility.png"


const modules = [
  {
    image: img4,
    title: " OS Deployment",
    description: `
    The OS Deployment product offering within BigFix  is accessed through the OS Deployment and Bare Metal Imaging site included with BigFix Lifecycle. This site uses Tivoli Provisioning Manager for OS Deployment for bare metal imaging. This site deprecates the "OS Deployment" and "BigFix OS Deployment for Windows" sites.
  `,
  },
  {
    image: img3,
    title: " Remote control",
    description: `
    BigFix Remote Control application helps to communicate between different components, clients, and endpoints within BigFix environment.
  `,
  },
  {
    image: img2,
    title: "Software Distribution",
    description: `
    The BigFix Software Distribution applications to deploy software to endpoints across your network from a single location. Maintain control and visibility into software delivery and installation. Device owners can use the Self Service Application to manage software and other BigFix actions that are deployed to them as offers.
  `,
  },
  {
    image: img1,
    title: "Modern Client Management",
    description: `
    This section guides you through BigFix Modern Client Management (MCM) and BigFix Mobile to understand the MCM concepts, terminologies, features, and functionality. You can find detailed instructions for managing the complete lifecycle of your MDM managed endpoints here.
  `,
  },
  {
    image: img4,
    title: "Insights for Vulnerability Remediation",
    description: `
    BigFix Insights for Vulnerability Remediation integrates BigFix with sources of vulnerability data. The purpose is to guide BigFix users on how to apply the best patch and configuration settings to remediate discovered vulnerabilities, and thus reduce risk and improve security.
  `,
  },
];

export const LifeCycle = () => {
  return (
    <div className="summary-module-container">
      <div className="summary">
        <h2 style={{marginBottom:"20px"}}> BigFix LifeCycle</h2>
        <span>
        BigFix Lifecycle helps find and fix problems in minutes across all endpoints. Discover, secure and manage hundreds of thousands of endpoints on more than 90 different OS versions within hours or minutes.
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

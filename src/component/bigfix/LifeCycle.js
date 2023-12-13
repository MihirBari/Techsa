import React from 'react';
import { Module } from './Module';
import img1 from "../../assets/inventory/Reduce+risk+and+manage+the+entire+endpoint+system+lifecycle.png"
import img2 from "../../assets/inventory/Maximize+ROI+with+unparalleled+scalability.png"
import img3 from "../../assets/inventory/Reduce+management+complexity+and+cost.png"
import img4 from "../../assets/inventory/Deliver+comprehensive+visibility.png"


const modules = [
  {
    image: img1,
    title: "Asset Discovery",
    description: `BigFix Asset Discovery works by designating certain computers as Scan Points. Any agent can be designated as a Scan Point if it is running a supported operating system. These Scan Points query the unmanaged assets in your network. The following image illustrates this process.
    `,
  },
  {
    image: img2,
    title: "Patch compliance reporting",
    description: `
    Manage up to 300,000 endpoints, regardless of location, connection type or operating system from a single management server and one intelligent agent supporting more than 100 operating system versions.
  `,
  },
  {
    image: img3,
    title: "3rd party App Patching",
    description: `
    Traditional BigFix Patch content focuses on a limited set of vendors with a specialty in operating system and security patching. The Updates for Windows Applications – extended content site, provides coverage for upgrades to a growing list of third-party applications. This expansion helps you fill gap in proactive patching processes.
  `,
  },
  {
    image: img4,
    title: " OS Deployment – Bare Metal, Wipe & Load, Updates & Migration",
    description: `
    The OS Deployment product offering within BigFix  is accessed through the OS Deployment and Bare Metal Imaging site included with BigFix Lifecycle. This site uses Tivoli Provisioning Manager for OS Deployment for bare metal imaging. This site deprecates the "OS Deployment" and "BigFix OS Deployment for Windows" sites.
  `,
  },
  {
    image: img4,
    title: " Remote control",
    description: `
    BigFix Remote Control application helps to communicate between different components, clients, and endpoints within BigFix environment.
  `,
  },
  {
    image: img4,
    title: "PC/Mac Energy Management",
    description: `
    Maintain real-time visibility into your entire endpoint landscape including cloud, virtual, on-premise and roaming devices – all through a single pane of glass. Accelerate patch cycles, improve patch success rates, reduce downtime and minimize security risks.
  `,
  },
  {
    image: img4,
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

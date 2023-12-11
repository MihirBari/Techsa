import React from 'react';
import { Module } from './Module';
import img1 from "../../assets/inventory/Reduce+risk+and+manage+the+entire+endpoint+system+lifecycle.png"
import img2 from "../../assets/inventory/Maximize+ROI+with+unparalleled+scalability.png"
import img3 from "../../assets/inventory/Reduce+management+complexity+and+cost.png"
import img4 from "../../assets/inventory/Deliver+comprehensive+visibility.png"


const modules = [
  {
    image: img1,
    title: "Reduce risk and manage the entire endpoint system lifecycle",
    description: `Address the full system lifecycle including asset discovery and inventory, software distribution, operating system deployment, migration and re-imaging, patch management, power management and remote desktop control. Asset discovery and inventory features create dynamic situational awareness about changing conditions in the infrastructure. Quickly discover new systems, deploy agents and take complete control with policy-based management.`,
  },
  {
    image: img2,
    title: "Maximize ROI with unparalleled scalability",
    description: `
    Manage up to 300,000 endpoints, regardless of location, connection type or operating system from a single management server and one intelligent agent supporting more than 100 operating system versions.
  `,
  },
  {
    image: img3,
    title: " Reduce management complexity and cost",
    description: `
    Automate patching, remote software deployments, Windows 10 migrations, OS updates and re-imaging – even on more advanced tasks like operating systems and application patching on clustered servers. This minimizes labor costs and ensures endpoints are patched and secure according to your policies. It also supports sequenced system administration tasks, such as deploying an operating system and changing the host name in one operation. Power management capabilities helps reduce electricity expenses and remote desktop control functionality enables streamline help desk calls and problem resolution.
  `,
  },
  {
    image: img4,
    title: " Deliver comprehensive visibility",
    description: `
    Maintain real-time visibility into your entire endpoint landscape including cloud, virtual, on-premise and roaming devices – all through a single pane of glass. Accelerate patch cycles, improve patch success rates, reduce downtime and minimize security risks.
  `,
  },
];

export const LifeCycle = () => {
  return (
    <div className="summary-module-container">
      <div className="summary">
        <h2 style={{marginBottom:"20px"}}> BigFix LifeCycle</h2>
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

import React from "react";
import { Module } from "./Module";
import img1 from "../../assets/inventory/Reduce+risk+and+manage+the+entire+endpoint+system+lifecycle.png";
import img2 from "../../assets/compliance/Improve+visibility+and+reduce+risk.png";
import img3 from "../../assets/compliance/Prioritize+remediation+with+compliance.png";
import img5 from "../../assets/inventory/Improve+security+posture.png";
import img4 from "../../assets/inventory/Increase+efficiency+by+streamlining.png";

const modules = [
  {
    image: img2,
    title: "Patch Compliance and reporting",
    description: `
    Efficiently monitor and analyze compliance effectiveness with real-time endpoint status. 
    The Compliance Analytics Engine provides instant insights into security configurations, 
    patching, and vulnerabilities across deployments.`,
  },
  {
    image: img1,
    title: "Unified Endpoint Management",
    description: `
    BigFix provides a unified architecture, leveraging AI technology, to effectively manage and assure
    compliance of all servers, desktops, and mobile devices, whether they are in the office, at home, or
    in the cloud.
    `,
  },
  {
    image: img2,
    title: "Client Device Management",
    description: `
Comprehensively manage client devices from discovery to resolution. Streamline tasks, empower self-service, and minimize service desk tickets.
`,
  },
  {
    image: img3,
    title: " Improve security posture",
    description: `
Enables collaboration between IT and Security to set and monitor security compliance policies for 
software and configurations, ensuring enterprise security through rapid health and compliance reporting.
  `,
  },
  {
    image: img4,
    title: "Efficient Inventory Automation",
    description: `
    Automates inventory tasks, streamlining operations and cutting resource hours. Manages large-scale endpoints efficiently, reducing costs compared to traditional methods.
  `,
  },
  {
    image: img5,
    title: "Continuous Compliance Monitoring",
    description: `
  
Efficiently monitor and assess compliance effectiveness through real-time tracking and 
reporting. Gain insights on endpoint compliance status and security exposures with a robust
Compliance Analytics Engine, offering out-of-the-box reports on security configurations and patching.
`,
  },
];

const modules1 = [
  {
    image: img2,
    title: "Software Distribution",
    description: `
    BigFix Software Distribution applications to deploy software to endpoints across your network from a single location.
     Maintain control and visibility into software delivery and installation.
    `,
  },
  {
    image: img4,
    title: " OS Deployment",
    description: `
    BigFix OS Deployment, which is part of the BigFix Lifecycle Management suite, provides a consolidated, comprehensive solution to quickly deploy new workstations and servers throughout a network from a single, centralized location. 
  `,
  },
  {
    image: img3,
    title: "Centralized Endpoint Management",
    description: `
    Manage up to 300,000 endpoints, regardless of location, connection type or operating system from a single management server and one intelligent agent supporting more than 100 operating system versions.
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
    image: img1,
    title: "Modern Client Management",
    description: `
    BigFix WebUI facilitates to manage modern devices that do not have a BigFix agent installed as well as to manage traditional devices that have BigFix agent installed.
    `
  },
  {
    image: img4,
    title: "Insights for Vulnerability Remediation",
    description: `
    BigFix Insights for Vulnerability Remediation integrates BigFix with sources of vulnerability data. The purpose is to guide BigFix users on how to apply the best patch and configuration settings to remediate discovered vulnerabilities, and thus reduce risk and improve security.
  `,
  },
];

export const Inventory = () => {
  return (
    <>
      {/* <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        Features of BigFix{" "}
      </h2> */}
      <div className="summary-module-container">
        <div className="modules">
          {modules.map(({ image, title, description }, index) => (
            <div key={index}>
              <Module image={image} title={title} description={description} />
            </div>
          ))}
        </div>

        <div className="modules">
          {modules1.map(({ image, title, description }, index) => (
            <div key={index}>
              <Module image={image} title={title} description={description} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

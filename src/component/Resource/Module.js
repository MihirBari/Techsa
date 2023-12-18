import React from 'react';
import  {Detail}  from './Deatil';

export const Module = () => {
  const projects = [
    {
      id: 1,
      caption: "Discover and Inspect Devices Dynamically ",
      Summary: "Large scale construction environment was not able to discover unmanaged assets.",
      BreifSummary:`Large scale construction environment was not able to discover unmanaged assets.`,
      Resolution: `We deployed a task from the BigFix Console which ran Nmap and Npcap to targeted 
        machines and designate them as "Scan Points". After this Task completes, we were able to initiate
         network scans to search for unmanaged computers and network devices from each selected "Scan Point".
          The results of each scan were uploaded to the BES Server and the Import Service made the data 
          available to the BES Console.`,
      Tag: 'Asset Discovery,  Nmap, Npcap',
    },
    {
        id: 2,
        caption: "Streamlining Security  ",
        Summary: "The decentralized patch management approach resulted in compliance gaps and increased vulnerability to cyber threats.",
        BreifSummary:`A leading financial services firm with a vast network of endpoints struggled to maintain compliance and security standards across multiple offices. The decentralized patch management approach resulted in compliance gaps and increased vulnerability to cyber threats.
     `,
        Resolution: `The firm implemented BigFix Patch Management to centralize and automate its patching processes. The platform's scalability ensured coverage across various endpoints including servers. They achieved regulatory compliance through consistent and timely patching and reduced the risk of cyber threats and potential financial losses.`,
        Tag: 'Patch Management,  Endpoints',
      },
      {
        id: 3,
        caption: "Deploying Custom Softwares on Pan India location systems",
        Summary: "The manual deployment process was time-consuming and resulted in inconsistent software versions.",
        BreifSummary:`A large financial institution faced challenges in deploying and updating financial software applications on both employee workstations and customer-facing systems. The manual deployment process was time-consuming and resulted in inconsistent software versions.`,
        Resolution: `The financial institution leveraged BigFix Software Distribution to automate the 
        deployment of financial software applications. The platform's reporting capabilities provided 
        visibility into the status of software installations across the organization. They ensured consistency
         in software versions, reducing compatibility issues and accelerated the deployment of critical
          financial software updates. We have improved customer experience with more reliable and up-to-date 
          banking applications.`,
        Tag: 'Asset Discovery  Nmap Npcap',
      },
      {
        id: 4,
        caption: "Control Desktops Remotely ",
        Summary: "The existing remote-control tools were fragmented, lacking centralized management and reporting capabilities.",
        BreifSummary:`A multinational IT services provider with clients across the globe needed an efficient remote support solution to address technical issues promptly. The existing remote-control tools were fragmented, lacking centralized management and reporting capabilities.`, 
        Resolution: `The IT services provider implemented BigFix Remote Control to streamline remote support 
        operations. The platform's centralized management allowed IT teams to initiate remote sessions,
         troubleshoot issues, and deploy updates across client systems. The robust reporting capabilities 
         provided insights into support activities.
        Remote Control Targets are installed on all the endpoints and Remote-Control controllers are
         deployed onto only those users’ systems who are allow to take the remote of other systems like 
         administrators. Customer replaced traditional remote-control tool with the BigFix Remote Control
          service.
        `,
        Tag: 'Asset Discovery  Nmap Npcap',
      },
      {
        id: 5,
        caption: "Power Management ",
        Summary: "All the endpoints gets shutdown. Team want to deploy any patches on urgent basis then they can’t deploy that particular patch.",
        BreifSummary:`One of our stock broking customer requires BigFix Power Management module because, In their environment all the endpoints gets shutdown every EOD and patching team is struggling with this issue because if patching team want to deploy any patches on urgent basis then they can’t deploy that particular patch.`, 
        Resolution: `We setup power management in their environment and deployed relevant tasks from BigFix Console by which systems will start from shut down mode and patching team will be able to do the required activity.`,
        Tag: 'Asset Discovery  Nmap Npcap',
      },
      {
        id: 6,
        caption: "Advanced Analytics and Insights",
        Summary: "Faced a major issue with collecting the data from different security solutions .",
        BreifSummary:`One of our stock broking customer requires BigFix Power Management module because, In their environment all the endpoints gets shutdown every EOD and patching team is struggling with this issue because if patching team want to deploy any patches on urgent basis then they can’t deploy that particular patch.`, 
        Resolution: `We set up the BigFix insights data-lake to which helped them gather the data from BigFix multiple instances data source and ITSM tool and perform the analytics on top of it and BigFix inventory data ingestion into the ITSM. Also, that helped them to generate interactive Dashboards Power-BI/Tableau or any Other BI tools for making data driven decisions with confidence.`,
        Tag: 'Asset Discovery  Nmap Npcap',
      },
      {
        id: 7,
        caption: "Vulnerability Remediation ",
        Summary: "Issue to analyze the sheer volume of vulnerabilities and it’s remediations",
        BreifSummary:`The customer IT Security & operation team faced issue to analyze the sheer volume of vulnerabilities and it’s remediations.`,
        Resolution: `We set up the BigFix Insights for vulnerability remediation integrations which collected the vulnerabilities
         detected by Vulnerability management solutions (Tenable/Qualys/Rapid7 or any Vulnerabilities CSV file import) as well as the 
         applicable patches data from BigFix. then it does the automated vulnerabilities vs patching mapping. which helped them to find 
         out which vulnerabilities will get fixed which latest patches, that eliminated the manual efforts of operation teams to find the
          CVE VS patches data, and that helped them to fix the vulnerabilities faster than ever and decreases the threat landscape and 
          improved security posture.`,
        Tag: 'Asset Discovery,  Nmap, Npcap',
      },
      {
          id: 8,
          caption: "Maintain Asset Inventory",
          Summary: "Manual tracking processes were time-consuming and prone to errors.",
          BreifSummary:`A multinational manufacturing company with an extensive IT infrastructure faced challenges in managing its software assets efficiently. The company had diverse software applications across different departments, making it difficult to track licenses, ensure compliance, and optimize software usage. Manual tracking processes were time-consuming and prone to errors.
       `,
          Resolution: `The manufacturing company adopted BigFix Inventory to enhance its software asset management practices. The platform's key features were utilized to address specific challenges:

          1.	Automated Discovery and Inventory: BigFix Inventory was deployed to automatically discover and catalog all software assets across the organization's network. This included applications installed on servers, workstations, and other endpoints.
          
          2.	License Management: The platform facilitated the creation of a centralized repository for software licenses. It provided real-time insights into license usage, helping the company ensure compliance with license agreements and avoid over-licensing or under-licensing.
          `,
          Tag: 'Patch Management,  Endpoints',
        },
        {
          id: 9,
          caption: "Software Metering",
          Summary: "The lack of visibility into software utilization ",
          BreifSummary:`A multinational financial institution faced Audit challenges in managing its extensive software portfolio efficiently. The organization wanted to gain insights into software usage patterns to optimize licensing costs, ensure compliance, and enhance overall IT governance. The lack of visibility into software utilization posed challenges in making informed decisions about software procurement and renewal.`,
          Resolution: `We offered software metering capabilities to track usage patterns. This data allowed the organization to optimize software licenses based on actual usage, potentially leading to cost savings.`,
          Tag: 'Asset Discovery  Nmap Npcap',
        },
        {
          id: 10,
          caption: "Security Configuration assessment and  Security configuration management ",
          Summary: "Faced issue to collect/assess the security configuration ",
          BreifSummary:`Customer faced issue to collect/assess the security configuration hardening compliance status every servers/endpoints for various external checklist like CIS, DISA-Stig and custom in-house security configuration controls.`, 
          Resolution: `
          We implemented BigFix Compliance solutions which helped customer to assess & remediate the security configurations for their servers and Endpoints for the Operating systems, Browsers, and databases and 3rd party applications like IIS, Apache http & Tomcat for Standards like CIS, DISA-STIG, USGSCB and custom controls checklists. Additionally, BigFix also helped them to track the historical configurations compliance reporting to prove the continuous compliance.
          
          `,
          Tag: 'Asset Discovery  Nmap Npcap',
        },
        {
          id: 11,
          caption: "Database and Middleware patching ",
          Summary: "The patching & compliance reporting for extensive databases & Middleware platforms.",
          BreifSummary:`The BFSI faced challenges to achieve the patching & compliance reporting for extensive databases & Middleware platforms.`, 
          Resolution: `We helped them to identify the unpatched databases & middleware. Which was tough and purely manual task for them to do on each server for each database and middleware.
          post the identification of applicable patches for we also helped them to achieve the timely patching for databases & middleware’s and reporting from single console. 
          `,
          Tag: 'Asset Discovery  Nmap Npcap',
        },
        {
          id: 12,
          caption: "Vulnerability analysis",
          Summary: "Quickly find the bulk CVE’s and affected endpoints/servers ",
          BreifSummary:`Customer faced the issues to quickly find the bulk CVE’s and affected endpoints/servers and it’s remediations.`, 
          Resolution: `We helped the customer to perform the bulk CVE search engine which performs the bulk CVE’s and its applicable patches, also we given them threat intelligence (vulnerability already been exploited somewhere in the world) MITRE APT (Advance Persistent Groups) groups and CISA Know exploitable vulnerabilities to give the contextual prevalent in customer environments to prioritize the vulnerability remediations.We helped the customer to perform the bulk CVE search engine which performs the bulk CVE’s and its applicable patches, also we given them threat intelligence (vulnerability already been exploited somewhere in the world) MITRE APT (Advance Persistent Groups) groups and CISA Know exploitable vulnerabilities to give the contextual prevalent in customer environments to prioritize the vulnerability remediations.`,
          Tag: 'Asset Discovery  Nmap Npcap',
        },
  ];

  return (
    <>
      <div className="contentt">
        <div className="Carddd">
          {projects.map((contents) => (
            <Detail
              key={contents.id}
              id={contents.id}
              name={contents.caption}
              BreifSummary={contents.BreifSummary}
              Summary={contents.Summary}
              Resolution={contents.Resolution}
              Tag={contents.Tag}
            />
          ))}
        </div>
      </div>
    </>
  );
};

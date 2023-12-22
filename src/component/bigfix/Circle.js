import React from 'react'
import img1 from "../../assets/inventory/Reduce+risk+and+manage+the+entire+endpoint+system+lifecycle.png"
import img2 from "../../assets/compliance/Improve+visibility+and+reduce+risk.png";
import img3 from "../../assets/compliance/Prioritize+remediation+with+compliance.png";
import {Detail} from "./Detail"

export const Circle = () => {
    const modules1 = [
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
    ]
      

  return (
    <>
    <div className="contentt">
        <div className="Carddd1">
          {modules1.map((contents) => (
            <Detail
            
              name={contents.image}
              BreifSummary={contents.title}
              Summary={contents.description}
            />
          ))}
        </div>
      </div>
    </>
  )
}

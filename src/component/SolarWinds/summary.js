import React, { useState } from "react";
import ImageWithText from "./ImageWithText";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Summary = () => {
  const [displayText, setDisplayText] = useState("");
  const handleScrollDown = () => {
    const scrollPosition = window.innerHeight * 0.8; 
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth',
    });
  };

  const handleImageClick = (clickedAreas) => {
    let newDisplayText = "";
    if (clickedAreas && clickedAreas.includes) {
      if (clickedAreas.includes("Database")) {
        newDisplayText = (
          <div>
            <p>
              Monitor, analyze, diagnose, and optimize database performance and
              data ops that drive your business-critical applications. Unify
              on-premises and cloud database visibility, control, and management
              with streamlined monitoring, mapping, data lineage, data
              integration, and tuning across multiple vendors.
            </p>
            <Link to="/Database">
              <Button style={{ marginTop: "25px" }}>Learn more</Button>
            </Link>
          </div>
        );
      } else if (clickedAreas.includes("Network")) {
        newDisplayText = (
          <div>
            <p>
              Network management tools, from configuration and traffic
              intelligence to performance monitoring and topology mapping, to
              readily see, understand, and resolve issues. An integrated,
              multi-vendor approach that’s easy to use, extend, and scale to
              keep distributed networks optimized.
            </p>

            <Button style={{ marginTop: "15px" }}>Learn more</Button>
          </div>
        );
      } else if (clickedAreas.includes("Infrastructure")) {
        newDisplayText = (
          <div>
            <p>Text for Infrastructure Clicked!</p>

            <Button style={{ marginTop: "15px" }}>Learn more</Button>
          </div>
        );
      } else if (clickedAreas.includes("Application")) {
        newDisplayText = (
          <div>
            <p>
              Ensure user experience with unified performance monitoring,
              tracing, and metrics across applications, clouds, and SaaS. Robust
              solutions offering rich visualization, synthetic and real user
              monitoring (RUM), and extensive log management, alerting, and
              analytics to expedite troubleshooting and reporting.
            </p>

            <Button style={{ marginTop: "15px" }}>Learn more</Button>
          </div>
        );
      } else if (clickedAreas.includes("Cloud")) {
        newDisplayText = (
          <div>
            <p>Text for Cloud Services Clicked!</p>

            <Button style={{ marginTop: "15px" }}>Learn more</Button>
          </div>
        );
      } else if (clickedAreas.includes("Solarwinds")) {
        newDisplayText = (
          <div>
            <p>
              SolarWinds stands out as the sole unified platform that seamlessly
              combines monitoring, observability, and service management. It
              empowers users with comprehensive insight into their IT
              infrastructure, enabling proactive identification of bottlenecks
              across the entire system.
            </p>
          </div>
        );
      } else if (clickedAreas.includes("Automate")) {
        newDisplayText = (
          <div>
            <p>Text for Automate Clicked</p>
          </div>
        );
      } else if (clickedAreas.includes("Observe")) {
        newDisplayText = (
          <div>
            <p>
              The SolarWinds Platform is the industry’s only unified monitoring,
              observability, and service management platform. It’s the
              foundation for a new generation of SolarWinds observability
              solutions and provides the architecture on how we solve
              observability challenges for our customers.
            </p>
          </div>
        );
      } else if (clickedAreas.includes("Remediate")) {
        newDisplayText = (
          <div>
            <p>Text for Remediate Clicked!</p>
          </div>
        );
      } else if (clickedAreas.includes("Visualize")) {
        newDisplayText = (
          <div>
            <p>Text for Visualize Clicked!</p>
          </div>
        );
      }
    }

    setDisplayText(newDisplayText);
  };

  return (
    <div className="solar">
      <div>
        <ImageWithText onClick={handleImageClick} />
      </div>
      <div>
        <p>
          {displayText || (
            <>
              SolarWinds stands out as the sole unified platform that seamlessly
              combines monitoring, observability, and service management. It
              empowers users with comprehensive insight into their IT
              infrastructure, enabling proactive identification of bottlenecks
              across the entire system.
              <Button style={{marginTop:'15px', backgroundColor:"#7EDA3B",color:'black', borderRadius:'20px'}} onClick={handleScrollDown}>Scroll Down</Button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

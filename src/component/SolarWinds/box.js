import React, { useState } from "react";

const Box = () => {
  const [hoveredColumn, setHoveredColumn] = useState(null);

  const handleHover = (column) => {
    setHoveredColumn(column);
  };

  const handleLeave = () => {
    setHoveredColumn(null);
  };

  return (
    <div className="box">
      <div className="box1">
        <div
          className="box2 boxItem"
          onMouseEnter={() => handleHover(1)}
          onMouseLeave={handleLeave}
        >
          {hoveredColumn === 1 && (
            <p
              className="boxHover"
              style={{
                top: "-90px",
              }}
            >
              Network Performance Monitor (NPM)
            </p>
          )}
          <h4 style={{ textAlign: "center", color: "darkblue" }}>
            Infrastructure Monitoring
          </h4>
          <p className="boxMessage">
            Monitor cloud, on-premises and hybrid environments in a single
            platform
          </p>
        </div>
        <div
          className="box3 boxItem "
          onMouseEnter={() => handleHover(2)}
          onMouseLeave={handleLeave}
        >
          {hoveredColumn === 2 && (
            <p
              className="boxHover"
              style={{
                top: "-50px",
              }}
            >
              Log Analyzer (LA)
            </p>
          )}
          <h4 style={{ textAlign: "center", color: "blue" }}>
            Log Intelligence
          </h4>
          <p className="boxMessage">
            Analyze logs and surface anomalies to reduce MTTR
          </p>
        </div>
        <div
          className="box3 boxItem"
          onMouseEnter={() => handleHover(3)}
          onMouseLeave={handleLeave}
        >
          {hoveredColumn === 3 && (
            <p
              className="boxHover"
              style={{
                top: "-70px",
              }}
            >
              Netfkow Traffic Analyzer (NTA)
            </p>
          )}
          <h4 style={{ textAlign: "center", color: "orange" }}>Network</h4>
          <p className="boxMessage">
            Track flow data with Netflow, JFlow, NBAR or SFlow
          </p>
        </div>
        <div
          className="box4 boxItem" 
          onMouseEnter={() => handleHover(4)}
          onMouseLeave={handleLeave}
        >
          {hoveredColumn === 4 && (
            <p
              className="boxHover"
              style={{
                top: "-70px",
              }}
            >
              Server Application Monitor (SAM)
            </p>
          )}
          <h4 style={{ textAlign: "center", color: "darkred" }}>
            {" "}
            Cloud Monitoring
          </h4>
          <p className="boxMessage">
            Integrate with AWS, Azure, and GCP out of the box
          </p>
        </div>
      </div>

      <div className="box1">
        <div
          className="box3 boxItem"
          onMouseEnter={() => handleHover(5)}
          onMouseLeave={handleLeave}
        >
          {hoveredColumn === 5 && (
            <p className="boxHover" style={{ top: "-70px" }}>
              Server Application Monitor (SAM)
            </p>
          )}
          <h4 style={{ textAlign: "center", color: "#c18109" }}>Servers</h4>
          <p className="boxMessage">
            Monitor and alert on applications, hardware, and OS metrics
          </p>
        </div>
        <div
          className="box3 boxItem"
          onMouseEnter={() => handleHover(6)}
          onMouseLeave={handleLeave}
        >
          {hoveredColumn === 6 && (
            <p className="boxHover" style={{ top: "-90px" }}>
              Network Performance Monitor (NPM)
            </p>
          )}
          <h4 style={{ textAlign: "center", color: "#0075de" }}>Websites</h4>
          <p className="boxMessage">
            Perform on-the-spot service checks and enable synthetic transactions
          </p>
        </div>
        <div
          className="box3 boxItem"
          onMouseEnter={() => handleHover(7)}
          onMouseLeave={handleLeave}
        >
          {hoveredColumn === 7 && (
            <p
              style={{
                color: "white",
                marginTop: "5px",
                backgroundColor: "darkblue",
                padding: "10px 5px",
                borderRadius: "5px",
                textAlign: "center",
                position: "absolute",
                top: "-50px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 1,
              }}
            >
              Storage
            </p>
          )}
          <h4 style={{ textAlign: "center", color: "#96a50a" }}>
            Container Monitoring
          </h4>
          <p className="boxMessage">
            Monitor Kubernetes pods, nodes, containers, and other components
          </p>
        </div>
        <div
          className="box3 boxItem"
          onMouseEnter={() => handleHover(8)}
          onMouseLeave={handleLeave}
        >
          {hoveredColumn === 8 && (
            <p className="boxHover" style={{ top: "-90px" }}>
              Network Performance Monitor (NPM)
            </p>
          )}
          <h4 style={{ textAlign: "center", color: "blue" }}>
            Remote Monitoring
          </h4>
          <p className="boxMessage">
            Ensure your remote workforce has access to the tools they need to
            maintain business
          </p>
        </div>
      </div>

      <div className="box1">
        <div
          className="box3 boxItem"
          onMouseEnter={() => handleHover(9)}
          onMouseLeave={handleLeave}
        >
          {hoveredColumn === 9 && (
            <p
              className="boxHover"
              style={{
                top: "-70px",
              }}
            >
              Server Application Monitor (SAM)
            </p>
          )}
          <h4 style={{ textAlign: "center", color: "darkcyan" }}>
            Application Monitoring
          </h4>
          <p className="boxMessage">
            Track availability, performance and advanced metrics
          </p>
        </div>
        <div
          className="box3 boxItem"
          onMouseEnter={() => handleHover(10)}
          onMouseLeave={handleLeave}
        >
          {hoveredColumn === 10 && (
            <p
              className="boxHover"
              style={{
                top: "-70px",
              }}
            >
              Server Application Monitor (SAM)
            </p>
          )}
          <h4 style={{ textAlign: "center", color: "orange" }}>
            Database Monitoring
          </h4>
          <p className="boxMessage">
            Monitor database health and performance in real-time
          </p>
        </div>
        <div
          className="box3 boxItem"
          onMouseEnter={() => handleHover(11)}
          onMouseLeave={handleLeave}
        >
          {hoveredColumn === 11 && (
            <p
              className="boxHover"
              style={{
                top: "-70px",
              }}
            >
              Storage Resource Manager (SRM)
            </p>
          )}
          <h4 style={{ textAlign: "center", color: "purple" }}>Storage</h4>
          <p className="boxMessage">
            Track overall storage center health and Individual components
          </p>
        </div>
        <div
          className="box3 boxItem"
          onMouseEnter={() => handleHover(12)}
          onMouseLeave={handleLeave}
        >
          {hoveredColumn === 12 && (
            <p className="boxHover" style={{ top: "-90px" }}>
              Network Performance Monitor (NPM)
            </p>
          )}
          <h4 style={{ textAlign: "center", color: "darkviolet" }}>
            Dynamic Services
          </h4>
          <p className="boxMessage">
            Assess whole service health and monitor underlying resources
          </p>
        </div>
      </div>

      <div className="box1">
        <div
          className="box6 boxItem"
          onMouseEnter={() => handleHover(13)}
          onMouseLeave={handleLeave}
        >
          {hoveredColumn === 13 && (
            <p
              className="boxHover"
              style={{
                top: "-50px",
              }}
            >
              Network Configuration Manager (NCM)
            </p>
          )}
          <h4 style={{ textAlign: "center", color: "darkblue" }}>
            Configuration Monitoring
          </h4>
          <p className="boxMessage">
            Monitor and alert on configuration changes across multiple networks,
            data centers or customer locations
          </p>
        </div>
        <div
          className="box5 boxItem"
          onMouseEnter={() => handleHover(14)}
          onMouseLeave={handleLeave}
        >
          {hoveredColumn === 14 && (
            <p
              className="boxHover"
              style={{
                top: "-50px",
              }}
            >
              Network Performance Monitor (NPM)
            </p>
          )}
          <h4 style={{ textAlign: "center", color: "#547574" }}>
            AlOps Early Warning System
          </h4>
          <p className="boxMessage">
            Pinpoint problems and reduce MTTR with root cause analysis and
            dynamic thresholds
          </p>
        </div>
      </div>
    </div>
  );
};

export default Box;

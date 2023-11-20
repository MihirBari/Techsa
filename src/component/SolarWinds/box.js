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
    <div
      style={{
        border: "1px solid grey",
        width: "100%",
        height: "auto",
        marginTop: "50px",
        borderRadius: "20px",
        boxShadow: " 6px 4px 10px 0px rgb(147 113 113)",
      }}
    >
      <div style={{ display: "flex" }}>
        <div
          style={{
            flex: 1.5,
            border: "1px solid #B8B8B8",
            padding: "5px",
            borderTopLeftRadius: "20px",
          }}
          onMouseEnter={() => handleHover(1)}
          onMouseLeave={handleLeave}
        >
          {hoveredColumn === 1 && (
            <p
              style={{
                color: "white",
                marginTop: "5px",
                backgroundColor: "darkblue",
                padding: "10px 5px",
                borderRadius: "5px",
                textAlign: "center",
            
              }}
            >
              Network Performance Monitor (NPM)
            </p>
          )}
          <h4 style={{ textAlign: "center", color: "darkblue" }}>
            Infrastructure Monitoring
          </h4>
          <p
            style={{ textAlign: "center", color: "#B8B8B8", marginTop: "5px" }}
          >
            Monitor cloud, on-premises and hybrid environments in a single
            platform
          </p>
        </div>
        <div
          style={{ flex: 1, border: "1px solid #B8B8B8", padding: "5px" }}
          onMouseEnter={() => handleHover(2)}
          onMouseLeave={handleLeave}
        >
          {hoveredColumn === 2 && (
            <p
              style={{
                color: "white",
                marginTop: "5px",
                backgroundColor: "blue",
                padding: "10px 5px",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              Log Analyzer (LA)
            </p>
          )}
          <h4 style={{ textAlign: "center", color: "blue" }}>
            Log Intelligence
          </h4>
          <p
            style={{ textAlign: "center", color: "#B8B8B8", marginTop: "5px" }}
          >
            Analyze logs and surface anomalies to reduce MTTR
          </p>
        </div>
        <div
          style={{ flex: 1, border: "1px solid #B8B8B8", padding: "5px"}}
          onMouseEnter={() => handleHover(3)}
          onMouseLeave={handleLeave}
        >
          {hoveredColumn === 3 && (
            <p
              style={{
                color: "white",
                marginTop: "5px",
                backgroundColor: "orange",
                padding: "10px 5px",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              Netfkow Traffic Analyzer (NTA)
            </p>
          )}
          <h4 style={{ textAlign: "center", color: "orange" }}>Network</h4>
          <p
            style={{ textAlign: "center", color: "#B8B8B8", marginTop: "5px" }}
          >
            Track flow data with Netflow, JFlow, NBAR or SFlow
          </p>
        </div>
        <div
          style={{
            flex: 1,
            border: "1px solid #B8B8B8",
            padding: "5px",
            borderTopRightRadius: "20px",
          }}
          onMouseEnter={() => handleHover(4)}
          onMouseLeave={handleLeave}
        >
          {hoveredColumn === 4 && (
            <p
              style={{
                color: "white",
                marginTop: "5px",
                backgroundColor: "darkred",
                padding: "10px 5px",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              Network Performance Monitor (NPM)
            </p>
          )}
          <h4 style={{ textAlign: "center", color: "darkred" }}>
            {" "}
            Cloud Monitoring
          </h4>
          <p
            style={{ textAlign: "center", color: "#B8B8B8", marginTop: "5px" }}
          >
            Integrate with AWS, Azure, and GCP out of the box
          </p>
        </div>
      </div>

      {/* Second Row */}
      <div style={{ display: "flex" }}>
        <div
          style={{ flex: 1, border: "1px solid  #B8B8B8", padding: "5px" }}
          onMouseEnter={() => handleHover(5)}
          onMouseLeave={handleLeave}
        >
          {hoveredColumn === 5 && (
            <p
              style={{
                color: "white",
                marginTop: "5px",
                backgroundColor: "#c18109",
                padding: "10px 5px",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              Server Application Monitor (SAM)
            </p>
          )}
          <h4 style={{ textAlign: "center", color: "#c18109" }}>Servers</h4>
          <p
            style={{ textAlign: "center", color: "#B8B8B8", marginTop: "5px" }}
          >
            Monitor and alert on applications, hardware, and OS metrics
          </p>
        </div>
        <div
          style={{ flex: 1, border: "1px solid  #B8B8B8", padding: "5px" }}
          onMouseEnter={() => handleHover(6)}
          onMouseLeave={handleLeave}
        >
          {hoveredColumn === 6 && (
            <p
              style={{
                color: "white",
                marginTop: "5px",
                backgroundColor: "#0075de",
                padding: "10px 5px",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              Network Performance Monitor (NPM)
            </p>
          )}
          <h4 style={{ textAlign: "center", color: "#0075de" }}>Websites</h4>
          <p
            style={{ textAlign: "center", color: "#B8B8B8", marginTop: "5px" }}
          >
            Perform on-the-spot service checks and enable synthetic transactions
          </p>
        </div>
        <div
          style={{ flex: 1, border: "1px solid  #B8B8B8", padding: "5px" }}
          onMouseEnter={() => handleHover(7)}
          onMouseLeave={handleLeave}
        >
          {hoveredColumn === 7 && (
            <p
              style={{
                color: "white",
                marginTop: "5px",
                backgroundColor: "#96a50a",
                padding: "10px 5px",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              Network Performance Monitor (NPM)
            </p>
          )}
          <h4 style={{ textAlign: "center", color: "#96a50a" }}>
            Container Monitoring
          </h4>
          <p
            style={{ textAlign: "center", color: "#B8B8B8", marginTop: "5px" }}
          >
            Monitor Kubernetes pods, nodes, containers, and other components
          </p>
        </div>
        <div
          style={{ flex: 1, border: "1px solid  #B8B8B8", padding: "5px" }}
          onMouseEnter={() => handleHover(8)}
          onMouseLeave={handleLeave}
        >
          {hoveredColumn === 8 && (
            <p
              style={{
                color: "white",
                marginTop: "5px",
                backgroundColor: "blue",
                padding: "10px 5px",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              Network Performance Monitor (NPM)
            </p>
          )}
          <h4 style={{ textAlign: "center", color: "blue" }}>
            Remote Monitoring
          </h4>
          <p
            style={{ textAlign: "center", color: "#B8B8B8", marginTop: "5px" }}
          >
            Ensure your remote workforce has access to the tools they need to
            maintain business
          </p>
        </div>
      </div>

      {/* Third Row */}
      <div style={{ display: "flex" }}>
        <div
          style={{ flex: 2, border: "1px solid  #B8B8B8", padding: "5px" }}
          onMouseEnter={() => handleHover(9)}
          onMouseLeave={handleLeave}
        >
          {hoveredColumn === 9 && (
            <p
              style={{
                color: "white",
                marginTop: "5px",
                backgroundColor: "darkcyan",
                padding: "10px 5px",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              Network Performance Monitor (NPM)
            </p>
          )}
          <h4 style={{ textAlign: "center", color: "darkcyan" }}>
            Application Monitoring
          </h4>
          <p
            style={{ textAlign: "center", color: "#B8B8B8", marginTop: "5px" }}
          >
            Track availability, performance and advanced metrics
          </p>
        </div>
        <div
          style={{ flex: 1, border: "1px solid  #B8B8B8", padding: "5px" }}
          onMouseEnter={() => handleHover(10)}
          onMouseLeave={handleLeave}
        >
          {hoveredColumn === 10 && (
            <p
              style={{
                color: "white",
                marginTop: "5px",
                backgroundColor: "orange",
                padding: "10px 5px",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              Network Performance Monitor (NPM)
            </p>
          )}
          <h4 style={{ textAlign: "center", color: "orange" }}>
            Database Monitoring
          </h4>
          <p
            style={{ textAlign: "center", color: "#B8B8B8", marginTop: "5px" }}
          >
            Monitor database health and performance in real-time
          </p>
        </div>
        <div
          style={{ flex: 1, border: "1px solid  #B8B8B8", padding: "5px" }}
          onMouseEnter={() => handleHover(11)}
          onMouseLeave={handleLeave}
        >
          {hoveredColumn === 11 && (
            <p
              style={{
                color: "white",
                marginTop: "5px",
                backgroundColor: "purple",
                padding: "10px 5px",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              Network Performance Monitor (NPM)
            </p>
          )}
          <h4 style={{ textAlign: "center", color: "purple" }}>Storage</h4>
          <p
            style={{ textAlign: "center", color: "#B8B8B8", marginTop: "5px" }}
          >
            Track overall storage center health and Individual components
          </p>
        </div>
        <div
          style={{ flex: 1, border: "1px solid  #B8B8B8", padding: "5px" }}
          onMouseEnter={() => handleHover(12)}
          onMouseLeave={handleLeave}
        >
          {hoveredColumn === 12 && (
            <p
              style={{
                color: "white",
                marginTop: "5px",
                backgroundColor: "darkviolet",
                padding: "10px 5px",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              Network Performance Monitor (NPM)
            </p>
          )}
          <h4 style={{ textAlign: "center", color: "darkviolet" }}>
            Dynamic Services
          </h4>
          <p
            style={{ textAlign: "center", color: "#B8B8B8", marginTop: "5px" }}
          >
            Assess whole service health and monitor underlying resources
          </p>
        </div>
      </div>

      {/* Fourth Row */}
      <div style={{ display: "flex" }}>
        <div
          style={{
            flex: 1,
            border: "1px solid  #B8B8B8",
            padding: "5px",
            borderBottomLeftRadius: "20px",
          }}
          onMouseEnter={() => handleHover(13)}
          onMouseLeave={handleLeave}
        >
          {hoveredColumn === 13 && (
            <p
              style={{
                color: "white",
                marginTop: "5px",
                backgroundColor: "darkblue",
                padding: "10px 5px",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              Network Performance Monitor (NPM)
            </p>
          )}
          <h4 style={{ textAlign: "center", color: "darkblue" }}>
            Configuration Monitoring
          </h4>
          <p
            style={{ textAlign: "center", color: "#B8B8B8", marginTop: "5px" }}
          >
            Monitor and alert on configuration changes across multiple networks,
            data centers or customer locations
          </p>
        </div>
        <div
          style={{
            flex: 1,
            border: "1px solid  #B8B8B8",
            padding: "5px",
            borderBottomRightRadius: "20px",
          }}
          onMouseEnter={() => handleHover(14)}
          onMouseLeave={handleLeave}
        >
          {hoveredColumn === 14 && (
            <p
              style={{
                color: "white",
                marginTop: "5px",
                backgroundColor: "#547574",
                padding: "10px 5px",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              Network Performance Monitor (NPM)
            </p>
          )}
          <h4 style={{ textAlign: "center", color: "#547574" }}>
            AlOps Early Warning System
          </h4>
          <p
            style={{ textAlign: "center", color: "#B8B8B8", marginTop: "5px" }}
          >
            Pinpoint problems and reduce MTTR with root cause analysis and
            dynamic thresholds
          </p>
        </div>
      </div>
    </div>
  );
};

export default Box;

import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ClientsAddressed } from "./ClientsAddressed";
import { EndPointsSecured } from "./EndPointsSecured";
import { DevicesMonitored } from "./DevicesMonitored";

export const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section
      data-aos="fade-zoom-in"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
      className="skill"
      id="skills"
      style={{
        display: "flex",
        flexDirection: "row", // Display items side by side in a row
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container>
        <Row>
          <Col>
            <div>
              <h2 style={{ textAlign: "center" }}>Skills</h2>
            </div>
            <div
              style={{
                marginTop: "150px",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <div className="item" style={{ flex: 1, textAlign: "center" }}>
                <ClientsAddressed />
                <br />
                <br />
                <p>Clients Addressed</p>
              </div>
              <div className="item" style={{ flex: 1, alignItems:"center",textAlign: "center" }}>
                <EndPointsSecured />
                <br />
                <br />
                <p>EndPoints Secured</p>
              </div>
              <div className="item" style={{ flex: 1, textAlign: "center" }}>
                <DevicesMonitored />
                <br />
                <br />
                <p>Devices Monitored</p>
              </div>
              <div className="item" style={{ flex: 1, textAlign: "center" }}>
                <DevicesMonitored />
                <br />
                <br />
                <p>EndPoints Secured</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

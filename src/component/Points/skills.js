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
        flexDirection: "row", 
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container>
        <Row>
          <Col>
            <div>
              <h2 style={{ textAlign: "center" }}>Achievements</h2>
            </div>
            <div
              style={{
                marginTop: "31px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
                alignItems:"center"
              }}
            >
              <div className="item" style={{ flex: "1 1 25%", textAlign: "center" }}>
                <ClientsAddressed />
              </div>
              <div className="item" style={{ flex: "1 1 25%", textAlign: "center" }}>
                <EndPointsSecured />
              </div>
              <div className="item" style={{ flex: "1 1 25%", textAlign: "center" }}>
                <DevicesMonitored />
              </div>
              {/* <div className="item" style={{ flex: "1 1 25%", textAlign: "center" }}>
                <DevicesMonitored />
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

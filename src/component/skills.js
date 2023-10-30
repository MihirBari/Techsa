import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export const Skills = ({ targets }) => {
  const [counts, setCounts] = useState(targets.map(() => 0));

  useEffect(() => {
    const intervals = targets.map((target, index) => {
      return setInterval(() => {
        if (counts[index] < target) {
          const updatedCounts = [...counts];
          updatedCounts[index] = counts[index] + 1;
          setCounts(updatedCounts);
        } else {
          clearInterval(intervals[index]);
        }
      }, 0); // Adjust the interval as needed
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, [counts, targets]);

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
              <h2 style={{ textAlign: 'center' }}>Skills</h2>
            </div>
            <div style={{ marginTop: "150px", display: "flex", justifyContent: "space-around" }}>
              <div className="item" style={{ flex: 1, textAlign: 'center' }}>
                <p>{counts[0]}+</p>
                <h5>Clients Addressed</h5>
              </div>
              <div className="item" style={{ flex: 1, textAlign: 'center' }}>
                <p>{counts[1]}+</p>
                <h5>EndPoints Secured</h5>
              </div>
              <div className="item" style={{ flex: 1, textAlign: 'center' }}>
                <p>{counts[2]}+</p>
                <h5>Devices Monitored</h5>
              </div>
              <div className="item" style={{ flex: 1, textAlign: 'center' }}>
                <p>{counts[3]}+</p>
                <h5>Java</h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

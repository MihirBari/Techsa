import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AboutCard } from "./AboutCard";
import projImg1 from "../assets/img/SolarWindsLogo-featured-image.jpg";
import projImg2 from "../assets/img/136048.png";

export const About = () => {
  const projects = [
    {
      title: "SolarWinds",
      imgUrl: projImg1,
      caption : "Ravi K"
    },
    {
      title: "BigFix",
      imgUrl: projImg2,
      caption : "Sanjiv S"
    },
  ];

  return (
    <div className="about">
      <section>
        <Container>
          <h2 style={{ textAlign: "center", marginBottom: "25px" }}>
            Brief About Us
          </h2>
          <p style={{ textAlign: "center", marginBottom: "25px" }}>
                    We team up with industry-leading technology partners to
                    deliver innovative solutions. Our strategic alliances with
                    these industry leaders empower us to stay ahead of the curve
                    and provide our customers with top-quality products and
                    services.
                  </p>
          <div className="rectangle-container">
            <div className="rectangle"></div>
            <div className="content">
              <Row>
                <Col style={{ textAlign: "center" }}>
                  <h2>Leadership Team</h2>
                  <br />
                  <Row>
                    {projects.map((project, index) => {
                      return <AboutCard key={index} {...project} />;
                    })}
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
          <br />
          <div>
            <h2 style={{ textAlign: "center" }}> Awards </h2>
          </div>
        </Container>
      </section>
    </div>
  );
};

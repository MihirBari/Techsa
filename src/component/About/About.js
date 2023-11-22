import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AboutCard } from "./AboutCard";
import projImg1 from "../../assets/img/RaviKhanchandani.jpg";
import projImg2 from "../../assets/img/SanjivSachdev.jpg";

import { Testimonial } from "./Testimonial";
import { Awards } from "./Awards";

export const About = () => {
  const projects = [
    {
      title: "SolarWinds",
      imgUrl: projImg1,
      caption: "Ravi Khanchandani",
      link: "https://www.linkedin.com/in/ravikhanchandani"
    },
    {
      title: "BigFix",
      imgUrl: projImg2,
      caption: "Sanjiv Sachdev",
      link: "https://www.linkedin.com/in/sanjivsachdev"
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
            We team up with industry-leading technology partners to deliver
            innovative solutions. Our strategic alliances with these industry
            leaders empower us to stay ahead of the curve and provide our
            customers with top-quality products and services.
          </p>
          <div className="rectangle-container">
            <div className="rectangle"></div>
            <div className="content">
              <Col style={{ textAlign: "center" }}>
                <h2>Leadership Team</h2>
                <br />
                <Row>
                  <div className="Cardd">
                    {projects.map((contents) => (
                      <AboutCard
                        key={contents.id}
                        image={contents.imgUrl}
                        name={contents.caption}
                        link={contents.link}
                      />
                    ))}
                  </div>
                </Row>
              </Col>
            </div>
          </div>
          <br />
          <div>
            <h2 style={{ textAlign: "center" }}> Awards </h2>
          </div>
          <Awards />
          <Testimonial />
        </Container>
      </section>
    </div>
  );
};

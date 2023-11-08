import React from "react";
import { Container } from "react-bootstrap";

export const About = () => {
  return (
    <div className="about">
      <section>
        <Container>
          <div>
            <h2 style={{ textAlign: "center" }}>Welcome to Our Family</h2>
          </div>
          <div className="gradient-container">
            <div className="gradient-line"></div>
          </div>
        </Container>
      </section>
    </div>
  );
};

import React from "react";
import { NavBar } from "../component/NavBar";
import { Container } from "react-bootstrap";
import { Footer } from "../component/Footer";
import { Solarwinds } from "../component/SolarWinds/Solarwinds";

const solarwinds = () => {
  return (
    <>
      <NavBar />
      <Container>
      <div className="solarwinds">
       <Solarwinds />
      </div>
      </Container>
      <Footer />
    </>
  );
};

export default solarwinds;

import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../assets/img/techsa.png";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="/"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/AboutUs"
              className={
                activeLink === "About Us" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("About Us")}
            >
              About Us
            </Nav.Link>
            <NavDropdown title="Products" id="products-dropdown">
              <NavDropdown.Item
                href="/SolarWinds"
                className="navbar-link"
                onClick={() => onUpdateActiveLink("solarwinds")}
              >
                SolarWinds
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/bigfix"
                className="navbar-link"
                onClick={() => onUpdateActiveLink("bigfix")}
              >
                BigFix
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/powerbi"
                className="navbar-link"
                onClick={() => onUpdateActiveLink("powerbi")}
              >
                PowerBI
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              href="/Contact"
              className={
                activeLink === "Contact" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("Contact")}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

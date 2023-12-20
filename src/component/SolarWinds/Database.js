import React from "react";
import { NavBar } from "../NavBar";
import { Footer } from "../Footer";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { BsDatabaseFillGear } from "react-icons/bs";
import { FcAddDatabase } from "react-icons/fc";

export const Database = () => {
  return (
    <>
      <NavBar />
      <div className="Database">
        <h2>Database Performance Monitoring</h2>
        <p>Databases serve different purposes. Your monitoring must adapt.</p>
        <div className="flex-container">
          <div></div>
          <div className="button-container">
            <Link to="/Contact">
              <Button className="custom-button">
                Request Demo <FaLongArrowAltRight />
              </Button>
            </Link>
          </div>
          <div></div>
        </div>
        <h3>
          Database Management <b>Products</b>
        </h3>
        <div className="product-container">
          <div>
            <Row>
              <Col md={6}>
                <BsDatabaseFillGear size={40} />
                <h4 style={{ marginBottom: "10px" }}>SolarWinds SQL Sentry</h4>
                <p style={{ color: "grey", marginBottom: "15px" }}>
                  SolarWinds® SQL Sentry® software serves the Microsoft SQL
                  Server platform with metrics built to dive deep into your
                  databases.
                </p>
                <div  style={{color:'grey'}}>
                Monitor SQL Server, Azure SQL DB, SQL Server Analysis Services,
                and Windows, and VMware hosts.
                <br />
                SQL Sentry has proven scalability, monitoring over 800 SQL
                Server instances with one database.
                <br />
                See high-impact queries in the Top SQL view, to identify and fix
                query performance bottlenecks.
                </div>
              </Col>
              <Col md={6}>
                <FcAddDatabase  size={40} />
                <h4 style={{ marginBottom: "10px" }}>Database Performance Analyzer</h4>
                <p style={{ color: "grey", marginBottom: "15px" }}>
                  SolarWinds Database Performance Analyzer supports a wide range
                  of proprietary databases to give a holistic picture of
                  performance.
                </p>
                <div style={{color:'grey'}}>
                 Monitor Oracle, Postgres, Microsoft SQL Server, MariaDB, MySQL,
                Amazon Aurora, and SAP
                <br />
                 Integrate database monitoring with Orion®
                modules and SolarWinds Hybrid Cloud Observability Integrate
                database monitoring with Orion® modules and SolarWinds Hybrid
                Cloud Observability
                <br />
                Experience anomaly detection powered by machine learning built to get better over time
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

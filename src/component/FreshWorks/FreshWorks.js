import React from "react";
import { Summary } from "./Summary";
import BoxContainer from "./BoxContainer";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FaLongArrowAltRight } from "react-icons/fa";

export const FreshWorks = () => {
  return (
    <>
    <div>
      <h2 style={{ textAlign: "center" }}>FRESHWORKS</h2>
      <Summary />
      <BoxContainer />
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link to="/Contact">
          <Button className="custom-button">
            Request Demo <FaLongArrowAltRight />
          </Button>
        </Link>
      </div>
    </div>
    </>
  );
};

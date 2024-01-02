import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectCard = ({ imgUrl, link, description }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Col sm={4} md={4}>
      <div className="product-Solar1" data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600">
          <Link to={link} className="proj-link">
            <img src={imgUrl} alt="alt" />
          </Link>
        </div>
    </Col>
  );
};

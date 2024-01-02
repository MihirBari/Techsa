import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectCard = ({ imgUrl, link, description }) => {
  return (
    <Col sm={4} md={4}>
        <div className="product-Solar1 img ">
          <div >
          <Link to={link} className="proj-link">
            <img src={imgUrl} alt="alt" />
          </Link>
            </div>
        </div>
    </Col>
  );
};
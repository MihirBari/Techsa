import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectCard = ({ imgUrl, link, description }) => {
  return (
    <Col sm={4} md={3}>
        <div className="proj-imgbx">
          <Link to={link} className="proj-link">
          <div >
            <img src={imgUrl} alt="alt" />
            </div>
            <div className="proj-txtx">
              <h4>{description}</h4>
            </div>
            
          </Link>
        </div>
    </Col>
  );
};
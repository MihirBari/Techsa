import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectCard = ({ imgUrl, link, description }) => {
  return (
    <Col sm={4} md={4}>
        <div className="proj-imgbx">
          <Link to={link} className="proj-link">
          <div >
            <img src={imgUrl} alt="alt" />
            </div>
            <div className="proj-txtx">
            
            </div>
            
          </Link>
        </div>
    </Col>
  );
};
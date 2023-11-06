import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

// const defaultOptions = {
//   reverse: false, 
//   max: 35, 
//   perspective: 1000, 
//   scale: 1.1,
//   speed: 1000, 
//   transition: true, 
//   axis: null,
//   reset: true, 
//   easing: "cubic-bezier(.03,.98,.52,.99)", 
// };

export const ProjectCard = ({ imgUrl, link, description }) => {
  return (
    <Col sm={4} md={3}>
        <div className="proj-imgbx">
          <Link to={link} className="proj-link">
            <img src={imgUrl} alt="alt" />
            <div className="proj-txtx">
              <h4>{description}</h4>
            </div>
          </Link>
        </div>
    </Col>
  );
};
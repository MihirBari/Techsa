import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {Tilt} from 'react-tilt';

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc.
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

export const ProjectCard = ({ title, imgUrl, link }) => {
  return (
    <Col sm={6} md={4}>
      <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
        <div className="proj-imgbx">
          <Link to={link} className="proj-link">
            <img src={imgUrl} alt="alt" />
            <div className="proj-txtx">
              {/* <h4>{title}</h4> */}
            </div>
          </Link>
        </div>
      </Tilt>
    </Col>
  );
};
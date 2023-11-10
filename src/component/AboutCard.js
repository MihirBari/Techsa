import React from 'react';
import { Col } from "react-bootstrap";

export const AboutCard = ({ imgUrl, caption }) => {
  return (
    <Col>
      <div className="abt-imgbx">
        <div>
          <img src={imgUrl} alt="alt" />
          <div className="caption">{caption}</div>
        </div>
      </div>
    </Col>
  );
};

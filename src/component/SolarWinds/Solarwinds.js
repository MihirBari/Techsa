import React from 'react';
import Box from './box';
import { Summary } from './summary';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FaLongArrowAltRight } from 'react-icons/fa';

export const Solarwinds = () => {
  return (
    <>
      <Helmet>
        <title>SolarWinds | Techsa Services Pvt Ltd.</title>
        <meta name="description" content="Description of your About Us page" />
      </Helmet>
      <h2 style={{ textAlign: 'center' }}>SOLARWINDS</h2>
      <Summary />
      <Box />

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Link to="/Contact">
          <Button className="custom-button">
            Request Demo <FaLongArrowAltRight />
          </Button>
        </Link>
      </div>
    </>
  );
};

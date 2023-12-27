import React, { useEffect, useState } from 'react';
import { Loader } from '../component/loader'; 
import { NavBar } from '../component/NavBar';
import { Container } from 'react-bootstrap';
import { Footer } from '../component/Footer';
import { Solarwinds } from '../component/SolarWinds/Solarwinds';

const SolarwindsPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <NavBar />
          <Container>
            <div className="solarwinds">
              <Solarwinds />
            </div>
          </Container>
          <Footer />
        </div>
      )}
    </>
  );
};

export default SolarwindsPage; 
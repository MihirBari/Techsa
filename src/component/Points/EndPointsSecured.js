import React from 'react';
import './Points.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import useCountUpAnimation from './useCountUpAnimation '; // Import the custom hook

export const EndPointsSecured = () => {
  const target = 350000;
  const duration = 5000; 

  const count = useCountUpAnimation(target, duration);

  return (
    <div className="row-container">
      <div>
        <FontAwesomeIcon icon={faKey} fade style={{ color: "#1ec867", height: "50px" }} />
      </div>
      <div>
        <p>
          {count}+ 
          <br />
          EndPoints Secured
        </p>
      </div>
    </div>
  );
};

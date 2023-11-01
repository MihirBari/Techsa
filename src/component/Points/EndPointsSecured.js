import React, { useState, useEffect } from 'react';
import './Points.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';

export const EndPointsSecured = () => {
  const [count, setCount] = useState(0);
  const target = 4500; 
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (count < target) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, ); // Specify the interval duration (e.g., 1000ms for 1 second).

    return () => {
      clearInterval(interval);
    };
  }, [count, target]);

  return (
    <>
    <div className="row-container">
    <div >
    <FontAwesomeIcon icon={faKey} fade style={{color: "#1ec867" , height:"50px"}} />
    </div>
    <div>
      <p >{count}+
      <br />
      EndPoints Secured
      </p>
    </div>
    </div>
    </>
  );
};

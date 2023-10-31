import React, { useState, useEffect } from 'react';
import './Points.css';

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
    <div className="circle">
      <p className="count">{count}+</p>
    </div>
    </>
  );
};

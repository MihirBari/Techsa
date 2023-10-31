import React, { useState, useEffect } from 'react';
import './Points.css';

export const ClientsAddressed = () => {
    const [count, setCount] = useState(0);
    const target = 1000; 
    
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
      <div className="centered-container">
        <div className="circle">
          <p className="count">{count}+</p>
        </div>
        <br />
        <br/>
        <div style={{float:"left"}}>
            <h5>Clients Addressed</h5>
        </div>
      </div>
    );
};

import React, { useState, useEffect } from 'react';
import './Points.css';

export const DevicesMonitored = () => {
    const [count, setCount] = useState(0);
    const target = 2500; 
    
    useEffect(() => {
      const interval = setInterval(() => {
        if (count < target) {
          setCount((prevCount) => prevCount + 1);
        } else {
          clearInterval(interval);
        }
      }, ); 
      return () => {
        clearInterval(interval);
      };
    }, [count, target]);
  
    return (
      <div className="centered-container">
        <div className="circle">
          <p className="count" style={{float:'left'}} >{count}+</p>
        </div>
        <br />
        <br/>
        <div style={{float:"left"}}>
            <h5>Devices Monitored</h5>
        </div>
      </div>
    );
};

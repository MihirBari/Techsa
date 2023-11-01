import React, { useState, useEffect } from 'react';
import './Points.css';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
      <>
      <div className="row-container">
      <div >
      <FontAwesomeIcon icon={faPeopleGroup} bounce style={{color: "#1ec867" , height:"50px"}} />
      </div>
      <div>
        <p >{count}+
        <br />
        Clients Addressed
        </p>
      </div>
      </div>
      </>
    );
};
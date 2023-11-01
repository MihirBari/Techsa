import React, { useState, useEffect } from 'react';
import './Points.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';

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
        <div className="row-container">
            <div>
                <FontAwesomeIcon icon={faDesktop} shake style={{ color: "#1ec867", height:"50px" }} />
            </div>
            <div>
                <p style={{float:"left"}}>{count}+<br />Devices Monitored</p>
            </div>
        </div>
    );
};


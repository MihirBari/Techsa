import React from 'react';
import './Points.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import useCountUpAnimation from './useCountUpAnimation ';

export const DevicesMonitored = () => {
    const target = 2500;
    const duration = 5000;
    const count = useCountUpAnimation(target, duration);

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


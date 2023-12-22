import React from 'react';
import './Points.css';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useCountUpAnimation from './useCountUpAnimation ';

export const ClientsAddressed = () => {
  const target = 200;
  const duration = 5000;
  const count = useCountUpAnimation(target, duration);

    return (
      <>
      <div className="row-container">
      <div >
      <FontAwesomeIcon icon={faPeopleGroup} bounce style={{color: "#1ec867" , height:"50px"}} />
      </div>
      <div>
        <p >{count}+
        <br />
        Clients
        </p>
      </div>
      </div>
      </>
    );
};
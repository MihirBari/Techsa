import React from 'react';
import logo from '../assets/img/techsa.png';
import "./style.css"

export const Loader = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        animation: 'spin 2s infinite',
      }}
    >
      <img
        style={{
          height: '100px',
          width: '75px',  // Corrected typo here
          display: 'flex',
          alignItems: 'center',
        }}
        src={logo}
        alt='loader'
      />
    </div>
  );
};


import React from 'react';

export const  Footer = () =>{
  return (
    <footer style={footerStyle}>
      <p>&copy; 2023 Techsa Services Pvt. Ltd.</p>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
};
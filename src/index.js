import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter from React Router DOM
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Wrap your App component with BrowserRouter
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    {/* Renders App component from App.js */}
    <App />
  </React.StrictMode>,
  // React renders the App component in the 'root' element
  document.getElementById('root')
);
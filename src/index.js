import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App.jsx';
import Animations from './Animations';

ReactDOM.render(
  <React.StrictMode>
    <Animations />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
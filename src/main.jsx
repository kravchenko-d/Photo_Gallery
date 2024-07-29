// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StoresProvider } from './hooks/useStores';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StoresProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StoresProvider>
);

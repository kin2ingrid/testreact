import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Vos styles globaux
import App from './App'; // Importez App pour gérer les routes
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* Rendre App ici pour utiliser les routes */}
  </React.StrictMode>
);

reportWebVitals();


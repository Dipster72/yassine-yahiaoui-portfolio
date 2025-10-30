import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App'; 

// C'est le point d'entrée standard qui relie React au div id="root" de votre index.html
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Afficher l'application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

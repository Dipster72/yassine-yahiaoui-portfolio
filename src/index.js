import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App'; 
// Note: nous devons ajuster l'importation de App car il est maintenant un niveau au-dessus (../App).
// Cependant, si vous décidez de laisser App.tsx dans src, vous pouvez simplement l'importer comme './App'.

// Définir le conteneur racine (dans index.html)
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Afficher l'application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

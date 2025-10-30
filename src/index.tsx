import React from 'react';
import ReactDOM from 'react-dom'; // Notez que nous importons directement de 'react-dom'

// C'est la ligne à noter : elle remonte d'un niveau (..) pour trouver App.tsx à la racine
import App from './App'; 

// Cible l'élément HTML avec l'ID 'root'
const container = document.getElementById('root');

// Vérifie que l'élément existe avant de continuer
if (container) {
  // Rendu en utilisant la méthode de rendu plus ancienne et plus compatible
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    container
  );
} else {
  console.error('Root element not found in index.html');
}

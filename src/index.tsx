import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

const rootElement = document.getElementById('root');


if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
);
}else {
  console.error("L'élément avec l'ID 'root' est introuvable dans le document HTML. Impossible de monter l'application React.");
}


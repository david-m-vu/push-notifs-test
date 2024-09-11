import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// this checks to see if theres a service worker file and, if there is one, registers it. 
// You can check to see if theres a service worker running on google chrome by doing inspect element and clicking on the Application tab
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./firebase-messaging-sw.js')
    .then(registration => {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch(error => {
      console.error('Service Worker registration failed:', error);
    });
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


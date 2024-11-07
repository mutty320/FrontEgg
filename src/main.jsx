import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FronteggProvider } from '@frontegg/react';


const contextOptions = {
  baseUrl: 'https://app-cokymz04rild.frontegg.com',
  clientId: 'b186440d-41cc-43b4-8ac5-5b82fcb8007b',
  appId: 'd690ee34-a188-4f8b-9f0d-84dd84a1be85' 
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FronteggProvider 
    contextOptions={contextOptions} 
    hostedLoginBox={true}
    >
        <App />
    </FronteggProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
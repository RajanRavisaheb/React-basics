import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './components/Navbar';
import Form from './components/Form';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
   
    <Navbar />
    <div className="container">
    <Form heading = "this is form" />
    </div>
    
    
  </React.StrictMode>
);

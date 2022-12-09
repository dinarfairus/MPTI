import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from './routers/Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/global.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  </React.StrictMode>
);
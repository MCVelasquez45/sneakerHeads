import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; 
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import ShopContextProvider from './context/shop-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShopContextProvider>
    <Router>
      <App />               
    </Router>
    </ShopContextProvider>
  </React.StrictMode>
);



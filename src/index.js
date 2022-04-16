import React from 'react';

import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<React.StrictMode>
 <BrowserRouter> <App /></BrowserRouter>
</React.StrictMode>);




reportWebVitals();

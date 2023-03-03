import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './app/AAA-FINAL/App';
import { BrowserRouter } from 'react-router-dom';

const index
    = ReactDOM.createRoot(document.getElementById('root'));

index.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

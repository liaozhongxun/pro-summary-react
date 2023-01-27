import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom' // BrowserRouter history模式

import App from './App';
import 'normalize.css'
import '@/assets/css/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <App />
    </HashRouter>
);

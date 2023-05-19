import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "modern-normalize/modern-normalize.css";
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './Redux/store.js';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter basename="/own-store/">
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
)

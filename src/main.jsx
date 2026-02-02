import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
console.log("React app is mounting...");


createRoot(document.getElementById('root')).render(

    <App />
)

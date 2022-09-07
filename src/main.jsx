import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import './styles/index.css'
import './styles/utility.scss'
import Plugins from "./plugins/index.js";


const Main = () => {
    Plugins()

    return (
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Main/>
    </BrowserRouter>
)

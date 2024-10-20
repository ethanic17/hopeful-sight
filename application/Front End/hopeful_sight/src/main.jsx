import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Pages
import { AboutUs } from './pages/About.jsx'
import { Account } from './pages/Account.jsx'
import { Home } from './pages/Home.jsx'
import { Map } from './pages/Map.jsx'
// already identified in app.jsx

const root = ReactDOM.createRoot(document.getElementById('glasses1'))
root.render(<Catalog />)
// This should create unique ID's for the glasses
// Must incorportate this with the database
// Using QuerySelector to select the glasses


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

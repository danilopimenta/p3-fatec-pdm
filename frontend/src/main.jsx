import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'primeflex/primeflex.min.css'
import 'primereact/resources/themes/lara-light-teal/theme.css'
import 'primereact/resources/primereact.min.css'

createRoot(document.getElementById('root')).render(<App />)

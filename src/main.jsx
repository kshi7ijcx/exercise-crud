import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import { WorkoutContextProvider } from './context/workoutContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <WorkoutContextProvider>
        <App />
      </WorkoutContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

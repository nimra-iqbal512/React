import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { CounterProvider } from "./context/Counter.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </StrictMode>,
)

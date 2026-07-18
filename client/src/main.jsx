import { createRoot } from "react-dom/client"
import { StrictMode } from 'react'
import Home from "./Home"
import Dashboard from "./Dashboard"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <Dashboard />
  </StrictMode>
)
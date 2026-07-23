import { createRoot } from "react-dom/client"
import { StrictMode } from 'react'
import App from "./App"
import Employee from "./components/Employee"
import Department from "./components/Department"
import Event from "./Event"
import State from "./State"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <br />
    <Event />
    <State />
  </StrictMode>
)
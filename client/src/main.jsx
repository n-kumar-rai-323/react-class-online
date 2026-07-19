import { createRoot } from "react-dom/client"
import { StrictMode } from 'react'
import Nav from "./Nav"


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Nav/>
  </StrictMode>
)
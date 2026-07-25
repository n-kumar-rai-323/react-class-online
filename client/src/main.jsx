import { createRoot } from "react-dom/client"
import { StrictMode } from 'react'
import SelectData from "./SelectData"




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SelectData />
  </StrictMode>
)

import { createRoot } from "react-dom/client"
import { StrictMode } from 'react'
import ShoppingCart from "./Cart"
// import Change from "./Change"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <ShoppingCart />
     </>
  </StrictMode>
)

import { createRoot } from "react-dom/client"
import { StrictMode } from 'react'
import "./Nav.css"
import "./Card.css"

import Card from "./Card"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <nav className="navbar">
        <ul className="nav-list">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <Card/>
    </>

  </StrictMode>
)
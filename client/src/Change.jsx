import { useState } from "react"
import "./Change.css"

function Change(){

    
    const [dark, setDark] =useState(false)

    function toggleTheme(){
        setDark(!dark)
    }
    return(
        <>
        <body style={{
            backgroundColor: dark? "black":"white"
        }}>
            <h2>{dark ? "Dark":"light"}</h2>
       <button onClick={()=>setDark(!dark)}>Toggl Theme</button>
        </body>
        
        </>
    )
}

export default Change
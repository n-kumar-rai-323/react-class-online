import { useState } from "react";
import Home from "./Home";

function App2() {
    const [show, setShow] = useState(true)
    function btn() {
        setShow(!show)
    }
    return (
        <div>
            <button onClick={btn}>{show ? "Hide Home" : "Show Home"}</button>
            <hr />
            {show && <Home />}
        </div>
    )
}

export default App2
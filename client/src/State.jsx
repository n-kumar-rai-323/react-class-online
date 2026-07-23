import { useState } from "react";
function State() {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)

    }
    function decrement() {
        setCount(count - 1)
    }

    // Dark page Dark 

    return (
        <>
            <h1>{count}</h1>
            <button onClick={increment}>Count {count}</button>
            <button onClick={decrement}>- </button>
        </>
    )
}
export default State;
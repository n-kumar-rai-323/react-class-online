import { useEffect, useState } from "react";

function StateEf() {
    const [count, setCount] = useState(0)
    // useEffect(() => {
    //     console.log("Welcome TO Home")
    //     // No Dependency Array
    // })

    // useEffect(() => {
    //     console.log("Welcome to react")
    //     // Empty Dependency Array
    // }, [])
    function increment() {
        setCount(count + 1)
    }
    useEffect(() => {
        // document.title = `Count: ${count}`
        const timer = setInterval(() => {
            console.log("Running")
        }, 1000)
        // Specific dependencies 

        return () => {
            clearInterval(timer)
        }
    }, []);


    return (
        <>
            <p>{count}</p>

            <button onClick={increment}>Increment</button>

        </>
    )
}

export default StateEf
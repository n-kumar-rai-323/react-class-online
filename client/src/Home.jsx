import { useEffect, useState } from "react"
function Home() {
    const [data, setData] = useState(0)
    useEffect(() => {
        console.log("Inside Home")
        const timer = setInterval(() => {
            console.log("Running.....")
        }, 1000)

        return () => {
            console.log("Outside Home")
            clearInterval(timer)
        }
    }, [data])

    function ClickBtn() {
        setData(data + 1)
    }
    return (
        <div>
            <h1>Home Component</h1>
            <p>I am  Visible on the Screen.</p>
            <button onClick={ClickBtn}>Click me </button>
        </div>
    )
}

export default Home
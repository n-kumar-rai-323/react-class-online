import { useEffect, useState } from "react"

function Timer() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const exit = setTimeout(() => {
            setLoading(false)
        }, 5000)

        return () => clearTimeout(exit)
    }, [])

    return (
        <div>{loading ? <h1>Loading...</h1> : <h1>Data Loaded </h1>}
            <button>About</button>
        </div>
    )
}

export default Timer
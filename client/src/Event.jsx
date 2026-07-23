import { useState } from "react"
function Event() {
    const [username, setUsername] = useState("")

    // function handleClick(event) {

    // }
    return (
        <>

            <input value={username} onChange={(event) => setUsername(event.target.value)} />
            <p>{username}</p>


        </>
    )
}
export default Event
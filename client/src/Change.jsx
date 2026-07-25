import { useState } from "react"
import "./Change.css"

function Change() {
    const [like,setLike] = useState(false)
    
    function toLike() {
        setLike(!like)
    }

    function todislike(){
        setLike(!like)
}

return (
    <>
       
        <h2>{like? "Liked" : "Not Liked"}</h2>
        <div className="btn">
           <button onClick={toLike}>👍</button>
        <button onClick={todislike}>👎</button>
        </div>
       




    </>
)
}

export default Change
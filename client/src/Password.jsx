import { useState } from "react"
const Password = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [liked, setLiked] = useState(false)
    const [name, setName] = useState("")
    const [count, setCount] = useState(0)
    const [quantity, setQuentity] = useState(1)

    function increaseQuantity() {
        setQuentity((prev) => prev + 1)
    }
    function decreaseQuantity() {
        if (quantity > 1) {
            setQuentity((prev) => prev - 1)
        }
    }
    function increment() {
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
        console.log(count)
    }
    function clickMe() {
        setShowPassword(!showPassword)
    }
    function toLike() {
        setLiked(!liked)
    }
    function handleChange(event) {
        setName(event.target.value)
    }
    return (
        <>
            <h1>{quantity}</h1>
            <button onClick={decreaseQuantity}>Decrement</button>
            <button onClick={increaseQuantity}>Increase</button>

            <br />
            <br /><br />
            <h1>Show Password Example</h1>
            <input type={showPassword ? "text" : "password"} placeholder="Enter Password" />
            <br />
            <button onClick={clickMe}>
                {showPassword ? "Hiden Password" : "Show Password"}
            </button>
            <h1>{liked ? "🩷 Liked" : " 🙅🏽‍♂️ Not Liked "}</h1>
            <button onClick={toLike}>
                {liked ? "Unlike" : "Like"}
            </button>
            <br />
            <br />
            <h3>Input Eample</h3>
            <input type="text" placeholder="Enter your name" value={name} onChange={handleChange} />
            <h1>Your Name : {name}</h1>

            <br />
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
        </>
    )
}
export default Password 
import "./Home.css"
const Home = () => {
    const company = "Netflix"
    const age = 26;
    const save = () => {
        console.log("Click me")
    }
    function greet() {
        return "Good Night"
    }

    // object property 
    const user = {
        name: "Nishan",
        age: 34
    }
    const isLoggedIn = false
    return (
        <>

            <div className="container">
                <h3>{isLoggedIn ? "Dashboard" : "login"} </h3>
                <h2>{greet()}</h2>
                <h1 className="title">Welcome to {company}</h1>
                <p>{5 + 6}</p>
                <p>{user.name}</p>
                <button className="btn" onClick={save}>Click</button>

            </div>
        </>
    )
}

export default Home;
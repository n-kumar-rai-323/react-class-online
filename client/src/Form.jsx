function Form() {
    return <>
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="Enter your email" />
            <button>Log In</button>
        </form>
    </>
}

export default Form;
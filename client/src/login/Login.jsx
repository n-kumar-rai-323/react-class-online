function Login() {
    return (
        <>
            <div className="login-container">
                <div className="login-box">
                    <h1>Login</h1>
                    <p className="subtitle"> Welcome back! Please login to your account.</p>
                    <label>Email Address</label>
                    <div className="input-box">
                        <i className=""></i>
                        <input type="email" placeholder="Enter your email" />
                    </div>
                    <label>Password</label>

                    <div className="input-box">
                        <i className=""></i>
                        <input type="password" placeholder="Enter your password" />
                    </div>

                    <a href="/" className="forget">Forgot Password</a>
                    <button>Login</button>
                    <p className="register">
                        Don't have an account?
                        <a href="/register">Register</a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login
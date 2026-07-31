function Register() {
    return (
        <div className="register-container">
            <div className="register-box">
                <h1>Create Account</h1>
                <p className="subtitle">Please fill in the information below.</p>
                <label>Full Name</label>
                <div className="input-box">
                    <i className=""></i>
                    <input type="text" placeholder="Enter your full name" />
                </div>

                <label>Email Address</label>
                <div className="input-box">
                    <i className=""></i>
                    <input type="email" placeholder="Enter your email" />
                </div>

                <label>Password</label>
                <div className="input-box">
                    <i className=""></i>
                    <input type="password" placeholder="Enter  password" />
                </div>


                <label>Confirm Password</label>
                <div className="input-box">
                    <i className=""></i>
                    <input type="password" placeholder="Confirm password" />
                </div>


                <label>Gender</label>
                <div className="input-box">
                    <i className=""></i>
                    <select >
                        <option>Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>

                <button>Create Account</button>
                <p className="login">
                    Already have an account? <a href="/login">Login</a>
                </p>
            </div>
        </div>
    )
}

export default Register
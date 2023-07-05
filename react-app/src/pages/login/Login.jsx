import "./login.css"

export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">The Logo</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you and The Logo.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">

                        <input placeholder="Email" className="loginEmail" />
                        <input placeholder="Password" className="loginPassword" />

                        <button className="loginButton">Login</button>
                        <span className="loginForgot">Forgot credetials</span>
                        <button className="loginRegisterButton">Create a New account</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

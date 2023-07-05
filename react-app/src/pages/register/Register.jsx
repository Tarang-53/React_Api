import "./register.css"

export default function Register() {
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
                        <input placeholder="Username" className="loginEmail" />
                        <input placeholder="Email" className="loginEmail" />
                        <input placeholder="Password" className="loginPassword" />
                        <input placeholder="Password again" className="loginPassword" />
                        <button className="loginButton">Sign up</button>
                        <button className="loginRegisterButton">Login to your account</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

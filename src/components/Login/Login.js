import React from "react";
import "./styleLogin.css";


const Login = () => {
    return (
        <div className="containerDiv">
            <div className="containerLogin">
                <form>
                    <div className="usernameDiv">
                        <label className="labelLogin">Username:</label>
                        <input className="inputLogin" type="text"></input>
                    </div>
                    <div className="passwordDiv">
                        <label className="labelLogin">Password:</label>
                        <input className="inputLogin" type="password"></input>
                    </div>
                    <div className="buttonDiv">
                        <button className="buttonLogin" type="submit">Sign in</button>
                    </div>
                </form>
            </div>
            <div className="notRegisteredDiv">
                <p className="notRegistered">Not registered yet?
                    <a href="" className="registerLink"> Create an account.</a>
                </p>
            </div>
        </div>
    );
}


export default Login;
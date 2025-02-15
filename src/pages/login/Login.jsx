import React from "react";
import "./login.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
export default function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <i className="fas fa-user user-icon"></i>
        <input type="text" placeholder="Username" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <a href="#" className="forgot-password">
          Forgot Password?
        </a>
        <button className="login-button">Login</button>
      </div>
    </div>
  );
}

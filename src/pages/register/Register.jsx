import React from "react";
import "./register.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Register() {
  return (
    <div className="register-container">
      <div className="register-box">
        <div className="icon-container">
          <i className="fas fa-coffee user-icon"></i>
        </div>
        <h2>Create Account</h2>
        
        <div className="input-group">
          <i className="fas fa-user field-icon"></i>
          <input type="text" placeholder="Full Name" className="input-field" />
        </div>

        <div className="input-group">
          <i className="fas fa-envelope field-icon"></i>
          <input type="email" placeholder="Email" className="input-field" />
        </div>

        <div className="input-group">
          <i className="fas fa-lock field-icon"></i>
          <input type="password" placeholder="Password" className="input-field" />
        </div>

        <div className="input-group">
          <i className="fas fa-map-marker-alt field-icon"></i>
          <input type="text" placeholder="Address" className="input-field" />
        </div>

        <div className="input-group">
          <i className="fas fa-store field-icon"></i>
          <select className="input-field">
            <option value="">Select Role</option>
            <option value="seller">Seller</option>
            <option value="buyer">Buyer</option>
          </select>
        </div>

        <button className="register-button">Register</button>
        
        <a href="/Login" className="login-link">
          Already have an account? Login
        </a>
      </div>
    </div>
  );
}
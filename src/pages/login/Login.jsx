import React, { useState, useEffect } from "react";
import "./login.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Login() {
  const [usuarios, setUsuarios] = useState([]);
  const consultarAPI = async () => {
    try {
      const response = await fetch(`http://localhost:3000/usuarios`);
      if (!response.ok) throw new Error("Error al obtener los usuarios");
      const data = await response.json();
      setUsuarios(data); // Almacenar la lista de usuarios
      console.log("Usuarios obtenidos:", data);
    } catch (error) {
      console.error("Error en la consulta:", error.message);
    }
  };

  useEffect(() => {
    consultarAPI();
  }, []);
    

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="icon-container">
          <i className="fas fa-user user-icon"></i>
        </div>
        <h2>Login</h2>

        <div className="input-group">
          <i className="fas fa-user field-icon"></i>
          <input type="text" placeholder="Username" className="input-field" />
        </div>

        <div className="input-group">
          <i className="fas fa-lock field-icon"></i>
          <input type="password" placeholder="Password" className="input-field" />
        </div>

        <a href="#" className="forgot-password">
          Forgot Password?
        </a>
        <a href="/register" className="register-link">
          Don't have an account? Register
        </a>

        <button className="login-button">Login</button>


      </div>
    </div>
  );
}


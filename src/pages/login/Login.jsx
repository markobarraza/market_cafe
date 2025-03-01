import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useProfile } from "../../context/ProfileContext";
import "./login.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate()
  const { setUserToken } = useProfile(); // Usar el contexto

  const API_URL = "http://localhost:3000/login"; // URL del backend

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      console.log("Enviando solicitud de inicio de sesión...");
      const response = await axios.post(API_URL, { email, contrasena: password });
      console.log("Respuesta del servidor:", response.data);
      localStorage.setItem("token", response.data.token);
      setUserToken(true); // Actualiza el estado de autenticación
      alert("Logueado con éxito");
      navigate("/profile"); // Redirige al perfil después del login
    } catch (err) {
      setError(err.response?.data?.message || "Error al iniciar sesión");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="icon-container">
          <i className="fas fa-user user-icon"></i>
        </div>
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <i className="fas fa-user field-icon"></i>
            <input 
              type="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field" 
              required 
            />
          </div>

          <div className="input-group">
            <i className="fas fa-lock field-icon"></i>
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field" 
              required 
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <a href="#" className="forgot-password">Forgot Password?</a>
          <a href="/register" className="register-link">Don't have an account? Register</a>

          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
}

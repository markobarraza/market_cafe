import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:3000/usuarios/me"; // Se define fuera del useEffect

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("No hay sesión activa");

        const response = await axios.get(API_URL, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUser(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Error al obtener el perfil");
      }
    };

    fetchUsuario();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Elimina el token
    navigate("/login"); // Redirige al login
  };

  if (error) return <p className="error-message">{error}</p>;
  if (!user) return <p>Cargando perfil...</p>;

  return (
    <div className="profile-container">
      <h2>Perfil del Usuario</h2>
      <p><strong>Nombre:</strong> {user.nombre}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Dirección:</strong> {user.direccion}</p>
      <p><strong>Rol:</strong> {user.rol}</p>
      <button onClick={handleLogout} className="logout-button">Cerrar sesión</button>
    </div>
  );
};

export default Profile;

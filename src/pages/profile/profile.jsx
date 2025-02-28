import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./profile.css"

const API_URL = "http://localhost:3000/usuarios/me"; // Se define fuera del useEffect
const API_PRODUCTOS_URL = "http://localhost:3000/productos"; // URL para crear productos

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [nombreProducto, setNombreProducto] = useState("");
  const [descripcionProducto, setDescripcionProducto] = useState("");
  const [precioProducto, setPrecioProducto] = useState("");
  const [productos, setProductos] = useState([]);

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

        // Obtener productos del usuario
        const productosResponse = await axios.get(`http://localhost:3000/productos/usuario/${response.data.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setProductos(productosResponse.data);
      } catch (err) {
        setError(err.response?.data?.message || "Error al obtener el perfil o los productos");
      }
    };

    fetchUsuario();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Elimina el token
    navigate("/login"); // Redirige al login
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No hay sesión activa");

      const response = await axios.post(
        API_PRODUCTOS_URL,
        {
          nombre_producto: nombreProducto,
          descripcion: descripcionProducto,
          precio: precioProducto,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log("Producto creado:", response.data);
      // Limpiar el formulario
      setNombreProducto("");
      setDescripcionProducto("");
      setPrecioProducto("");

      // Actualizar la lista de productos del usuario
      setProductos([...productos, response.data]);
    } catch (err) {
      setError(err.response?.data?.message || "Error al crear el producto");
    }
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

      <h3>Publicar Nuevo Producto</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre del Producto:</label>
          <input
            type="text"
            value={nombreProducto}
            onChange={(e) => setNombreProducto(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Descripción del Producto:</label>
          <textarea
            value={descripcionProducto}
            onChange={(e) => setDescripcionProducto(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Precio del Producto:</label>
          <input
            type="number"
            value={precioProducto}
            onChange={(e) => setPrecioProducto(e.target.value)}
            required
          />
        </div>
        <button type="submit">Publicar Producto</button>
      </form>

      <h3>Mis Productos</h3>
      <div className="productos-list">
        {Array.isArray(productos) && productos.map((producto) => (
          <div key={producto.id} className="producto-item">
            <h4>{producto.nombre_producto}</h4>
            <p>{producto.descripcion}</p>
            <p><strong>Precio:</strong> ${producto.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
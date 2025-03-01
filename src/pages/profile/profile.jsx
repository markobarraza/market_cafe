import { useContext } from "react";
import { ProfileContext } from "../../context/ProfileContext";
import "./profile.css";

const Profile = () => {
  const {
    user,
    error,
    nombreProducto,
    setNombreProducto,
    descripcionProducto,
    setDescripcionProducto,
    precioProducto,
    setPrecioProducto,
    productos,
    handleLogout,
    handleSubmit,
    userToken,
    loading, // Añadir loading al destructuring
  } = useContext(ProfileContext);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!userToken) {
    return <p>No estás autenticado. Por favor, inicia sesión.</p>;
  }

  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="profile-container">
      <h2>Perfil del Usuario</h2>
      {user && (
        <>
          <p><strong>Nombre:</strong> {user.nombre}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Dirección:</strong> {user.direccion}</p>
          <p><strong>Rol:</strong> {user.rol}</p>
        </>
      )}
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
        {Array.isArray(productos) &&
          productos.map((producto) => (
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
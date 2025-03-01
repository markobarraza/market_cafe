import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [imagenProducto, setImagenProducto] = useState("");
  const [nombreProducto, setNombreProducto] = useState("");
  const [descripcionProducto, setDescripcionProducto] = useState("");
  const [precioProducto, setPrecioProducto] = useState("");
  const [productos, setProductos] = useState([]);
  const [userToken, setUserToken] = useState(false);
  const [loading, setLoading] = useState(true); // Estado de carga

  const navigate = useNavigate();

  const API_URL = "http://localhost:3000/usuarios/me";
  const API_PRODUCTOS_URL = "http://localhost:3000/productos";

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUserToken(true);
      const fetchUsuario = async () => {
        try {
          const response = await axios.get(API_URL, {
            headers: { Authorization: `Bearer ${token}` },
          });

          setUser(response.data);

          const productosResponse = await axios.get(
            `http://localhost:3000/productos/usuario/${response.data.id}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );

          setProductos(productosResponse.data);
        } catch (err) {
          if (err.response && err.response.status === 401) {
            handleLogout();
          } else {
            setError(err.response?.data?.message || "Error al obtener el perfil o los productos");
          }
        } finally {
          setLoading(false); // Finaliza la carga
        }
      };

      fetchUsuario();
    } else {
      setUserToken(false);
      setLoading(false); // Finaliza la carga si no hay token
    }
  }, []);

  // cerrar sesion
  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserToken(false);
    navigate("/login");
  };

  // funcion para agregar producto nuevo
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No hay sesión activa");

      const response = await axios.post(
        API_PRODUCTOS_URL,
        {
          imagen: imagenProducto,
          nombre_producto: nombreProducto,
          descripcion: descripcionProducto,
          precio: precioProducto,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setImagenProducto("");
      setNombreProducto("");
      setDescripcionProducto("");
      setPrecioProducto("");
      setProductos([...productos, response.data]);
    } catch (err) {
      if (err.response && err.response.status === 401) {
        handleLogout();
      } else {
        setError(err.response?.data?.message || "Error al crear el producto");
      }
    }
  };

  // funcion para eliminar producto
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No hay sesión activa");

      const response = await axios.delete(`${API_PRODUCTOS_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status === 200) {
        // Actualizar la lista de productos después de eliminar
        setProductos(productos.filter(producto => producto.id !== id));
        console.log('Producto eliminado');
      } else {
        console.error('Error al eliminar el producto');
      }
    } catch (error) {
      console.error('Error al eliminar el producto', error);
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        user,
        error,
        imagenProducto,
        setImagenProducto,
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
        loading,
        setUserToken,
        handleDelete,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
export default ProfileProvider;

export const useProfile = () => {
  return useContext(ProfileContext);
};
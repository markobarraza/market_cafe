import { createContext, useState, useContext } from "react";
import axios from "axios";
import { ProfileContext } from "./ProfileContext";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const { user, userToken } = useContext(ProfileContext);
  const navigate = useNavigate();

  let total = carrito.reduce(
    (acumulador, productos) => (acumulador += productos.count),
    0
  );

  let totalPagar = carrito.reduce(
    (acumulador, productos) =>
      acumulador +
      (Number(productos.precio) || 0) * (Number(productos.count) || 0),
    0
  );

  // Función que se ejecuta cuando hacemos click en agregar a carrito
  const agregarAlCarrito = async (producto) => {
    if (!userToken) {
      alert("Debes iniciar sesión para agregar productos al carrito.");
      navigate("/login");
      return;
    }

    // Verificar si el producto ya está en el carrito
    const itemEnCarrito = carrito.find((item) => item.id === producto.id);

    // Si ya está, vamos a disminuir o aumentar la cantidad
    if (itemEnCarrito) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id ? { ...item, count: item.count + 1 } : item
        )
      );
    } else {
      // Si no, agregamos al carrito una propiedad count: 1
      setCarrito([...carrito, { ...producto, count: 1 }]);
    }

    // Llamada a la API para actualizar el carrito en el backend
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:3000/carrito", // URL de tu API para agregar productos al carrito
        { producto_id: producto.id, cantidad: 1 }, // Enviar producto_id y cantidad
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } catch (error) {
      console.error("Error al agregar producto al carrito:", error);
    }
  };

  // Función incrementa en 1 producto
  const incrementar = (producto) => {
    setCarrito((prevCarrito) => {
      let itemCarrito = prevCarrito.find((item) => item.id === producto.id);

      if (itemCarrito) {
        return prevCarrito.map((item) =>
          item.id === producto.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [
          ...prevCarrito,
          { ...producto, count: 1, precio: Number(producto.precio) || 0 },
        ];
      }
    });
  };

  // Función decrementa en 1 producto
  const decrementar = async (producto) => {
    let itemCarrito = carrito.findIndex((item) => item.id === producto.id);

    if (itemCarrito >= 0) {
      const nuevoCarrito = [...carrito];
      if (nuevoCarrito[itemCarrito].count > 1) {
        nuevoCarrito[itemCarrito].count--;
      } else {
        nuevoCarrito.splice(itemCarrito, 1);
      }
      setCarrito(nuevoCarrito);

      // Llamada a la API para actualizar el carrito en el backend
      try {
        const token = localStorage.getItem("token");
        await axios.delete(
          `http://localhost:3000/carrito/${producto.id}`, // URL de tu API para eliminar productos del carrito
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } catch (error) {
        console.error("Error al eliminar producto del carrito:", error);
      }
    }
  };

  const obtenerCantidad = (productos) => {
    const itemEnCarrito = carrito.find((item) => item.id === productos.id);
    return itemEnCarrito ? itemEnCarrito.count : 0;
  };

  return (
    <CartContext.Provider
      value={{
        incrementar,
        decrementar,
        total,
        obtenerCantidad,
        totalPagar,
        agregarAlCarrito,
        carrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => {
  return useContext(CartContext);
};
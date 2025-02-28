import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

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

  //Función que se ejecuta cuando hacemos click en agregar a carrito,
  const agregarAlCarrito = (producto) => {
    //verificar si el producto ya esta en el carrito
    const itemEnCarrito = carrito.find((item) => item.id === producto.id);

    //si ya esta, vamos a disminuir o aumentar la cantidad
    if (itemEnCarrito) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id ? { ...item, count: item.count + 1 } : item
        )
      );
      //sino agregamos al carrito una propiedad count: 1
    } else {
      setCarrito([...carrito, { ...producto, count: 1 }]);
    }
  };
  

  // Funcion incrementa en 1 producto
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

  // Funcion decrementa en 1 producto
  const decrementar = (productos) => {
    let itemCarrito = carrito.findIndex((item) => item.id === productos.id);

    if (itemCarrito >= 0) {
      const nuevoCarrito = [...carrito];
      if (nuevoCarrito[itemCarrito].count > 1) {
        nuevoCarrito[itemCarrito].count--;
      } else {
        nuevoCarrito.splice(itemCarrito, 1);
      }
      setCarrito(nuevoCarrito);
    } else {
    }
  };

  const obtenerCantidad = (productos) => {
    const itemEnCarrito = carrito.find((item) => item.id === productos.id);
    return itemEnCarrito ? itemEnCarrito.count : 0;
  };

  return (
    <CartContext.Provider
      value={{ incrementar, decrementar, total, obtenerCantidad, totalPagar, agregarAlCarrito, carrito }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

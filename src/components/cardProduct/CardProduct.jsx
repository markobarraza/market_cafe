import { useContext } from 'react';
import  {CartContext}  from "../../context/CartContext";
import "./CardProduct.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const CardProduct = ({ producto }) => {
  const { incrementar, decrementar, obtenerCantidad, agregarAlCarrito } = useContext(CartContext);

  return (
    <div key={producto.id} className="containerProduct">
      <div className="containerProduct_img">
        <img src={producto.imagen} className="imageProduct" alt="" />
      </div>

      <div className="containerProduct_info">
        <h2 className="titleProduct">
          {producto.nombre_producto}
        </h2>
        <p className="descriptionProduct">
          {producto.descripcion}
        </p>
        <p className="priceProduct">${producto.precio}</p>

        <div className="addProduct">
          <div onClick={() => agregarAlCarrito(producto)} className="addProduct_button">Añadir</div>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button onClick={() => decrementar(producto)} type="button" className="btn btn-primary btn-addProduct">-</button>
            <p>{obtenerCantidad(producto)}</p>
            <button onClick={() => incrementar(producto)} type="button" className="btn btn-primary btn-addProduct">+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
import {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import "./cart.css";

const Cart = () => {
  const{carrito, incrementar, decrementar, obtenerCantidad, totalPagar} = useContext(CartContext)


  return (
    <div className='container container_carrito'>
      <div className="containerCarrito-bloque">
        <h2 className='tituloCarrito'>Tu carrito</h2>
        {carrito.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          carrito.map((producto) => (
            <div className="container_productsCart">

              <div key={producto.id} className="containerCart" >
                  <div className="containerCart_img">
                      <img src={producto.imagen} className="imageProduct"   alt=""/>
                  </div>

                  <div className="containerCart_info">
                    <div className="containerCart_infoInner">
                      <h2 className="titleProduct">
                          {producto.nombre_producto}
                      </h2>
                      <p className="priceProduct" >${producto.precio	}</p>  
                    </div>

                    <div className="addProduct">
                      <div className="btn-group" role="group" aria-label="Basic example">
                          <button onClick={ ()=> decrementar(producto) } type="button" className="btn btn-primary btn-addProduct">-</button>
                          <p>{obtenerCantidad(producto)}</p>    
                          <button onClick={ ()=> incrementar(producto) } type="button" className="btn btn-primary btn-addProduct">+</button>
                      </div>
                    </div>
                  </div>

              </div>
            </div>
          ))
        )}
        </div>
        <div className="containerCarrito-bloque">
          <h2 className='tituloCarrito2'>Total de tu compra</h2>
          <h3 className='totalCarrito'>${totalPagar}</h3>
          <button className='btnCarrito_pagar'>Pagar</button>
        </div>
    </div>
  );
}

export default Cart


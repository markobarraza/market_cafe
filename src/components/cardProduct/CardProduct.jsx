import {useContext} from 'react'
import { CartContext } from "../../context/CartContext";
import "./CardProduct.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


const CardProduct = ({productos}) => {
    
    const {incrementar, decrementar, obtenerCantidad, agregarAlCarrito} = useContext(CartContext)

  return (
    <div key={productos.id} className="containerProduct" >
            <div className="containerProduct_img">
                <img src={productos.thumbnail} className="imageProduct"   alt=""/>
            </div>

            <div className="containerProduct_info">
                <h2 className="titleProduct">
                    {productos.title}
                </h2>
                <p className="descriptionProduct">
                    {productos.description	}
                </p>
                <p className="priceProduct" >{productos.price	}</p>

                <div className="addProduct">
                        <div onClick={()=> agregarAlCarrito(productos)} className="addProduct_button">Añadir</div>    
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button onClick={ ()=> decrementar(productos) } type="button" className="btn btn-primary btn-addProduct">-</button>
                        <p>{obtenerCantidad(productos)}</p>    
                        <button onClick={ ()=> incrementar(productos) } type="button" className="btn btn-primary btn-addProduct">+</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CardProduct

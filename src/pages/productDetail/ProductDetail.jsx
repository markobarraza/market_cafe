import React from "react";
import "./productDetail.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function ProductDetail() {
    const id = {id:1}
  return (
    <>
        <div className="containerProduct" >
            <div className="containerProduct_img">
                <img src="/src/assets/img-prueba.jpg" className="imageProduct"   alt=""/>
            </div>

            <div className="containerProduct_info">
                <h2 className="titleProduct">
                    Cafetera Italiana Simple Cook Volterra 6 tazas
                </h2>
                <p className="descriptionProduct">
                    La cafetera italiana Siena de Simple Cook destaca por su 
                    diseño elegante con asa de madera y cuerpo de aluminio lacado. 
                    Compatible con todas las encimeras, ofrece mayor presión para 
                    un café más intenso.
                </p>
                <p className="priceProduct" >$ 16.990</p>

                <div className="addProduct">
                        <a href=""  className="addProduct_button">Añadir</a>    
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary btn-addProduct">-</button>
                        <p>0</p>    
                        <button type="button" class="btn btn-primary btn-addProduct">+</button>
                    </div>
                </div>
            </div>
        </div>

    </>
  );
}

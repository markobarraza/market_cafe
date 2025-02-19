import React from "react";
import "./productDetail.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function ProductDetail() {
    const id = {id:1}
  return (
    <>
        <div className="containerProduct" >
            <h1 className="titleProduct">Cafetera Italiana Simple Cook Volterra 6 tazas</h1>
            <p className="descriptionProduct">La cafetera italiana Siena de Simple Cook destaca por su diseño elegante con asa de madera y cuerpo de aluminio lacado. Compatible con todas las encimeras, ofrece mayor presión para un café más intenso.</p>
            <img src="/market_cafe/src/assets/header-cafeteras.png" className="imageProduct"   alt=""/>
            <p className="priceProduct" >$ 16.990</p>

            <div className="addProduct">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-primary">-</button>
                    <p>0</p>
                    <button type="button" class="btn btn-primary">+</button>
                </div>
                    <Button variant="success" >Add To Cart</Button>
                </div>
        </div>

    </>
  );
}

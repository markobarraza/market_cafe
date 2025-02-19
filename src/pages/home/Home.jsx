import React from 'react'
import "./home.css"

const Home = () => {
  return (
    <>
      <header className='header-container'>
        <div className="header_bgcolor">
          <h1>Coffee</h1>
          <p>Publica, compra, encuentra todo lo relacionado al mundo del cafe. registrate y crea tu propia tienda para vender tus productos o solo crea una cuanta para comprar</p>
        </div>
      </header>

      <div className="header_categorias">
            <div className="header_categoria-card">
              <div className="header-img">
                <div className="header-img_fondo"></div>
                <img src="/src/assets/header-cafeteras.png" alt="" />
              </div>
              <h2>Cafeteras</h2>
              <p>Diferentes formas de preparar tu cafe</p>
            </div>
            
            <div className="header_categoria-card">
              <div className="header-img">
                <div className="header-img_fondo"></div>
                <img src="/src/assets/header-cafeGrano.png" alt="" />
              </div>
              <h2>Cafe</h2>
              <p>Molido, de grano entero, etc. para todos los gustos</p>
            </div>
            
            <div className="header_categoria-card">
              <div className="header-img">
                <div className="header-img_fondo"></div>
                <img src="/src/assets/header-molino.png" alt="" />
              </div>
              <h2>Molinos</h2>
              <p>Muele tu propio cafe con esots accesorios</p>
            </div>
            
            
            <div className="header_categoria-card">
              <div className="header-img">
                <div className="header-img_fondo"></div>
                <img src="/src/assets/header-accesorios.png" alt="" />
              </div>
              <h2>Accesorios</h2>
              <p>Accesorios variados para mejorar tu experiencia</p>
            </div>
          </div>

          <div className="container_tiendas container">
            <h3>Productos</h3>
            <div className="tienda-line"></div>
            <div className="container_tiendas-cards">

            </div>
          </div>
    </>
  )
}

export default Home


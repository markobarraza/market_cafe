import {useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { ProfileContext } from "../../context/ProfileContext";
import { miles } from "../../utils/numbers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./navbar.css";

export default function Navbar() {

  const {totalPagar} = useContext(CartContext)
  const { user, userToken, handleLogout} = useContext(ProfileContext)




  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-style2">
      <div className="container ">
        {/* Logo cafe */}
        <Link to="/" className="navbar-brand">
          <img src="/src/assets/logo-coffee.png" alt="" />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            {userToken ? (
              <li className="nav-item user-info line-separador">
                Hola, 
                <Link to="/profile" className="user-login">{user?.nombre}</Link>
                <button onClick={handleLogout} className="btn-logout">Cerrar sesión</button>
              </li>

            ) : (
              <li className="nav-item line-separador dropdown">
              <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fas fa-user navbar-user-icon"></i>
              </div>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/login" className="dropdown-item">Iniciar sesion</Link>
                </li>
                <li>
                  <Link to="/register" className="dropdown-item">Registrarse</Link>
                </li>
              </ul>
            </li>
            )}

            <li className="nav-item">
               <Link to="/carrito" className="nav-link">
                <i className="fa-solid fa-cart-shopping navbar-cart-icon"></i>
                <div className="cart-price">{miles(totalPagar || 0)}</div>
               </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

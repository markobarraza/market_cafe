import React from 'react';
import "./footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; 

export default function Footer() {
  return (
    <div className="footercontainer">
      <div className="icon">
        <a href="https://web.facebook.com/DesafioLatam/?_rdc=1&_rdr">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/desafiolatam/">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/joaquin-astroza-lagos-607481177/">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>

      <div className="footernav">
        <ul>
          <li><a href="#" className="link">Inicio</a></li>
          <li><a href="#" className="link">Catálogo</a></li>
          <li><a href="contacto.html" className="link">Contacto</a></li>
        </ul>
      </div>

      <div className="footerbottom">
        <p>Todos los derechos reservados 2024 &copy;</p>
      </div>
    </div>
  );
}

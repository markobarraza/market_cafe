import React from 'react';
import { Link } from 'react-router-dom';
import "./footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>Redes Sociales</h3>
            <div className="social-icons">
              <a href="https://web.facebook.com/DesafioLatam/?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/desafiolatam/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/joaquin-astroza-lagos-607481177/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Contacto</h3>
            <div className="footer-links">
              <Link to="/contact">Contáctanos</Link>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Legal</h3>
            <div className="footer-links">
              <Link to="/policies">Políticas</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
import React from "react";
import "./contact.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Contact() {
  return (
    <div className="contact-page-wrapper">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Contacto</h1>
          <p>Estamos aquí para ayudarte. No dudes en ponerte en contacto con nosotros.</p>
        </div>
        
        <div className="contact-info">
          <p>Para preguntas, quejas o sugerencias, los usuarios pueden contactarnos a través de:</p>
          
          <div className="contact-method">
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="contact-text">
              <strong>Correo Electrónico</strong>
              <span>soporte@ecommercecafe.com</span>
            </div>
          </div>
          
          <div className="contact-method">
            <div className="contact-icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div className="contact-text">
              <strong>Teléfono</strong>
              <span>+1 (800) 123-4567</span>
            </div>
          </div>
          
          <div className="contact-method">
            <div className="contact-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="contact-text">
              <strong>Dirección</strong>
              <span>Calle Café 123, Ciudad Cafetal, País.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

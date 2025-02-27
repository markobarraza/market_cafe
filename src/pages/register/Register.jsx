import React, { useState } from "react";
import "./register.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { use } from "react";

export default function Register() {
  const [formularioData, setFormularioData] = useState({
    nombre: "",
    email: "",
    contrasena: "",
    direccion: "",
    rol: "",
  }); //almacenamos los valores del formulario, asi cada uno esta vacio con el "" y con el setFormularioData vamos actualizando su estado
  const [mensaje, setMensaje] = useState(""); //con esto enviaremos mensajes al usuario cuando su registro sea exitoso o erroneo y cambiamos su estado con setMensaje
  const handleChange = (e) => {
    setFormularioData({ ...formularioData, [e.target.name]: e.target.value })
  } //Nos ayuda a capturar los cambios en los input del formulario, e.target.name va obteniendo cada campo del formulario es decir el nombre, email, etc y se va actualizando con el
  // valor capturado por e.target.value y ...formularioData nos ayuda a copiar el estado actual y asi podremos actualizar los campos.
  const handleSubmit = async (e) => {
    e.preventDefault(); // Cuando enviemos el formulario esto nos ayudara a que la página no se recargue 
    try {
      const response = await fetch(`http://localhost:3000/usuarios`, {
        method: "POST", //con fecthc y method hacemos la solicitud del metodo post de usuarios 
        headers: { "Content-Type": "application/json" }, //enviamos los datos en formato JSON
        body: JSON.stringify(formularioData) //formData en texto JSON para enviarlo al backend
      })
      const data = await response.json(); //convierte la respuesta del backend en JSON
      if (response.ok) { //Si fue exitoso  el usuario setea el mesaje de registro exitoso y limpia el formulario
        setMensaje("Registro exitoso");
        setFormularioData({ nombre: "", email: "", contrasena: "", direccion: "", rol: "" })
      } else { //Si existe error en el resgitro muestrara que El email ya está registrado del backEnd
        setMensaje(`Error: ${data.message}`)
      }
    } catch (error) { //Se entregara un mensaje por si el BackEnd tiene algun problema de conexión
      setMensaje("Error al conectar con el servidor")

    }
  }
  return ( //se agrega un formulario donde en el input se define value para el campo del formulario y un onchage para capturar el cambio que se escribio en el campo y actualizarlo, ademas de que capute el mensaje que se genere
    <div className="register-container">
      <div className="register-box">
        <div className="icon-container">
          <i className="fas fa-coffee user-icon"></i>
        </div>
        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <i className="fas fa-user field-icon"></i>
            <input type="text" name="nombre" placeholder="Full Name" className="input-field" value={formularioData.nombre} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <i className="fas fa-envelope field-icon"></i>
            <input type="email" name="email"placeholder="Email" className="input-field" value={formularioData.email} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <i className="fas fa-lock field-icon"></i>
            <input type="password" name="contrasena" placeholder="Password" className="input-field" value={formularioData.contrasena} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <i className="fas fa-map-marker-alt field-icon"></i>
            <input type="text" name="direccion" placeholder="Address" className="input-field" value={formularioData.direccion} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <i className="fas fa-store field-icon"></i>
            <select name="rol" className="input-field" value={formularioData.rol} onChange={handleChange} required>
              <option value="">Select Role</option>
              <option value="seller">Seller</option>
              <option value="buyer">Buyer</option>
            </select>
          </div>

          <button type="submit" className="register-button">Register</button>

        </form>

        {mensaje && <p className="message">{mensaje} </p>}
        <a href="/Login" className="login-link">
          Already have an account? Login
        </a>
      </div>
    </div>
  );
}
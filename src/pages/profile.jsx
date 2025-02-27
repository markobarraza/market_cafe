import {useEffect, useState} from 'react'

const profile = () => {
    const [usuario, setUsuario] = useState(null);
    const [error, setError] = useState(null);
    

    const API_URL = "http://localhost:3000/usuarios/2"


    useEffect(() => {
        const fetchUsuario = async () => {
          try {
            const response = await fetch(API_URL);
            console.log(response)
            if (!response.ok) throw new Error("Error al obtener el usuario");
            const data = await response.json();
            setUsuario(data);
          } catch (err) {
            setError(err.message);
          }
        };
    
        fetchUsuario();
      }, []);

      if (error) return <p>Error: {error}</p>;
      if (!usuario) return <p>Cargando...</p>;

  return (
    <div>
      <div className="p-4 bg-gray-100 rounded shadow-md w-64 mx-auto mt-10 text-center">
      <h2 className="text-xl font-bold">Perfil del Usuario</h2>
      <p><strong>Email:</strong> {usuario.email}</p>
    </div>

    </div>
  )
}

export default profile

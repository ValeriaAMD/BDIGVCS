import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CompLogin: React.FC = () => {
  // Estado para almacenar los datos del formulario
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Manejador de evento para actualizar el estado del nombre de usuario
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  // Manejador de evento para actualizar el estado de la contraseña
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // Manejador de evento para enviar el formulario
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aquí puedes realizar la lógica para enviar los datos de inicio de sesión
    console.log('Nombre de usuario:', username);
    console.log('Contraseña:', password);
  };

  return (
    <div  className="container"> 
      <div  className="row justify-content-center mt-5"> 
        <div className="col-md-6">
          <div style={{ backgroundColor: '#8ADAB2' }} className="card"> {/* Cambiar el color de fondo del contenedor */}
            <div className="card-header">
              <h3 className="text-center">Bienvenido</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Nombre de usuario</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Ingresa tu nombre de usuario"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </div>
                <div  className="form-group">
                  <label htmlFor="password">Contraseña</label>
                  <input style={{ backgroundColor: '#F8FFD2' }} 
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Ingresa tu contraseña"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <button style={{ backgroundColor: '#D0F288' }} type="button" className="btn btn-light">Iniciar sesión</button> 
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompLogin;
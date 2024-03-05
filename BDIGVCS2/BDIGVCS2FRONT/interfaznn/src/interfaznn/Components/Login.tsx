import React, { useContext,useState } from 'react';
import { AuthContext } from '../Contexts/User.contexto'; // Importar el contexto de autenticación
import { UserServicio } from '../Accions/Services/User.service'; // Importar el servicio de usuario
import { Container, FloatingLabel, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export const Login = () => {
  const { setEmail, setPassword } = useContext(AuthContext); // Obtener funciones de contexto de autenticación
  const [credenciales, setCredenciales] = useState({ // Estado local para almacenar las credenciales del usuario
    email: '',
    password: ''
  });

  const handleLogin = () => {
    UserServicio.Entrar(credenciales) // Llamar al servicio de usuario para iniciar sesión con las credenciales
      .then((respuesta) => {
        if (respuesta.status === 200) {
          setEmail(credenciales.email); // Actualizar el estado global del email en el contexto de autenticación
          setPassword(credenciales.password); // Actualizar el estado global de la contraseña en el contexto de autenticación
          // Redirigir al usuario a otra página o realizar alguna acción después del inicio de sesión exitoso
        }
      })
      .catch(error => {
        console.error(error);
        // Mostrar un mensaje de error al usuario si falla el inicio de sesión
      });
  };

  return (
    <Container>
      <FloatingLabel controlId="email" label="Correo electrónico" className="mb-3">
        <Form.Control
          type="email"
          value={credenciales.email}
          onChange={event => setCredenciales({ ...credenciales, email: event.target.value })}
        />
      </FloatingLabel>
      <FloatingLabel controlId="password" label="Contraseña" className="mb-3">
        <Form.Control
          type="password"
          value={credenciales.password}
          onChange={event => setCredenciales({ ...credenciales, password: event.target.value })}
        />
      </FloatingLabel>
      <Button variant="outline-primary" onClick={handleLogin} className="enviar">Iniciar sesión</Button>
    </Container>
  );
};




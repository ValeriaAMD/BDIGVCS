import React, { useContext,useState } from 'react';
import { AuthContext } from '../Contexts/User.contexto'; // Importar el contexto de autenticación
import { UserServicio } from '../Accions/Services/User.service'; // Importar el servicio de usuario
import { Container, FloatingLabel, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel'
import bio_vision_logo from '../imagenes/bio_vision_logo.jpg';
import grow from '../imagenes/grow.jpg';
import TecNM_logo from '../imagenes/TecNM_logo.png';


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
      <br />
      <Navbar style={{backgroundColor:'#032634'}} data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Bio Vision</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
       <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bio_vision_logo}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={grow}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={TecNM_logo}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <br />
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Login</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
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





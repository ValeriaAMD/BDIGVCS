import React, { useContext,useState } from 'react';
import { AuthContext } from '../Contexts/User.contexto'; // Importar el contexto de autenticación
import { UserServicio } from '../Accions/Services/User.service'; // Importar el servicio de usuario
import { Container, FloatingLabel, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image';


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
    <Navbar className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
    <Navbar.Brand href="#home">Bio vision</Navbar.Brand>
    </Navbar>
    <Container>
    <Carousel>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="bio vision-logo.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src="C:\Users\caroc\OneDrive\Documentos\BDIGVCS\BDIGVCS2\BDIGVCS2FRONT\interfaznn\src\interfaznn\Components\bio vision-logo.jpg" fluid />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="IMG_20240306_130108.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
    <Image src="C:\Users\caroc\OneDrive\Documentos\BDIGVCS\BDIGVCS2\BDIGVCS2FRONT\interfaznn\src\interfaznn\Components\bio vision-logo.jpg" fluid />
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





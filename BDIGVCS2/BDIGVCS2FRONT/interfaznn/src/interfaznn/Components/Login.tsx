import React, { useContext, useState } from 'react';
import { AuthContext } from '../Contexts/User.contexto';
import { Container, FloatingLabel, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import grow from '../imagenes/grow.jpg';
import TecNM_logo from '../imagenes/TecNM_logo.png';
import LabBioFun from '../imagenes/LabBioFun.png';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Importa Axios

export const Login = () => {
  const { setEmail, setPassword } = useContext(AuthContext);
  const [credenciales, setCredenciales] = useState({
    email: '',
    password: ''
  });

  const handleLogin = () => {
    // Realiza la solicitud al endpoint usando Axios
    axios.post('http://127.0.0.1:8000/api/iniciar_secion/', credenciales)
      .then((response) => {
        if (response.status === 200) {
          setEmail(credenciales.email);
          setPassword(credenciales.password);
          // Redirige al usuario a otra página o realiza alguna acción después del inicio de sesión exitoso
        }
      })
      .catch(error => {
        console.error(error);
        // Muestra un mensaje de error al usuario si falla el inicio de sesión
      });
  };

  // Resto del código del componente...
  return (
    <Container>
      <br />
      <Navbar style={{backgroundColor:'#032634'}} data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">BioSystem</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
       <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={LabBioFun}
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
      <Navbar style={{backgroundColor:'#032634'}} bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand  href="#home">Login</Navbar.Brand>
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
      <Link to="/opciones">
      <Button variant="outline-primary" onClick={handleLogin} className="enviar">Iniciar sesión</Button>
      </Link>
    </Container>
  );
};





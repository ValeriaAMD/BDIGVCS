import React from 'react';
import { Container} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import salir from '../imagenes/salir.png'

const opcione: React.FC = () => {
  return (
    <Container>
        <br />
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Bio Vision</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Button variant="outline-danger">
        <img 
        src={salir}
        />
        </Button>{' '}

    </Container>
  );
};

export default opcione;

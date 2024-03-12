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
      <Button variant="outline-danger" className="position-absolute start-0 m-2 p-1" >
        <img src={salir} alt="Salir" style={{ width: '20px', height: '20px' }} />
      </Button>

    </Container>
  );
};

export default opcione;

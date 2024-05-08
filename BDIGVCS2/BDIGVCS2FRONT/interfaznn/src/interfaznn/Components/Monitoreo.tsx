import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import casa from '../imagenes/casa.png';
import eclipse from '../imagenes/eclipse .png';
import play from '../imagenes/play.png';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

const Monitoreo: React.FC = () => {
  const [modoOscuro, setModoOscuro] = useState<boolean>(false);

  const toggleModoOscuro = () => {
    setModoOscuro(prevModoOscuro => !prevModoOscuro);
  
    // Cambiar el tema de la página
    if (!modoOscuro) {
      document.body.classList.add('modo-oscuro');
    } else {
      document.body.classList.remove('modo-oscuro');
    }
  };
  

  return (
    <Container>
        <br />
        <Navbar style={{ backgroundColor: '#032634' }} data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">BioSystem</Navbar.Brand>
          </Container>
        </Navbar>
  
        <div className="modal" style={{ display: 'block', position: 'initial' }}>
          <Modal.Dialog style={{ marginTop: '10vh' }}>
            <Modal.Header style={{ backgroundColor: '#032634' }}>
            <Form.Check type="switch"
              id="modo-oscuro"
              checked={modoOscuro}
              onChange={toggleModoOscuro}/> 
              <img src={eclipse} alt="Modo oscuro" style={{ width: '20px', height: '20px' }} /> 
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: '#032634' }}>
              <br />
              <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Fase
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Vegetativa</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Reproductiva</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <>
    <br />
    <Form.Control   type="text" placeholder="Fecha que deseas consultar" />
      <Form.Text style={{ color: 'white' }} data-bs-theme="dark" id="fecha" muted>
        El formato de la fecha debe ser asi para evitar errores DD/MM/AAAA.
      </Form.Text>
    </>
              <br />
            </Modal.Body>
  
            <Modal.Footer style={{ backgroundColor: '#032634' }}>
              <Link to="/opciones">
                <Button variant="outline-info" className="position-absolute top-0 end-0 m-2 p-1">
                  <img src={casa} alt="casa" style={{ width: '20px', height: '20px' }} />
                </Button>
              </Link>
              <Button variant="outline-success" id= "play">
                <img src={play} alt="play" style={{ width: '20px', height: '20px' }} />
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      </Container>
  );
};

export default Monitoreo;
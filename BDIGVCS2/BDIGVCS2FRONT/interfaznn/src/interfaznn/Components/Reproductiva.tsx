import React from 'react';
import { Container} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import casa from '../imagenes/casa.png'
import eclipse from '../imagenes/eclipse .png'
import temperatura from '../imagenes/temperatura.png'
import humedad from '../imagenes/humedad .png'
import lampara from '../imagenes/lampara.png'
import play from '../imagenes/play.png'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


const reproductiva: React.FC = () => {
  return (
    <Container>
        <br />
      <Navbar style={{backgroundColor:'#032634'}}data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" >Bio Vision</Navbar.Brand>
        </Container>
      </Navbar>
      
      <div
      className="modal show"
      style={{ display: 'block', position: 'initial'}}
    >
      <Modal.Dialog >
        <Modal.Header  style={{backgroundColor:'#032634'}}>
        <Form.Check 
        type="switch"
        id="modo-oscuro"
        />
        <img src={eclipse } alt="Modo oscuro" style={{ width: '20px', height: '20px' }} />
        </Modal.Header>
        <Modal.Body style={{backgroundColor:'#032634'}}>
        <br />
        <FloatingLabel controlId="floatingInputGrid" label="0°" className="position-absolute start-0 m-1 p-1">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <br />
        <Button variant="secondary" >+</Button>
        <Button variant="secondary">-</Button>
        <img src={temperatura } alt="temperatura" style={{ width: '20px', height: '20px' }} />
        <br />
        <br />
        <FloatingLabel controlId="floatingInputGrid" label="0%" className="position-absolute start-0 m-1 p-1">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <br />
        <Button variant="secondary">+</Button>
        <Button variant="secondary">-</Button>
        <img src={humedad } alt="humedad" style={{ width: '20px', height: '20px' }} />
        <br />
        <br />
        <FloatingLabel controlId="floatingInputGrid" label="0%" className="position-absolute start-0 m-1 p-1">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <br />
        <Button variant="secondary">+</Button>
        <Button variant="secondary">-</Button>
        <img src={lampara} alt="iluminacion" style={{ width: '20px', height: '20px' }} />
        <br />
        <br />
        </Modal.Body>

        <Modal.Footer style={{backgroundColor:'#032634'}}>
        <Button variant="outline-info" className="position-absolute top-0 end-0 m-2 p-1"  >
        <img src={casa} alt="casa" style={{ width: '20px', height: '20px' }} />
      </Button>
      <Button variant="outline-success"  >
        <img src={play} alt="play" style={{ width: '20px', height: '20px' }} />
      </Button>
        </Modal.Footer>
        
      </Modal.Dialog>
    </div>
    </Container>
  );
};

export default reproductiva;

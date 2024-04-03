import React from 'react';
import { Container} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import sali from '../imagenes/sali.png'
import eclipse from '../imagenes/eclipse .png'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

const opcione: React.FC = () => {
  return (
    
    <Container>
        <br />
      <Navbar style={{backgroundColor:'#032634'}}data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" >BioSystem</Navbar.Brand>
        </Container>
      </Navbar>
      
      <div
      className="modal show"
      style={{ display: 'block', position: 'initial'}}
    >
      <Modal.Dialog >
        <Modal.Header style={{backgroundColor:'#032634'}}>
        <Form.Check 
        type="switch"
        id="modo-oscuro"
        />
        <img src={eclipse } alt="Modo oscuro" style={{ width: '20px', height: '20px' }} />
        </Modal.Header>
        <Modal.Body style={{backgroundColor:'#032634'}}>
        <br />
         <Link to="/fase_vegetativa">
           <Button variant="secondary">Fase Vegetativa</Button>
         </Link>
        <br />
        <br />
        <Link to="/fase_reproductiva">
          <Button variant="dark">Fase Reproductiva</Button>
        </Link>
        <br />
        <br />

        <Button variant="warning">Monitoreo</Button>
        <br />
        <br />
        </Modal.Body>

        <Modal.Footer style={{backgroundColor:'#032634'}}>
        <Link to="/login">
        <Button variant="outline-danger" className="position-absolute top-0 end-0 m-2 p-1"  >
        <img src={sali} alt="Salir" style={{ width: '20px', height: '20px' }} />
      </Button>          
      </Link>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
    </Container>
    
  );
};

export default opcione;

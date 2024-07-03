import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import casa from '../imagenes/casa.png';
import eclipse from '../imagenes/eclipse .png';
import temperatura from '../imagenes/temperatura.png';
import humedad from '../imagenes/humedad .png';
import play from '../imagenes/play.png';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function App() {
  const [temperature, setTemperature] = useState(28);
  const [humedity, setHumedity] = useState(70);

  const increaseTemperature = () => {
    setTemperature(prevTemperature => prevTemperature + 1);
  };

  const decreaseTemperature = () => {
    setTemperature(prevTemperature => prevTemperature - 1);
  };

  const increaseHumedity = () => {
    setHumedity(prevHumedity => prevHumedity + 1);
  };

  const decreaseHumedity = () => {
    setHumedity(prevHumedity => prevHumedity - 1);
  };

  const applyChanges = () => {
    fetch('http://10.10.49.120:5000/update-settings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tempmax: temperature,
        hummax: humedity,
      }),
    })
      .then(response => {
        if (response.ok) {
          // Cambios aplicados exitosamente
          alert('Cambios aplicados correctamente');
        } else {
          // Error al aplicar cambios
          alert('Error al aplicar cambios');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
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
              onChange={toggleModoOscuro} /> 
            <img src={eclipse} alt="Modo oscuro" style={{ width: '20px', height: '20px' }} /> 
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: '#032634' }}>
            <br />
            <div>
              <label className="temperature-label">{temperature}°</label>
              <br />
              <Button variant="secondary" onClick={increaseTemperature}>+</Button>
              <Button variant="secondary" onClick={decreaseTemperature}>-</Button>
            </div>
            <img src={temperatura} alt="temperatura" style={{ width: '20px', height: '20px' }} />
            <br />
            <br />
            <div>
              <label className="temperature-label">{humedity}%</label>
              <br />
              <Button variant="secondary" onClick={increaseHumedity}>+</Button>
              <Button variant="secondary" onClick={decreaseHumedity}>-</Button>
            </div>
            <img src={humedad} alt="humedad" style={{ width: '20px', height: '20px' }} />
            <br />
            <br />
          </Modal.Body>

          <Modal.Footer style={{ backgroundColor: '#032634' }}>
            <Link to="/opciones">
              <Button variant="outline-info" className="position-absolute top-0 end-0 m-2 p-1">
                <img src={casa} alt="casa" style={{ width: '20px', height: '20px' }} />
              </Button>
            </Link>
            <Button variant="outline-success" onClick={applyChanges}>
              <img src={play} alt="play" style={{ width: '20px', height: '20px' }} />
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </Container>
  );
}

export default App;

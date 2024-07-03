import React, { useState } from 'react';
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
import Chart from 'chart.js/auto';

interface DataItem {
  dia: string; // Día
  temperatura?: number; // Temperatura 
  humedad?: number; // Humedad 
}

// Constantes que usan las variables para tomar los valores dentro de la interfaz y envuarlas al backend
const Monitoreo: React.FC = () => {
  const [modoOscuro, setModoOscuro] = useState<boolean>(false);
  const [faseSeleccionada, setFaseSeleccionada] = useState<string>('');
  const [fechaInicio, setFechaInicio] = useState<string>('');
  const [fechaFin, setFechaFin] = useState<string>('');


  //programación del modo oscuro 
  const toggleModoOscuro = () => {
    setModoOscuro(prevModoOscuro => !prevModoOscuro);

    if (!modoOscuro) {
      document.body.classList.add('modo-oscuro');
    } else {
      document.body.classList.remove('modo-oscuro');
    }
  };

  const handlePlayClick = () => {
    console.log('Fase seleccionada:', faseSeleccionada);
    console.log('Fecha de inicio:', fechaInicio);
    console.log('Fecha de fin:', fechaFin);

    const url = `http://127.0.0.1:8000/api/parametro?fase_id=${faseSeleccionada}&fecha_inicio=${fechaInicio}&fecha_fin=${fechaFin}`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Hubo un problema al realizar la solicitud.');
        }
        return response.json();
      })
      .then((data: DataItem[]) => {
        console.log('Datos recibidos del backend:', data);
        dibujarGrafica(data);
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
  };

  const dibujarGrafica = (datos: DataItem[]) => {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    if (!ctx) return;

    // Destruir gráfico existente si lo hay
    const chartInstance = Chart.getChart(ctx);
    if (chartInstance) {
      chartInstance.destroy();
    }

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: datos.map(d => new Date(d.dia).toLocaleDateString()), // Usar dia para las etiquetas
        datasets: [
          {
            label: 'Temperatura',
            data: datos.map(d => d.temperatura), // Datos de temperatura
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          },
          {
            label: 'Humedad',
            data: datos.map(d => d.humedad), // Datos de humedad
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Día'
            }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Temperatura y Humedad'
            }
          }
        }
      }
    });
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
            <Dropdown onSelect={(eventKey: string | null) => {
              if (eventKey) setFaseSeleccionada(eventKey); // Manejar el caso en que eventKey sea null
            }}>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Fase
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Vegetativa">Vegetativa</Dropdown.Item>
                <Dropdown.Item eventKey="Reproductiva">Reproductiva</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <br />
            <label className="inicio" style={{ backgroundColor: 'white' }}>Fecha de inicio</label>
            <Form.Control type="date" placeholder="Fecha de inicio" onChange={(e) => setFechaInicio(e.target.value)} />
            <br />
            <label className="fin" style={{ backgroundColor: 'white' }}>Fecha de fin</label>
            <Form.Control type="date" placeholder="Fecha de fin" onChange={(e) => setFechaFin(e.target.value)} />
            <br />
          </Modal.Body>

          <Modal.Footer style={{ backgroundColor: '#032634' }}>
            <Link to="/opciones">
              <Button variant="outline-info" className="position-absolute top-0 end-0 m-2 p-1">
                <img src={casa} alt="casa" style={{ width: '20px', height: '20px' }} />
              </Button>
            </Link>
            <Button variant="outline-success" id="play" onClick={handlePlayClick}>
              <img src={play} alt="play" style={{ width: '20px', height: '20px' }} />
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>

      <div>
        <canvas id="myChart" width="400" height="400"></canvas>
      </div>
    </Container>
  );
};

export default Monitoreo;

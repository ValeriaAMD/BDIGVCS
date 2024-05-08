import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import DatePicker from 'react-datepicker/dist/react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const CalendarButton = () => {
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null); // Especificamos el tipo Date | null
  
    const handleDateChange = (date: Date | null) => { // Especificamos el tipo Date | null
      setSelectedDate(date);
      setShowCalendar(false);
    };
  
    return (
      <>
        <Button onClick={() => setShowCalendar(true)}>Seleccionar Fecha</Button>
        <Modal show={showCalendar} onHide={() => setShowCalendar(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Selecciona una fecha</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <DatePicker selected={selectedDate} onChange={handleDateChange} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowCalendar(false)}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };
  
  export default CalendarButton;
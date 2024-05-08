import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Opciones from './interfaznn/Components/Opciones'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Vegetativa from './interfaznn/Components/Vegetativa';
import Reproductiva from './interfaznn/Components/Reproductiva';
import Monitoreo from './interfaznn/Components/Monitoreo';
import { Login } from './interfaznn/Components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/opciones" element={<Opciones/>}/>
          <Route path="/fase_vegetativa" element={<Vegetativa />} />
          <Route path="/fase_reproductiva" element={<Reproductiva />} />
          <Route path='/monitoreo' element={<Monitoreo/>} />
        </Routes>
      </div>
    </Router>  
  );
}

export default App;

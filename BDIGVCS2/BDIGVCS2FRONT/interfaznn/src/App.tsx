import {Login} from './interfaznn/Components/Login'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Opciones from './interfaznn/Components/Opciones'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Vegetativa from './interfaznn/Components/Vegetativa';
import Reproductiva from './interfaznn/Components/Reproductiva';
function App() {
  return (
    <div className="App">
      <Reproductiva />
      
    </div>
    
  );
}

export default App;

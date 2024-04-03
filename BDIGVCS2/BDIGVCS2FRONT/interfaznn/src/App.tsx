import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Opciones from './interfaznn/Components/Opciones'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Vegetativa from './interfaznn/Components/Vegetativa';
import Reproductiva from './interfaznn/Components/Reproductiva';
import { Login } from './interfaznn/Components/Login';
function App() {
  return (
      <div className="App">
        <Opciones />
        
      </div>
    
  );
}

export default App;

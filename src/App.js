import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Consulta from './componentes/consulta';
import Home from './componentes';

function App() {
  return (
    <>
      <Routes>
        <Route path="/consulta" element={<Consulta />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
export default App;

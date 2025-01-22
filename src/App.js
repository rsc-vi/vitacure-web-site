import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Consulta from './componentes/consulta';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Consulta />} />
        <Route path="/consulta" element={<Index />} />
      </Routes>
    </>
  );
}
export default App;

import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/consulta" element={<Consulta />} />
      </Routes>
    </>
  );
}
export default App;

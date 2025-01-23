import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Consulta from './componentes/consulta';
import Home from './componentes';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Consulta />} />
        <Route path="/" element={<Home />} />
      </Routes>
      const Navbar = () => (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">React Review</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/consulta">Consulta</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    </>
  );
}
export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import RandomUser from './components/RandomUser';
import Header from './components/Header';
import Footer from './components/Footer';
import Productos from './pages/Productos';
import Clientes from './pages/Clientes';
import Contacto from './pages/Contacto';
import Servicios from './pages/Servicios';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <Container className="flex-grow-1">
          <Routes>
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
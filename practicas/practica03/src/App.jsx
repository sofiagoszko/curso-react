import React from 'react';
import EquipoTalentoLab from './components/EquipoTalentoLab';
import TarjetaProyecto from './components/TarjetaProyecto';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <EquipoTalentoLab />
      <TarjetaProyecto />
      <Footer />
    </div>
  )
}

export default App

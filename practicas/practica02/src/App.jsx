import React from 'react';
import Inicio from './pages/Inicio';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {

  return (
    <div div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-grow">
        <Inicio />
      </div>
      <Footer />
    </div>
  )
}

export default App

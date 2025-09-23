import Saludo from './components/Saludo';
import Usuario from './components/Usuario';
import Boton from './components/Boton';

function App() {

  const mostrarAlerta = () => alert("Hola mundo");
  return (
    <div>
      <h1>Ejemplos de Props</h1>
      <Saludo nombre="Sofia"/>
      <Saludo nombre="Nicolas"/>
      <Saludo nombre="Nadia"/>
      <Usuario nombre="Sofia" edad={32} />
      <Boton textoBotona="ingresr" onClick={mostrarAlerta}/>
    </div>
  )
}

export default App

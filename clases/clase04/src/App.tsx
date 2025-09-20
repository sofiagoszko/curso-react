import Contador from './components/Contador';
import MostrarTexto from './components/MonstrarTexto';
import BotonClick from './eventos/BotonClick';
import CajaMouse from './eventos/CajaMouse';
import FormularioControlado from './formularios/FormularioControlado';

function App() {
  return (
    <div>
      <h1>Ejemplos</h1>
      <hr />
      <h2>Ejemplo Nro.1</h2>
      <Contador />
      <hr />
      <h2>Ejemplo Nro.2</h2>
      <MostrarTexto />
      <hr />
      <h2>Ejemplo Nro.3</h2>
      <BotonClick />
      <hr />
      <h2>Ejemplo Nro.4</h2>
      <CajaMouse />
      <hr />
      <h2>Ejemplo Nro.5</h2>
      <FormularioControlado />
      <hr />
    </div>
  )
}

export default App

import { useState } from 'react'

export default function Contador() {
  const [contador, setContador] = useState(0)

  return (
    <div style={{textAlign:"center", marginTop:"20px"}}>
      <h2>Contador: {contador}</h2>
      <button onClick={() => setContador(contador+1)}>Incrementar</button>
      <button onClick={() => setContador(contador-1)}>Decrementar</button>
      <button onClick={() => setContador(0)}>Reiniciar</button>
    </div>
  )
}

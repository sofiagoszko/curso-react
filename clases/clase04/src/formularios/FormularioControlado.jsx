import { useState } from 'react';

export default function FormularioControlado(){
    const [nombre, setNombre] = useState("");
    const [provincia, setProvincia] = useState("");
    const [fecha, setFecha] = useState("");

    const manejarSubmit = (e) =>{ 
        e.preventDefault();
        alert("Datos enviados correctamentes");

        setNombre("");
        setProvincia("");
        setFecha("");
    }

    return(
        <div>
            <form onSubmit={manejarSubmit}>
                <label htmlFor="">Nombre</label>
                <input type="text" 
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required/>

                <label htmlFor="">Provincia</label>
                <input type="text" 
                value={provincia}
                onChange={(e) => setProvincia(e.target.value)} 
                required/>

                <label htmlFor="">Fecha</label>
                <input type="text" 
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}                    
                required/>

                <button type="submit">Enviar</button>
            </form>

        </div>
    );

}
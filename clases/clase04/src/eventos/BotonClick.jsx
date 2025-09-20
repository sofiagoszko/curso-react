import { useState } from 'react';


export default function BotonClick(){

    const [mensaje, setMensaje] = useState("");
    const manejarClick = () => {
        setMensaje("Hola Mundo desde React.js");
    }

    return (
        <div>
            <button onClick={manejarClick}>Clickeame</button>
            <p>{mensaje}</p>
        </div>
    );
}
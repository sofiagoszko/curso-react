export default function Boton({textoBoton, onClick}){
    return (
        <button onClick={onClick}>{textoBoton}</button>
    );
}
import './Welcome.css';

function Welcome() {

    const handleClick = () => {
        alert('Botón clickeado!');
    }

    return (
        <div>
            <h1>Bienvenidos al curso de React!</h1>
            <button onClick={handleClick}>Haz click aqui</button>
        </div>
    );  
}

export default Welcome;
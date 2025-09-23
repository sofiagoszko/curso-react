import { useEffect, useState } from "react";

export default function DragonBall() {
    const [personjes, setPersonajes] = useState([]);

    useEffect(() => {
        fetch("https://dragonball-api.com/api/characters")
        .then((response) => response.json())
        .then((data) => {
            setPersonajes(data.items);
        })
        .catch((e)=>alert("Error al cargar personajes: " + e))
    }, []);


    return (
        <div>

        </div>
    );
}
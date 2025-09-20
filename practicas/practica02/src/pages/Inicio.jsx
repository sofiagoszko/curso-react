import React from "react";
import ListaOrdenada from "../components/ListaOrdenada";
import Tarjeta from "../components/Tarjeta";

export default function Inicio(){

    const productos = ['Manzanas', 'Peras', 'Naranjas'];

    const tarjetas = [
        {
            titulo: 'Laptop Dell XPS 15',
            descripcion: 'Laptop ultradelgada con pantalla OLED y procesador Intel Core i9.',
        },
        {
            titulo: 'Mouse Logitech MX Master 3',
            descripcion: 'Mouse ergonómico inalámbrico con seguimiento de alta precisión.',
        },
        {
            titulo: 'Teclado Mecánico Keychron K2',
            descripcion: 'Teclado compacto con switches Gateron Brown y retroiluminación RGB.',
        },
    ];
    
    return (
        <div>
            <ListaOrdenada products={productos}/>
            <div>
                {tarjetas.map((tarjeta, index) => (
                    <Tarjeta 
                        key={index}
                        titulo={tarjeta.titulo}
                        descripcion={tarjeta.descripcion}
                        botonTexto="Más info"
                    />
                ))}
            </div>
        </div>
    );

}
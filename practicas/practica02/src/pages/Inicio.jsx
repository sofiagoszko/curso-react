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
            <div>
                <h2 className="text-4xl font-extrabold dark:text-white m-4">Lista de productos</h2>
                <div className="p-4 m-4">
                    <ListaOrdenada products={productos}/>
                </div>
            </div>

            <div>
                <h2 className="text-4xl font-extrabold dark:text-white m-4">Tarjetas con información</h2>
                <div className="flex flex-row flex-wrap p-4 m-4">
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
        </div>
    );

}
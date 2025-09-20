import React from "react";
import Boton from "./Boton";

export default function Tarjeta({titulo, descripcion, botonTexto}){
    return(
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white m-4">
            <div className="px-6 py-4">
                <p className="text-gray-700 text-base">Título: {titulo}</p>
            </div>
            <div className="px-6 py-4">
                <p className="text-gray-700 text-base">Descripción: {descripcion}</p>
            </div>
            <div className="px-6 py-4">
                <Boton botonTexto={botonTexto}/>
            </div>
        </div>
    )
    
}
import React from "react";
import Tarjeta from "./Tarjeta";

export default function EquipoTalentoLab({miembros}) {

    if( !Array.isArray(miembros) || miembros.length === 0){
        return(
            <div className="">
                <p className="">El equipo no tiene miembros</p>
            </div>
        );
    }

    return (
        <div>
            {miembros.map((miembro, index) => (
                <Tarjeta 
                    key={index}
                    miembro={miembro}
                />
            ))}
        </div>
    );
}
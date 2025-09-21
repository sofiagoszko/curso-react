import React from "react";

export default function Tarjeta({miembro}){
    return(
        <div className="">
            <div>
                <img src={miembro.imagen} alt="imagen de integrante" />
            </div>
            <div className="">
                <p className="">Nombre: {miembro.nombre}</p>
            </div>
            <div className="">
                <p className="">Rol: {miembro.rol}</p>
            </div>
        </div>
    )
    
}
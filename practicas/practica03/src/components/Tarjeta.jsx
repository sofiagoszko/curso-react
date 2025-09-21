import React from "react";

export default function Tarjeta({miembro}){
    return(
        <div className="card" style={{width: "18rem"}}>
            <div>
                <img src={miembro.imagen} alt="imagen de integrante" className="card-img-top"/>
            </div>

            <div className="card-body">
                <h5 className="card-title">{miembro.nombre}</h5>
                <p className="card-text">{miembro.rol}</p>
            </div>
        </div> 
    )
    
}
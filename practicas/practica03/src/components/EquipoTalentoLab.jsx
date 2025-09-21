import React from "react";
import Tarjeta from "./Tarjeta";
import usuarioImg from '../assets/usuario.png';

export default function EquipoTalentoLab() {

     const miembros = [
        { nombre: 'Silvia', rol: 'Product Owner', imagen: usuarioImg },
        { nombre: 'Luis', rol: 'Diseñador UX/UI', imagen: usuarioImg },
        { nombre: 'Matías', rol: 'Desarrollador', imagen: usuarioImg },
        { nombre: 'Sabrina', rol: 'Desarrolladora', imagen: usuarioImg },
    ];


    if( !Array.isArray(miembros) || miembros.length === 0){
        return(
            <div className="">
                <p className="">El equipo no tiene miembros</p>
            </div>
        );
    }

    return (
        <div className="container" id="equipo">
            <h2 className="m-4 pt-4">¿QUIÉNES SOMOS?</h2>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {miembros.map((miembro, index) => (
                    <div key={index} className="col">
                        <div className="card text-center h-100 shadow" style={{ minHeight: "250px" }}>
                            <div>
                                <img src={miembro.imagen} alt="imagen de integrante" className="card-img-top w-75 mx-auto mt-3"/>
                            </div>

                            <div className="card-body">
                                <h5 className="card-title">{miembro.nombre}</h5>
                                <p className="card-text">{miembro.rol}</p>
                            </div>
                        </div>
                    </div>     
                ))}
            </div>
        </div>
    );
}
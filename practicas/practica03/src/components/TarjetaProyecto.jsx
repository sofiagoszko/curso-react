import React from "react";


export default function EquipoTalentoLab() {

     const proyectos = [
        {
            titulo: "Plataforma de Gestión",
            descripcion: "Una herramienta para optimizar la gestión de equipos.",
            botonTexto: "Explorar proyecto"
        },
        {
            titulo: "Aplicación de Fitness",
            descripcion: "Ayuda a los usuarios a seguir sus rutinas de ejercicio.",
            botonTexto: "Ver detalles"
        },
        {
            titulo: "Marketplace de Arte Digital",
            descripcion: "Conecta a artistas con coleccionistas.",
            botonTexto: "Ver tienda"
        }
    ];


    if( !Array.isArray(proyectos) || proyectos.length === 0){
        return(
            <div className="">
                <p className="">El equipo no tiene proyectos creados</p>
            </div>
        );
    }

    return (
        <div className="container">
            <h2 className="m-4">PROYECTOS REALIZADOS</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {proyectos.map((proyecto, index) => (
                    <div key={index} className="col">
                        <div className="card text-center h-100 shadow" style={{ minHeight: "250px" }}>
                            <div className="card-body d-flex flex-column p-4">

                                <h5 className="card-title">{proyecto.titulo}</h5>
                                <p className="card-text flex-grow-1">{proyecto.descripcion}</p>
                                <a href="#" class="btn btn-primary">{proyecto.botonTexto}</a>
                            </div>
                        </div>
                    </div>     
                ))}
            </div>
        </div>
    );
}
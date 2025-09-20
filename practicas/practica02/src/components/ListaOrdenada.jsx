import React from "react";

export default function ListaOrdenada ({ products }) {

    if( !Array.isArray(products) || products.length === 0){
        return(
            <div className="flex flex-row justify-center items-center">
                <p className="text-center underline decoration-red-500/30">No hay productos que mostrar</p>
            </div>
        );
    }

    return (
        <div className="flex flex-row justify-center items-center">
            <ol className="list-decimal">
                {products.map(product => (
                    <li key={product}>
                        {product}
                    </li>
                ))}
            </ol>
        </div>
    );
}
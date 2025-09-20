import Swal from 'sweetalert2';

export default function Boton( {botonTexto} ){

    const handleButton = () => {
        Swal.fire({
          title: botonTexto,
          icon: 'success',
          confirmButtonText: 'Aceptar',
        });
    }

    return (
        <button  onClick={handleButton} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 text-lg border border-blue-500 hover:border-transparent rounded">
            {botonTexto}
        </button>
    );
}
import Swal from 'sweetalert2';

export default function Boton(){

    const handleButton = () => {
        Swal.fire({
          title: 'SORPRESA!',
          text: 'Gracias por clickear :D',
          icon: 'success',
          confirmButtonText: 'Aceptar',
        });
    }

    return (
        <div className="flex flex-row min-h-screen justify-center items-center"> 
            <button  onClick={handleButton} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-4 px-8 text-lg border border-blue-500 hover:border-transparent rounded">
            Clickame!
            </button>
        </div>
    );
}
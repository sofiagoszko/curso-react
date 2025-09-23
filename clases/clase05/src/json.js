//json simple

const persona = {
    nombre: "Sofia",
    edad: 32,
    esEstudinte: true
}

console.log(persona);

const usuarios = {
    usuarios: [
        {id: 1, nombre: "Sofia", edad: 32, activo: true},
        {id: 2, nombre: "Nicolas", edad: 37, actuvo: true},
        {id: 3, nombre: "Nadia", edad: 31, activo: false},
        {id: 4, nombre: "Ana", edad: 34, activo: false},
    ]
}

console.log(usuarios);

const personaConDireccion = {
    persona: {
        nombre: "Sofia", 
        edad: 32, 
        direccion: {
            ciudad: "La Plata",
            codigoPostal: 1900,
        },
    },
}

console.log("Nombre: ", personaConDireccion.persona.nombre);
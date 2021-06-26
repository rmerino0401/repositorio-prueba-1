let persona = {
    // propiedades y  valores van dentro de las llaves y separadas por comas,
    nombre: "juan",
    apellidos: "Perez Mendoza",
    edad: 25,
    conduce: true,
    hobbies:["Dotero", "Guitarra", "cocinar"]
}

persona.nombre = "juan jose"

persona.edad = 26

console.log(persona.nombre)

console.log(persona.edad)

console.log(persona.hobbies[2])
// como los hobbies son 3, se considera el conteo desde cero, por ello seria 0 dotero, 1 guitarra, 2 cocinar

persona.saludar("hola!!!!")
persona.despedirse("bye")

// --------------------------

let albumMusica = {
    nombre:"voicenotes",
    artista:"charlie Puth",
    Discográfica: "Atlantic records",
    anio: 2018,
    canciones:[
        {
            titulo: "The way i am",
            Duración: 3.06
            Escritores: ['Charlie Puth', 'Jacob Kasher'],
        },
        {
            titulo: "Attention",
            Duración: 3.31
            Escritores: ['Charlie Puth', 'Jacob Kasher'],
        },
    ]
}

console.log(albumMusica.canciones[1].escritores[0])







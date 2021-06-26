// ejemplo 1

// crear un arreglo de objetos donde cada objeto represente a una pelicula con los sgtes campos: 
// NombrePelicula,string anio,number director,string genero, string

let peliculas =[
    {
        nombrePelicula: "Blade Runner",
        anio: 1982,
        director:"Ridley Scott"
        Genero: "ciencia ficcion"
    }
    {
        nombrePelicula: "Parasite",
        anio: 2019,
        director:"Bong joon-ho"
        Genero: "Drama"
    }
    {
        nombrePelicula: "El padrino",
        anio: 1972,
        director:"Francis ford coppola"
        Genero: "Drama"
    }
]

// ejercicio 1
// crear una arreglo de series de tv, donde cada serie sera un objeto con los sgtes campos

// nombre: String
// descripcion: string
// anio: number
// finalizada: Boolean
// personajes: array de nombres

// 5 items en el array 

let series =[
    {
        Nombreseries: "Falling skyes",
        Descripcion:  "invasión extraerrestre",
        anio:2011,
        Finalizada:True,
        Personajes: ["Tom Mason", "Anne Glass", "Hal Mason","Daniel weaver"]
       },
       {
        Nombreseries: "The 100",
        Descripcion:  "serie de futuro distopico.",
        anio: 2014,
        Finalizada:True,
        Personajes: ["Clarke", "Bellamy", "Octavia","Lexa"]
       },
       {
        Nombreseries: "The Walking dead",
        Descripcion:  "serie de zombies.",
        anio:2010,
        Finalizada:True,
        Personajes: ["Rick", "Negan", "daryl","Carl"]
       },
       {
        Nombreseries: "Stranger things",
        Descripcion:  "niña rara con poderes.",
        anio:2010,
        Finalizada:True,
        Personajes: ["Once", "Mike", "Dustin","Max"]
       },
]

console.log(series)


for(let i = 0 < peliculas.length; i++){
    console.log(`la pelicula '$peliculas[i].
    nombrePelicula} del año $peliculas[i].anio} del director ${peliculas[i].director}es del genero ${peliculas[i].genero}`)
}

// ejercicio ejemplo 2:

// juntar propiedades con el nombre , director, anio, y genero del arreglo de peliculas para mostrarlas todas juntas ej:

// for(let i = 0; i< series.length; i++){
//     console.log(`serie:'$series[i].nombre},
//     nombrePelicula} del año $peliculas[i].anio} del director ${peliculas[i].director}es del genero ${peliculas[i].genero}`)
// }

console.table(peliculas)

let loggued = true;

// si es verdadero no lo muestra
// si es falso me muestra un mensaje de error

console.assert(loggued, "no esta logueado")










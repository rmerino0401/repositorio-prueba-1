// ejemplo 1
// crear un arreglo de objetos donde cada objeto represente a una pelicula con los sgtes campos: 
// NombrePelicula,string anio,number director,string genero, string

let peliculas =[
    {
        nombrePelicula: "Blade Runner",
        anio: 1982,
        director:"Ridley Scott",
        Genero: "ciencia ficcion"
    },
    {
        nombrePelicula: "Parasite",
        anio: 2019,
        director:"Bong joon-ho",
        Genero: "Drama"
    },
    {
        nombrePelicula: "El padrino",
        anio: 1972,
        director:"Francis ford coppola",
        Genero: "Drama"
    },
]

// ejercicio 1
// crear una arreglo de series de tv, donde cada serie sera un objeto con los sgtes campos

// nombre: String
// descripcion: string
// anio: number
// finalizada: Boolean
// personajes: array de nombres

// 5 items en el array 

let series =[{
        Nombreseries: "Falling skyes",
        Descripcion:  "invasión extraerrestre",
        anio:2011,
        Finalizada: true,
        Personajes: ["Tom Mason", "Anne Glass", "Hal Mason","Daniel weaver"]
       },
       {
        Nombreseries: "The 100",
        Descripcion:  "serie de futuro distopico.",
        anio: 2014,
        Finalizada: true,
        Personajes: ["Clarke", "Bellamy", "Octavia","Lexa"]
       },
       {
        Nombreseries: "The Walking dead",
        Descripcion:  "serie de zombies.",
        anio:2010,
        Finalizada: true,
        Personajes: ["Rick", "Negan", "daryl","Carl"]
       },
       {
        Nombreseries: "Stranger things",
        Descripcion:  "niña rara con poderes.",
        anio:2010,
        Finalizada: true,
        Personajes: ["Once", "Mike", "Dustin","Max"]
       },
]

console.log(series)

console.table(series)


//Ejemplo 2:
/**
 * Juntar propiedades como el nombre, director, anio y genero del arreglo de peliculas para mostrarlas todas juntas ej.
 */

 for(let i = 0; i < peliculas.length; i++){
    console.log(`La pelicula '${peliculas[i].nombrePelicula}' del año ${peliculas[i].anio} del director ${peliculas[i].director} es del género ${peliculas[i].genero}`)
  }
  // for(let i = 0; i < peliculas.length; i++){
  //   console.log(`La película ${peliculas[i].nombrePelicula}`)
  // }
  
  
  //Ejercicio 2
  /**
   * Listar las series del arreglo de series creado, utilizando las propiedades cada item, para crear una sinopsis que resuma la serie
   */
  
  // console.table(peliculas)
  
  // let loggued = false;
  
  // //si es verdadero no lo muestra
  // //si es falso me muestra un mensaje de error
  // console.assert(loggued, "No esta Logueado")
  
  let arrJuegos = [
    {
      nombre:"Halo",
      precio:35
    },
    {
      nombre:"Outer Wilds",
      precio:24
    },
    {
      nombre:"Civilization V",
      precio:90
    },
    {
      nombre:"Stardew Valley",
      precio:30
    },
    {
      nombre:"The Witcher 3",
      precio:40
    },
    {
      nombre:"Portal",
      precio:5
    }
  ]
  
  let juegosComprables = []
  //juegos comprables => [{nombre:'Halo',precio:35},{}]
  
  //Ejercicio 2
  /**
   * Preguntar por el presupuesto del usuario
   * presupuesto:number
   *  y recorrer el arreglo del juego, por cada juego que este dentro del presupuesto, agregarlo el juego al arreglo de juegos comprables.
   * 
   * tip: recuerden de que existe .push()
   */
  // let presupuesto = +prompt("Ingrese cuanto tiene pensado gastar")
  
  // for(let i = 0; i < arrJuegos.length; i++){
  //   if(presupuesto >= arrJuegos[i].precio){
  //     juegosComprables.push(arrJuegos[i])
  //   }
  // }
  
  // console.table(juegosComprables)
  
  //Ejercicio 3
  //De manera similar al ejemplo anterior esta vez preguntar otra vez por el presupuesto del usuario, solamente que a diferencia del ejercicio anterior no mostrar las opciones viables si no preguntar si lo desea comprar y reducir el presupuesto hasta que no queden mas juegos o ya no haya mas presupuesto
  
  let presupuesto = +prompt("cuando desea gastar???")
  
  let juegosComprados = []
  
  for(let i = 0; i < arrJuegos.length; i++){
    if(presupuesto < arrJuegos[i].precio){
      //hace que salte la iteración
      continue;
    }
  
    //estoy mostrando al usuario una ventanita que le de la info del juego y pregunte si lo compro
    let compra = confirm(`Deseas comprar ${arrJuegos[i].nombre}, cuesta S/ ${arrJuegos[i].precio}`);
    //evaluamos compra, recordemos que el confirm me devuelve, true o false
    if(compra === true){
      juegosComprados.push(arrJuegos[i])
      //presupuesto = presupuesto - arrJuegos[i].precio
      presupuesto -= arrJuegos[i].precio
    }
  }
  
  console.log(`A ud. le queda ${presupuesto}`)
  console.table(juegosComprados)

  
let arreglo = ["capibara", " pinguino ", "alce ", "cocodrilo "]

let item0 = arreglo[0]

console.log(item0)

let [primeritem, segundoitem, terceritem, cuartoitem] = arreglo

console.log(primeritem)
console.log(segundoitem)
console.log(terceritem)
console.log(cuartoitem)

let objvehiculo = {
    marca: "tesla",
    modelo: 

}


// tengo que saber de antemano que propiedades tiene el objeto que voy a desestructurar

let {marca, modelo, anio, tipo, colores, encender} = objvehiculo

console.log(tipo)
console.log(colores)
encender()
console.log(marca)

arregloobjs.map(({nombre, edad, apellidos}))

// buena practica

let verificarVariante = (edad, nombre, delito) => {
console.log(edad)
console.log(nombre)
console.log(delito)
}

verificarVariante("loki", 100, "ser bueno")


let alumnos = [
    {
        nombre:"juan",
        edad: 15
    },
    {
        nombre:"eduardo",
        edad: 16
    },
    {
        nombre:"ana",
        edad: 16
    },
]

// array.foreach ((item, i, arr) => {})
alumnos.forEach(({nombre, edad}) => {
    console.log(nombre)
    console.log(edad)
})

let album = {
    nombre: "Random Access Memories",
    Discográfica: {
        nombre_discográfica: "Columbia",
        empresa: "Sony Records"
    },
    canciones:[
        {
            cancion: "instant crush",
            autores: ["Thomas", "julian"]
            duración: 5.37
        },
        {
            cancion: "Love yourself to dance",
            autores: ["Thomas", "Pharrel"]
            duración: 5.53
        },
    ]
}

let {
    nombre,
    discografica: {
        nombre_discográfica
        empresa
    },
    canciones:[
        primeraCancion,
        segundacancion
    ]
} = album 

console.log(empresa)
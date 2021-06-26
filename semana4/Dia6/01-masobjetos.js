let perrete = {
    nombre:"Backus",
    edad:15,
    color"blanco",
    habitos:["escarbar", "ladrar","dormir"],

    // metodo, simplemente es una funcion asociada a una propiedad de un objeto
    ladrar: function(){
    console.log("arf,arf,arf");
}
}
perrete.ladrar()
perrete.color ="blanco con gris"

console.log(perrete.color)

// entonces no solamente vamos a poder referenciar y cambiar las propiedades deun objeto, tambien podemos agregar propiedades

perrete.tamanio = "pequeño"
console.log(perrete.tamanio)

delete perrete.edad //eliminar una propiedad
console.log(perrete.edad) //luego de haberse borrado aparece como undefined

// -------------------------------------------------

let restaurante ={
    nombre:"la nueva palomino"
    platillos:[
        {
        id:1
        nombrePlatillo: "Rocoto relleno"
        Precio: 26
        },
        {
            id:2,
            nombrePlatillo:"Pepian de Cuy"
            precio:35
        },
        {
            id:3,
            nombrePlatillo:"Chupe de camarones"
            precio:40
        },
  ]
//   en este caso el metodo seria "mostrarPlatillos"

mostrarPlatillos: function(){
    console.log(restaurante.platillos)
}
}




















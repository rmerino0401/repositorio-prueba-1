// let precio = +prompt("Ingrese el precio del traje que desea llevar")
// let dscto = 0
// if precio >=800){
//     dscto = precio *0.85
//     console.log(´el precio promocional de su producto es ${dscto}´)
// }else{
//     dscto = precio * 0.92
//     console.log(El precio promocional es )
// }
// }


let nro1 = 45;
let nro2 = 10;
let nro3 = 90;

// necesitamos saber cual de estos 3 es el número mayor



let cantuvas = +prompt("Cuantos asistentes/comenzales tendrá el evento?")

let precioFinal = 0;

if(cantPlatos > 300){
  precioFinal = cantPlatos * 75;
  console.log(`El precio sera de: ${precioFinal}`)
}else if(cantPlatos < 300 && cantPlatos >= 200){
  precioFinal = cantPlatos * 85;
  console.log(`El precio sera de: ${precioFinal}`)
}else if(cantPlatos < 200 && cantPlatos >= 100){
  precioFinal = cantPlatos * 88;
  console.log(`El precio sera de: ${precioFinal}`)
}else{
  precioFinal = cantPlatos * 90;
  console.log(`El precio sera de: ${precioFinal}`)
}
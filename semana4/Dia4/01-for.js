/**
 * for(contador; condicional; actualización){
 *  codigo que va a repetirse X veces
 * }
 */

// for(let cont = 0; cont <= 10; cont++){
//   console.log(`El contador es ${cont}`)
// }

// let nombres = ["Daniel","Lezly","Jorge","Eduardo","Osmar","Josue","Linder"]


// for(let i = 0; i < nombres.length; i++){
//   console.log( i + " " + nombres[i])
// }

//USO DE BREAK

// let carta = ["Ceviche","Cuy","Lasagna","Adobo","Seco de Chabelo","Carapulcra","Aji de Gallina","Rocoto Relleno"];

// let eleccion = +prompt(`Indique la opción Deseada:
//                         0. Ceviche
//                         1. Cuy
//                         2. Lasagna
//                         3. Adobo
//                         4. Seco de Chabelo
//                         5. Carapulcra
//                         6. Ají de Gallina
//                         7. Rocoto Relleno`)

// for(let i = 0; i < carta.length; i++){
//   if(eleccion === i){
//     console.log(`Ud a elegido ${carta[i]}`)
//     break; //cortamos
//   }
//   console.log(`me he ejecutado ${i} veces`)
// }

// console.log("Yo estoy al final :D")
// ---------------------------------------------


//Encontremos la cantidad de Ceros

// let binarios = [0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1];

// let contadorCeros = 0;

// for(let i = 0; i < binarios.length; i++){
//   if(binarios[i] === 1){
//     //cuando encuentre un 1 en el arreglo
//     //se sale esa iteración
//     continue;
//   }
//   console.log(binarios[i])
//   contadorCeros++
// }

// console.log(`Hay ${contadorCeros} Ceros`)

// let alumnos = ["alex", "diana", "gaby", "jacky", "marco", "paloma", "Danny" ]

// let notas = [15,17,20,20,14,18,14]

// for(let i=0; i <alumnos.length; i++){
//     console.log(alumnos[i] +" "+ )notas [i])
}

// ---------------------------------------------

// ejercicio 2:

// ----------------------------------------



//ejercicio 4 

// let inicio= +prompt("Ingrese el año de inicio")
// let fin= +prompt("Ingrese el año final")

// let años=[]

// for(let i = inicio; i<fin;i++){

//     if((i % 4 == 0 && i %100 != 0) || i % 400 == 0){
//         años.push(i)
//         continue
//     }
// }
//     console.log(años)




let a = 100;
let b = 4;

let suma = a + b;
console.log("suma", suma);

let resta  = b - a;
console.log("resta", resta);

let multiplicacion = a * b;
console.log ("multiplicar", multiplicacion)

let division = a / b;
console.log( "division", division);

let residuo = 105 % 4
console.log("modulo", residuo);

// concatenar
// me permite juntar las variables

let nombre = "Roberto";

let saludo= "hola soy ";

let edad = 39;

// las variables siempre deben ser simples
// sin tilder ni caracteres raros
// que comiencen con una letra

let oracion = saludo + nombre + " y tengo " + edad;

console.log(oracion)

let cita = "\"La imaginación es más importante que el conocimiento\". \nAlbert Einstein";
// la "n" al lado del nombre de albert einstein es como un <br>


console.log(cita);

// errores en java (bugs)

console.log("11" + 1); 
// concatenando

console.log("11" - 1);
// resta y no deberia hacerlo con un string


let saludo2 ="Buen dia";

let ciudad ="Arequipa";

let oracion2 = `${saludo2} soy de ${ciudad}`;
// SE PUEDE CONCATENAR CON TEMPLATE STRING
// $ SIGNIFICA QUE PUEDO USAR JS ALLI ADENTRO

console.log(oracion2)




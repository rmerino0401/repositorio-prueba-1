function restar(num1 = 100, num2 = 20){
    return num1 - num2
}

console.log(restar(10, 2))

console.log(restar())

console.log(restar(50, 10))

function saludar(texto = "hola"){
    console.log(texto)
}

saludar()

saludar("Buenas tardes")

// funciones son anonimas

// nosotros podemos asignar una variable a casi cualquier cosa - ESTO ES "CALLBACKS"

// ESTO ES = QUE: function division(num1,num2)...

let division = function(num1, num2){
    return num1 / num2
}

console.log(division(1000, 4));
// cosa curiosa para ejecutar codigo x tiempo

setTimeout(function(){
    console.log("BOMBA!")
}, 3000

//---------------------

// funciones flecha:

// let despedirse = texto => {
//     return `Adios, ${texto}`
// }

// esto es igual a.....

let despedirse = texto => `Adios, ${texto}`

console.log(despedirse("no eres tu, soy yo"));

















console.log(despedirse("no eres tú, soy yo"));













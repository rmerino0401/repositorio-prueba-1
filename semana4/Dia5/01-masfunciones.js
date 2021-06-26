function saludar (texto){
console.log (`hola, ${texto}`)
// no estoy retornando nada y tampoco es obligatorio
}

saludar("como estás")
saludar("soy roberto")
saludar("que planes tienes")

function multiplicacion(num1,num2){
    // cuando ponemos un "return", la ejecucion de mi funcion se corta como sucede con el break
        return num1 * num2
    console.log("estoy despues del return")
}
console.log(multiplicacion(10,72))

// ---------------------------------------

function espar(numero){
    if(numero % 2 === 0){
    // verdadero
    return true
    }else{
        // falso
        return false
    }
}

console.log(espar(21))

// ---------------------------

let texto ="aqui"

function sinArgumento(){
    console.log("no tengo argumentos " + texto)
}

sinArgumento()

console.log(sinArgumento()) //sin argumento no retorna nada, es undefined

/**
 * 1.no necesariamente tienen que recibir argumentos
 * 2.no necesariamente 
 */

















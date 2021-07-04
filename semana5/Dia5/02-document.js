//document es un objeto que me va a permitir modificar el DOM
//EL DOM es una serie de nodos (objetos) creados al momento de interpretar el HTML, cada nodo seria una etiqueta HTML

//document.getElementById("id_elemento")
let titulo = document.getElementById("titulo")

console.log(titulo)

//innerHTML, que es una prop, que contiene el HTML dentro de un elemento
titulo.innerHTML = "<i>Nuevo Título de mi App</i>"

//kebab-case -> background-color
//camelCase -> backgroundColor

titulo.style.color = "rebeccapurple"
titulo.style.backgroundColor = "lime"
titulo.style.padding = "10px"

let listaitems = document.getElementsByClassName
("lista_item")

console.log(listaitems)

let arregloitems = Array.from(listaitems)

console.log(arregloitems)

arregloitems.array.forEach((item => {
    item.style.fontfamily = "Arial"
    item.style.fontweight = "bold"

})

let cajitas = document.querySelectorALL(".cajita")

console.log(cajitas)

cajitas.forEach((caja) => {
    caja.innerHTML = "contenido caja"
    // añadir una clase al elemento
    caja.style.width = "200px"
    caja.style.height = "200px"
    caja.classList.add("resaltado")
    caja.classList.add("redondeado")

    console.log(miParrafo)

    miParrafo
})


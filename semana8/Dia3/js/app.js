//to-do
//1. Obtener Datos 
//1.1 Esos datos están en la estructura que necesito?
//2. Convertir esos datos a HTML
//3. Agregarlos al DOM

// primero imports
import { obtenerProductos, crearProductos, crearProducto } from "./productoService.js"
import { imprimirProductos } from "./Interfaz.js"

// luego variables globales
const btnCrear = document.getElementById("btnCrear")
const modalCrear = document.getElementById("modalCrear")
const bsModalCrear = new bootstrap.Modal(modalCrear)
const formCrear = document.getElementById("formCrear")

// y codigo al final
const getProductos = () => {
    obtenerProductos()
    .then(productos => {
        // console.log(productos)
        imprimirProductos(productos)
    })
}
getProductos()

btnCrear.addEventListener("click", () => {
    bsModalCrear.show()
})

// escuchar el submit
formCrear.addEventListener("submit", (e) => {
    e.preventDefault()

  const nuevoProducto = {
      prod_nombre: formCrear["prod_nombre"].value,
      prod_descripcion: formCrear["prod_descripcion"].value,
      prod_precio: formCrear["prod_precio"].value,
      prod_stock: formCrear["prod_stock"].value,
      prod_oferta: formCrear["prod_oferta"].value,
    }  
try {
    let rpta = await crearProducto(nuevoProducto)
    // console.log(rpta)  
    formCrear.reset() //este limpia el formulario
    modalCrear.hide() // con esto se esconde el modal
    getProductos() //Obtengo los productos actualizados
}catch (error){
    console.log(error)
}
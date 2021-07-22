// to-do
// 1. Obtener datos
// 1.1 Esos datos estan en la forma ó estructura que necesito?
// 2. Convertir esos datos a HTML
// 3. Agregarlos al DOM

import { obtenerProductos } from "./productoservice.js";

const getProductos = () =>{
obtenerProductos()
.then(productos =>{
    // console.log(productos)
    imprimirProductos

})
}
getProductos()
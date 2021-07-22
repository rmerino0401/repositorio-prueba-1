// este archivo nos va a servir para manejar las peticiones dentro de nuestra aplicación.
const URL = "https://60f60de618254c00176e0106.mockapi.io/productos"

const obtenerProductos = () => {
    return new Promise((resolve,reject) => {
        // aqui va el codigo asincrono (que demora) en este caso va a demorar a fetch
        fetch(URL)
        .then((respuesta) => {
            return respuesta.json() //aqui tengo la rpta con el status
        })
        .then((productosObtenidos) => {
            resolve(productosObtenidos) //aqui tengo la dataya en javascript
        })
        .catch(error => reject(error)) //esto se activa en caso de error
    })
}

export {
    obtenerProductos()
    .then(productos => {
        console.log(productos)
    }
}
getProductos()
//Este archivo nos va a servir para manejar las peticiones dentro de nuestra aplicación.
const URL = "https://60f60de618254c00176e0106.mockapi.io/productos"

const obtenerProductos = () => {
    return new Promise((resolve, reject) => {
        //el codigo asíncrono
        fetch(URL)
        .then((respuesta) => {
            return respuesta.json() //tengo la rpta con el status
        })
        .then((productosObtenidos) => {
            resolve(productosObtenidos) //tengo la data ya en JS
        })
        .catch(error => reject(error)) //en caso de error
    })
}

const crearProducto = (ObjProducto) => {
    const configuracion = {
        method: "POST"
        body: JSON.stringify(objProducto),
        headers: {"content-type": "application/json"}
    }
    try{
        const respuesta = await fetch(URL, configuracion)
        const data = await respuesta.json()
        return data // esto será equivalente a resolve
    } catch (error) {
        throw error
    }

}

export {
    obtenerProductos,
    crearProducto
}
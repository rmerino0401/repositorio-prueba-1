import axios from "axios"

const URL = `${process.env.REACT_APP_API}proyecto-admnistrador`

const obtenerProductos = async () => {
    try {
        //axios me devuelve la rpta, el estado, datos de mi peticios, data contiene los datos de respuesta
        //axios.get .post .put
        let { data } = await axios.get(URL)
        return data
    } catch (error) {
        throw error
    }
}

const crearProducto = async(nuevoProducto) => {
    try {
        const headers = {
            "Content-Type": "application/json"
        }
        let { data } = await axios.post(URL, nuevoProducto, { headers})
        return data
    } catch (error) {
        throw error
    }
}

const obtenerProductoPorId = async (id) => {
    try {
        let { data } = await axios.get(`${URL}/${id}`)
        return data
    }catch (error) {
        throw error 
    }
}

const editarProducto = async (productoEditado,id) => {
    try {
       const headers = {
           "Content-Type": "application/Json"
       } 
       const { data } = await axios.put(`${URL}/${id}`, productoEditado,{headers})
       return data
    }catch (error) {
        throw error
    }
}

export {
    obtenerProductos,
    crearProducto,
    obtenerProductoPorId,
    editarProducto
}
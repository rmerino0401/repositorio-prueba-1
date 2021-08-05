import { useState,useEffect } from "react"
import { useHistory } from "react-router-dom"
import Swal from "sweetalert2"

import { crearProducto,subirArchivo } from "../services/productosService"
import FormProducto from "../components/formProducto"

let imagen

export default function CrearProductoView() {
    const [value, setValue] = useState({
        prod_nombre:'',
        prod_descripcion:'',
        prod_precio:0,
        prod_stock:0,
        prod_oferta:false,
    })
    //history es un objeto que va a tener toda la navegacion de mi aplicación, como un historial
    const history = useHistory()

    const actualizarInput = (e) => {
        if(e.target.name === "prod_oferta"){
            setValue({
                ...value,
                [e.target.name]:e.target.checked
            })
            return
        }
        setValue({
            ...value,
            [e.target.name]:e.target.value
        })
    }

    const manejarSubmit = async (e) => {
        e.preventDefault()
        try {
            const urlArchivo = await subirArchivo(imagen) //primero subimos la imagen y obtenemos la url
            await crearProducto({...value, prod_imagen:urlArchivo})
            await Swal.fire({
                icon:'success',
                title:'Producto creado!!',
                showConfirmButton:false,
                timer:3000
            })
            history.push('/')
        } catch (error) {
            console.error(error)
        }
    }

    const manejarImagen = (e) => {
        e.preventDefault()
        console.log(e.target.files)
        imagen = e.target.files[0]
    }


    return (
        <div>
            <h1>Crear producto</h1>

            <FormProducto 
                value={value} 
                actualizarInput={actualizarInput} 
                manejarSubmit={manejarSubmit}
                manejarImagen={manejarImagen}
            />
        </div>
    )
}

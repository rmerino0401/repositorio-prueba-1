import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { useHistory } from 'react-router-dom'
import Swal from "sweetalert2"

import { editarProducto, obtenerProductoPorId } from '../services/productosService'
import FormProducto from '../components/formProducto'

export default function EditarProductoView() {
    const [value, setValue] = useState({
        prod_nombre:'',
        prod_descripcion:'',
        prod_precio:0,
        prod_stock:0,
        prod_oferta:false,
    })
    //useParams en forma de objeto me va a dar los parámetros que este recibiendo por la URL
    const {id} = useParams()
    

    const getProducto = async () => {
        try {
            const productoObtenido = await obtenerProductoPorId(id)
            setValue({...productoObtenido})
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getProducto()
    },[])

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

    const manejarSubmit =  async (e) => {
        e.preventDefault()
        await editarProducto(value, id)
        await Swal.fire({
        icon:"sucess",
        title: "Producto editado con éxito",
        showConfirmButton:false,
        timer:3000
        })

    }

    return (
        <div>
            <h1>Editar Producto</h1>
            <FormProducto 
                value={value} 
                actualizarInput={actualizarInput}
                manejarSubmit={manejarSubmit}
            />
        </div>
    )
}

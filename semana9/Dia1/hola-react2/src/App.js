import {useState, useEffect} from 'react'
import Footer from './components/Footer'
import ListaTareas from './components/ListaTareas'
import inputTarea from './components/inputTarea'

export default function App() {
  // const [estado, funcdelestado] = useState(estadoinicial)
const [tareas, setTareas] = useState(["pasear al perro"])
const [texto, setTexto] = useState("ordenar")

const anadirTarea = () => {
  setTareas([...tareas, texto])
}

const manejarTexto = (nuevoTexto) => {
  setTexto(nuevoTexto)
}

const eliminarTarea = (indice) => {
  // console.log(indice)
  // crear un arregloTmp por spread operator
  let tareasTmp = [...tareas]
  // elimino un item a partir del item que reciba
  tareasTmp.splice(indice, 1)
  // ya con el item eliminado en mi temporal, actuaizo el estado
  setTareas(tareasTmp)  
}

const miTitulo = "mi App"

useEffect(() => {
  
})

return (
    <div>
      <h1>{miTitulo}</h1>
      <ListaTareas tareas={tareas} eliminarTarea={eliminarTarea}/>
      <hr/>
      <InputTarea 
        texto={texto} 
        manejarTexto={manejarTexto}
        anadirTarea={anadirTarea}
      />
      <Footer mensaje={"Empresa1"}/>
      <Footer mensaje={"Empresa2"}/>
    </div>
  )
}

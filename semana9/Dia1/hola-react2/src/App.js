import {useState} from 'react'
import Footer from './components/Footer'
import ListaTareas from './components/ListaTareas'

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

const miTitulo = "mi App"

return (
    <div>
      <h1>{miTitulo}</h1>
      {/* <ul>
        {tareas.map((tar, indice) => (
          <li key={indice}>{tar}</li>
        ))}
      </ul> */}
      <ListaTareas tareas={tareas} />
      <hr/>

      <input type="text" value={texto} onChange={(e) => {manejarTexto(e.target.value)}} />
       {/*value va a ser lo que tenemos escrito  */}

      <button onClick={anadirTarea}>
      Anadir Tarea
      </button>
      <Footer mensaje={"Empresa1"}/>
      <Footer mensaje={"Empresa2"}/>
      
    </div>
  )
}

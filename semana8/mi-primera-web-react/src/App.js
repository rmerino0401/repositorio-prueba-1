import { useState } from "react"; 
import "./App.css";
import imagenlogo from "./logo.sgv";
//components
import Header from "./"
function App() {
  return (
    <div>
      <h1>Hola mundo</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias praesentium rem alias reiciendis iure iusto distinctio voluptatem, perferendis, fugit ab necessitatibus aperiam ratione! Consequuntur, ad dolorem! Ad hic sit aliquid.

      </p>
      <h1>{numero}</h1>
      <button onclick={sumarUnidad}>Sumar</button>
      <button onclick={restarUnidad}>restar</button>
      <img src="" alt="" />

      <img src="imagenlogo" alt="" />
    <div>
      <h2>Roberto Merino</h2>
      </div>
      </div>
    
  );
};

export default App;
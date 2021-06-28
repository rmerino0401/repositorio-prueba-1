let arrJuegos = [
    {
      nombre:"Halo",
      precio:35
    },
    {
      nombre:"Outer Wilds",
      precio:24
    },
    {
      nombre:"Civilization V",
      precio:90
    },
    {
      nombre:"Stardew Valley",
      precio:30
    },
    {
      nombre:"The Witcher 3",
      precio:40
    },
    {
      nombre:"Portal",
      precio:5
    }
  ]
  
//   1. pregunto el presupuesto
    let presupuesto = +prompt("cuando desea gastar?")

    let juegosComprados = []
// 2. filtro cuales podria comprar
    let revisarpresupuesto = () => {
        let juegosComprables = []
  
  for(let i = 0; i < arrJuegos.length; i++){
    if(presupuesto < arrJuegos[i].precio){

juegosComprables.push(arrJuegos)        console.log(`se descarta ${arrjuegos{i}.nombre}`)
      continue;
    }


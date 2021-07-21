








let verduras = ["lechuga", "col china", "zanahoria", "jolantao" ]

let carnes = ["pollo", "cordero", "pato", "cuy", "res"]

let comida = [...verduras, ...carnes]

console.log(comida)

let pikachu = 
{
    tipo: "electrico"
    fuerza: 40,
    vida: 100
}

let pikachu2 = pikachu 

pikachu2.vida = 50

console.log(pikachu)

let pikachu3 = {...pikachu, fuerza:200, color:"mostaza"}

pikachu3.vida = 80

console.log("pikachu3", pikachu3)


let operacion = (a,b, ...rest)
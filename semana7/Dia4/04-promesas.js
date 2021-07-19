const horneartorta =( => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true){
                resolve("la torta esta lista")
            }else{
                reject("la torta  se quemo :/")
            }
        }, 5000)
    })
}
// para saber si fue bien - then()
horneartorta()
.then((resultado) => {
console.log(resultado) //resolve
})
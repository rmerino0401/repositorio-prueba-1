let btnModal = document.getElementByid("btnAbrir")

let miModal = document.getElementByid("miModal")

// let bsModal = new bootstrap.modal(document.getElementById("miModal"))
let bsModal = new bootstrap.Modal(miModal)

console.log(bsModal)

btnModal.addEventlistener("click", () => {
    // desde javascript se pueden hacer mas operaciones y validaciones, parametros, etc
    
    bsModal.show()
})

setTimeout(() => {
    bsModal.show()
},3000)
buscarAlumno("fernando", (existe) => {
    if(existe === true) {
        console.log("el alumno esta dentro de la base de datos")
    } else{
        console.log("alumno no encontrado")
    }
})
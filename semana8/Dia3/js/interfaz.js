// este archivo estara especializado de dibujar elementos en el DOM

const imprimirProductos = (arregloProductos) => {
    const contenido = document.getElementById("divProductos")

    let cardscontenido = '' //Guardar en html generado

    arregloProductos.foreach(({prod_nombre, prod_descripcion, prod_precio, prod_imagen}) => {
        let cardProducto =
        <div class="col-sm-12 col-md-3 mb-2">

        </div class="card">
        <img src="${prod_imagen}" class="card-img-top" alt="foto producto">
            <div class="card-body">
            <h4 class="card-title">
                ${prod_nombre}
                </h4>

                <div class="card-text">
                    ${prod_descripcion}
                    </div>
                    </div>
                    <div class="card-footer">
                        <span class="fw-bold"> Precio: </span> ${prod_precio}
            </div>
            </div>`

            estadoContenido = estadocontenido + cardProducto
    })
    contenido.innerhtml = estadoContenido
}
export{
    imprimirProductos
}
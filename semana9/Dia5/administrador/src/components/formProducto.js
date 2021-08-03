
export default function formProducto() {
    return (
        <div>
            <form>
                <div className="mb-3">
                <label className="form-label">
                    Nombre Producto
                </label>
                <input
                type="text"
                className="form-control"
                name="prod_nombre"
                />
                </div>

                <div className="mb-3">
                <label className="form-label">
                    Descripcion Producto
                </label>
                <input
                type="text"
                className="form-control"
                name="prod_descripcion"
                />
                </div>

                <div className="mb-3">
                <label className="form-label">
                    Precio Producto
                </label>
                <input
                type="number"
                className="form-control"
                name="prod_precio"
                />
                </div>

                <div className="mb-3">
                <label className="form-label">
                    Stock Producto
                </label>
                <input
                type="number"
                className="form-control"
                name="prod_stock"
                />
                </div>

                <div className="mb-3">
                <label className="form-check-label">
                    Ofertar Producto
                </label>
                <input
                type="checkbox"
                className="form-check-input"
                name="prod_oferta"
                />
                <label className="form-check-label">
                    Ofertar producto
                </label>
                </div>
            </form>
        </div>
    )
}

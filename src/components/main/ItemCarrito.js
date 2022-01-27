import { useConsumirContexto } from "../../CartContext";

const ItemCarrito = ({ producto}) => {
    const { removerDelCarrito } = useConsumirContexto()

    return (
    
         <div className="card-detail mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                <img className="img-fluid rounded-start" src={producto.imagen} alt={producto.nombre}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{producto.nombre}</h5>
                        <h6>Cantidad: {producto.cantidad} $ {producto.precio}</h6>
                        <button className="btn boton-count boton-agregar" onClick={() => removerDelCarrito(producto.id)}>Borrar</button>
                    </div>
                </div>    
        </div>
        </div>



    )
}

export default ItemCarrito; 
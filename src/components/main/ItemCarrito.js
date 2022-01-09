import { useConsumirContexto } from "../../CartContext";

const ItemCarrito = ({ producto }) => {
    const { removerDelCarrito } = useConsumirContexto()

    return (
        <>
            <h5>{producto.nombre}</h5>
            <p>Cantidad: { producto.cantidad } - $ {producto.precio}</p>
            <button className="boton-count boton-agregar" onClick={() => removerDelCarrito(producto.id)}>Borrar</button>
            <hr/>
        </>
    )
}

export default ItemCarrito; 
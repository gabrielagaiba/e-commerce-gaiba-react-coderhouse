import ItemCount from './ItemCount'
import { Link } from "react-router-dom";
import { useState } from "react";
import { useConsumirContexto } from "../../CartContext"

const ItemDetail = ( {item} ) => {

    const [cantidad, setCantidad] = useState(0);
    const { agregarAlCarrito }= useConsumirContexto();

    const onAdd = (cantidadProducto) => {
        setCantidad(cantidadProducto);
        const { id , nombre , precio } = item;
        agregarAlCarrito(cantidadProducto,{ id, nombre, precio, cantidad: cantidadProducto})
    }

    return (
        item ?
        <>
            <div>Detalle del Producto</div>
            <hr/>
            <article>
                <h3>{item.nombre}</h3>
                <img className="img-item" src={item.imagen} alt={item.nombre}/>
                <h5>Precio $ {item.precio}</h5>
                <p>Descripción: {item.descripcion}</p>
            </article>
            
            { cantidad ? 
                <Link to="/carrito"><button className="boton-count boton-sumar">Finalizar compra</button></Link>
                : <ItemCount stock={10} initial={1} onAdd={onAdd}/>}
        </>:<></>
    )
}

export default ItemDetail;
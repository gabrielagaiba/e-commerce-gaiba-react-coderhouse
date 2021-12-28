import ItemCount from './ItemCount'
import { Link } from "react-router-dom";
import { useState } from "react";

const ItemDetail = ( {item} ) => {

    const [cantidad, setCantidad] = useState(0);

    const onAdd = (producto) => {
        setCantidad(producto)
        alert(`Se ha agregado ${producto} producto`);
    }

    return (
        item ?
        <>
            <div>Detalle del Producto</div>
            <hr/>
            <article>
                <h3>{item.nombre}</h3>
                <img className="img-item" src={item.imagenSrc} alt={item.nombre}/>
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
import ItemCount from './ItemCount'

const ItemDetail = ( {item} ) => {
    const onAdd = (producto) => {
        alert(`Se ha agregado al carrito ${producto} producto`);
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
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
        </>:<></>
    )
}

export default ItemDetail;
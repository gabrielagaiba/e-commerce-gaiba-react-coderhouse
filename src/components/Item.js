import ItemCount from './ItemCount'

const onAdd = (producto) => {
    alert(`Se ha agregado al carrito ${producto} producto`);
  } 

const Item =({item}) => {

    return (
        <>            
            <h3>{item.nombre}</h3>
            <img className="img-item" src={item.imagenSrc} alt={item.nombre}/>
            <button className="boton-count boton-agregar">Ver detalle</button>
            <h5>Precio $ {item.precio}</h5>
            <p>Descripción: {item.descripcion}</p>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </>
    )
}

export default Item;
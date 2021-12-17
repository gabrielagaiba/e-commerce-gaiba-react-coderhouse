const Item =({item}) => {

    return (
        <>            
            <h3>{item.nombre}</h3>
            <img className="img-item" src={item.imagenSrc} alt={item.nombre}/>
            <button className="boton-count boton-agregar">Ver detalle</button>
            <h5>Precio $ {item.precio}</h5>
            <p>Descripción: {item.descripcion}</p>
        </>
    )
}

export default Item;
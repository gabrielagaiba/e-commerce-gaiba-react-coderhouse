import { NavLink } from "react-router-dom";

const Item =({item}) => {

    return (
        <>            
            <h3>{item.nombre}</h3>
            <img className="img-item" src={item.imagen} alt={item.nombre}/>
            <NavLink to={`/item/${item.id}`}><button className="boton-count boton-agregar">Ver detalle</button></NavLink>
            <h5>Precio $ {item.precio}</h5>
            <p>Descripción: {item.descripcion}</p>
        </>
    )
}

export default Item;
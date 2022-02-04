import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useConsumirContexto } from "../../CartContext";

const ItemDetail = ( {item} ) => {

    const [cantidad, setCantidad] = useState(0);
    const { agregarAlCarrito }= useConsumirContexto();

    const onAdd = (cantidadProducto) => {
        setCantidad(cantidadProducto);
        const { id , nombre , precio, imagen } = item;
        agregarAlCarrito(cantidadProducto,{ id, nombre, precio, imagen, cantidad: cantidadProducto})
    }

    return (
        item ?
        <div className="card-detail mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                <img className="img-fluid rounded-start" src={item.imagen} alt={item.nombre}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">{item.nombre}</h4>
                        <p className="card-text">{item.descripcion}</p>
                        <h5>Precio $ {item.precio}</h5>
                    </div>
                    { cantidad ? 
                    <>
                        <Link to="/"><button className="btn boton-count btn-primary">Seguir comprando</button></Link>               
                        <Link to="/carrito"><button className="btn boton-count btn-success">Finalizar compra</button></Link>
                    </>
                : 
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
                }
                </div>
            </div>
        </div>
        :null
    )
}

export default ItemDetail;
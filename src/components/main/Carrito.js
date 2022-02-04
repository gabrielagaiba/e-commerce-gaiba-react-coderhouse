import ItemCarrito from "./ItemCarrito";
import { useConsumirContexto } from "../../CartContext";
import { Link } from "react-router-dom";
import Formulario from "./Formulario";

const Carrito = () => {
    const { carrito, removerTodo, precioTotal } = useConsumirContexto()

    return (
        <div>
            {carrito.length > 0 ?(                
            <>
                <div>
                    <ul>
                        {carrito.map((producto,indice)=>{
                            return (
                                <ItemCarrito key={indice} producto={producto} />
                            )})}
                    </ul>
                </div>
                <div>
                    <h3>Total $ {precioTotal}</h3>
                    <button className="btn boton-count btn-danger" onClick={removerTodo}>Vaciar</button>
                    <Formulario/>
                </div>
            </>            
            ) : 
            <>
                <p>No hay productos en el carrito</p>
                <Link to="/">
                    <button className="btn boton-count btn-success">Inicio</button>                    
                </Link>
            </>
            }
        </div>
    )
}

export default Carrito; 
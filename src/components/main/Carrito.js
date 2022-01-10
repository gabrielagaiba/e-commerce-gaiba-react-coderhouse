import ItemCarrito from "./ItemCarrito";
import { useConsumirContexto } from "../../CartContext";
import { Link } from "react-router-dom";

const Carrito = () => {
    const { carrito, removerTodo, precioTotal } = useConsumirContexto()

    return (
        <div>
           
            {carrito.length > 0 ?(
            <>
                <ul>
                    {carrito.map((producto,indice)=>{
                        return (
                            <ItemCarrito producto={producto} />
                        )})}
                </ul>
                <p>Total $ {precioTotal}</p>
                <button className="boton-count boton-restar" onClick={removerTodo}>Vaciar</button>
            </>
            ) : 
            <>
                <p>No hay productos en el carrito</p>
                <Link to="/">
                    <button className="boton-count boton-sumar">Inicio</button>
                </Link>
            </>
            }


        </div>
    )
}

export default Carrito; 
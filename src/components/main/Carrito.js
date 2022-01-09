import ItemCarrito from "./ItemCarrito";
import { useConsumirContexto } from "../../CartContext";

const Carrito = () => {
    const { carrito, removerTodo } = useConsumirContexto()

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
            <button className="boton-count boton-restar" onClick={removerTodo}>Vaciar</button>
            </>
            ) : <p>No hay productos en el carrito</p>}

            <p className={carrito.length > 0 ? "rojo" : "negro"}>Si tengo cosas en el carrito Rojo, si no Negro</p>
        </div>
    )
}

export default Carrito; 
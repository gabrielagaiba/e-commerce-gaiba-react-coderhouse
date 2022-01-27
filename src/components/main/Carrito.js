import ItemCarrito from "./ItemCarrito";
import { useConsumirContexto } from "../../CartContext";
import { Link } from "react-router-dom";
import Formulario from "./Formulario"

// process: es un variable "global" en NodeJS q nos permite acceder a la informaciond el proceo entre ellas las varialbes de entorno
console.log(process.env);

//consistencia en Id y chequeo de stock

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
                    <button className="btn boton-count boton-restar" onClick={removerTodo}>Vaciar</button>
                    <Formulario/>
                </div>
            </>
            
            ) : 
            <>
                <p>No hay productos en el carrito</p>
                <Link to="/">
                    <button className="btn boton-count boton-sumar">Inicio</button>                    
                </Link>
            </>
            }
        </div>
    )
}

export default Carrito; 
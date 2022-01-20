import ItemCarrito from "./ItemCarrito";
import { useConsumirContexto } from "../../CartContext";
import { Link } from "react-router-dom";
import { addDoc, collection, serverTimestamp, updateDoc } from "firebase/firestore"; //tratar de usar updateDoc
import { db } from "../../firebase";

// peocess: es un variable "global" en NodeJS q nos permite acceder a la informaciond el proceo entre ellas las varialbes de entorno
console.log(process.env);

//consistencia en Id y chequeo de stock

const Carrito = () => {
    const { carrito, removerTodo, precioTotal, removerDelCarrito } = useConsumirContexto()

    const finalizarCompra = () => {
        console.log("Guardando la compra en DB");

        const ventasCollection = collection(db, "ventas")
        addDoc(ventasCollection, {
            buyer: {
                name: "Gaby",
                lastName: "Gaiba",
                email: "gaby@hotmail.com"
            },
            items: carrito,
            date: serverTimestamp(),
            total: precioTotal
        })
        .then((resultado) => {
            alert('Su compra fue registrada con exito! Orden de compra: ' + resultado.id);
            removerTodo();
        })
    }

    return (
        <div>
            {carrito.length > 0 ?(
            <>
                <ul>
                    {carrito.map((producto,indice)=>{
                        return (
                            <ItemCarrito key={indice} producto={producto} />
                        )})}
                </ul>
                <button className="boton-count boton-restar" onClick={removerTodo}>Vaciar</button>
                <p>Total $ {precioTotal}</p>
                <button className="btn btn-success" onClick={finalizarCompra}>Terminar compra</button>
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
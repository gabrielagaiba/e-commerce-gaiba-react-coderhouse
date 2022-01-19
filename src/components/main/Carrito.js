import ItemCarrito from "./ItemCarrito";
import { useConsumirContexto } from "../../CartContext";
import { Link } from "react-router-dom";
import { addDoc, collection, serverTimestamp, updateDoc } from "firebase/firestore"; //tratar de usar updateDoc
import { db } from "../../firebase"

// peocess: es un variable "global" en NodeJS q nos permite acceder a la informaciond el proceo entre ellas las varialbes de entorno
console.log(process.env);

const Carrito = () => {
    const { carrito, removerTodo, precioTotal, removerDelCarrito } = useConsumirContexto()

    const finalizarCompra = () => {
        console.log("Guardando la compra en DB");

        const ventasCollection = collection(db, "ventas")
        addDoc(ventasCollection, {
            byyer: {
                name: "Gaby",
                lastName: "Gaiba",
                email: "gaby17_08@hotmail.com"

            },
            item: carrito,
            date: serverTimestamp(),
            total: 100 //aca lo harkodeo pero habria q traerlo
        })
        .then((resultado) => {
            console.log(resultado);
        })
        removerDelCarrito()
    }

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
                    {/*<Formulario/> agregar el formulario*/}
                </Link>
            </>
            }


        </div>
    )
}

export default Carrito; 
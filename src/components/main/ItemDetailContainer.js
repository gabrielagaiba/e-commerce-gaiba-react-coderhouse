import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from "../../firebase"
import ItemDetail from './ItemDetail'

/*
const productosIniciales = [
    { id: 1, categoria: "pizzas", nombre: "Pizza Margherita", descripcion: "Mozzarella y albhaca", precio: 860, imagenSrc: "/pizza-margherita.png" },
    { id: 2, categoria: "pizzas", nombre: "Pizza Napolitana", descripcion: "Mozzarella, tomate fresco, aceite de ajo y albhaca", precio: 1080, imagenSrc: "/pizza-napolitana.png" },
    { id: 3, categoria: "pizzas", nombre: "Pizza Calabresa", descripcion: "Mozzarella, calabresa y aceite picante", precio: 1230, imagenSrc: "/pizza-calabresa.png" },
    { id: 4, categoria: "cervezas", nombre: "Honey Beer", descripcion: "Lata de cerveza Honey Beer de 473 ml.", precio: 330, imagenSrc: "/honey.png" },
    { id: 5, categoria: "cervezas", nombre: "Porter Beer", descripcion: "Porron de cerveza Porter de 500 ml.", precio: 330, imagenSrc: "/porter.png" },
    { id: 6, categoria: "cervezas", nombre: "Scotch Beer", descripcion: "Lata de cerveza Scotch de 473 ml.", precio: 330, imagenSrc: "/scotch.png" }
]
*/

const ItemDetailContainer = () => {
    //Necesito un estado inicial
    const [producto, setProducto] = useState(null);
    const { idProducto } = useParams();
    console.log("Aca muestro la informacion del producto con ID ", idProducto);

    //Necesito ir a pedir la info
    useEffect(() => {

        const productosCollection = collection(db, "productos")

        const refDoc = doc(productosCollection, idProducto)
        getDoc(refDoc)
            .then((resultado) => {
                setProducto(resultado.data());
            })
            .catch((error)=> {
                console.log(error);
            })

        /*
        const promesa = new Promise((res, rej)=>{
            setTimeout(()=>{
                res(productosIniciales.find(elemento => elemento.id === parseInt(idProducto)));
            },2000)
        }) 
        promesa.then((datos) => {
            console.log(`Datos del producto obtenidos con ID, ${idProducto}`);
            setProducto(datos);    
        })
        promesa.catch(() => {
            console.log("Error al cargar los datos del producto");
        });
        */
    }, [ idProducto ]);

    //Necesito un render inicial para hacer un loader
    return(
        <>
            <ItemDetail item={producto} />           
        </>
    )
}

export default ItemDetailContainer;
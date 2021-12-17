import { useEffect, useState } from 'react'
import ItemList from './ItemList'

const productosIniciales = [
    { nombre: "Pizza Margherita", descripcion: "Mozzarella y albhaca", precio: 860, imagenSrc: "/pizza-margherita.png" },
    { nombre: "Pizza Napolitana", descripcion: "Mozzarella, tomate fresco, aceite de ajo y albhaca", precio: 1080, imagenSrc: "/pizza-napolitana.png" },
    { nombre: "Pizza Calabresa", descripcion: "Mozzarella, calabresa y aceite picante", precio: 1230, imagenSrc: "/pizza-calabresa.png" }
]

const ItemListContainer =(props) => {

    const [lista, setLista] = useState([])

    useEffect(() => {
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(productosIniciales);
            }, 2000);
        });
    
        promesa.then((productos) => {
            console.log("Todo ok");
            setLista(productos);
        })
        promesa.catch(() => {
            console.log("Todo mal")
        });
    }, []);

    return (
        <>
            <h2>Bienvenida {props.greeting}!</h2>           
            <ItemList items={lista}/>
        </>
    )

}

export default ItemListContainer;
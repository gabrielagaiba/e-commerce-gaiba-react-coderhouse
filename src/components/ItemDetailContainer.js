import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'

const datosProducto = {
    id: 1,
    nombre: "Pizza Margherita",
    descripcion: "Mozzarella y albhaca",
    precio: 860,
    imagenSrc: "/pizza-margherita.png",
    stock: 10 
}

const ItemDetailContainer = () => {
    //Necesito un estado inicial
    const [producto, setProducto] = useState(null)

    //Necesito ir a pedir la info
    useEffect(() => {
        const promesa = new Promise((res, rej)=>{
            setTimeout(()=>{
                res(datosProducto);
            },2000)
        }) 
        promesa.then((datos) => {
            console.log("Se ha cargado el detalle del producto correctamente");
            setProducto(datos);
        })
        promesa.catch(() => {
            console.log("Error al cargar los datos del producto");
        });

    }, []);

    //Necesito un render inicial para hacer un loader
    return(
        <>
            <ItemDetail item={producto} />           
        </>
    )
}

export default ItemDetailContainer;
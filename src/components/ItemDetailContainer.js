import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'

const datosProducto = { 
    nombre: "Pizza Margherita", descripcion: "Mozzarella y albhaca", precio: 860, imagenSrc: "/pizza-margherita.png" 
}

const ItemDetailContainer = () => {

    //Necesito un estado inicial
    const [producto, setProducto] = useState({})

    //Necesito ir a pedir la info
    useEffect(() => {
        const promesa = new Promise((res, rej)=>{
            setTimeout(()=>{
                res(datosProducto);
            },2000)
        }) 
        promesa.then((datos) => {
            setProducto(datos)
        })

    }, [])


    //Necesito un render inicial para hacer un loader
    return(
        <ItemDetail item={producto} />
    )
}

export default ItemDetailContainer;
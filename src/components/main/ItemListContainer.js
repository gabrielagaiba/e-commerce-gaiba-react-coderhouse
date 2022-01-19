import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { db } from "../../firebase"
import { getDocs, query, collection, where, doc } from 'firebase/firestore'
import ItemList from './ItemList'

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

const ItemListContainer =(props) => {

    const [lista, setLista] = useState([]);
    const { nombreCategoria } = useParams();
    console.log('El parametro de la URL es ', nombreCategoria);

    useEffect(() => {

        //Obtener una referencia a la colección
        //repetimos estos pasos en todos los lugares donde necesitamos consultar la db
        const productosCollection = collection(db, "productos") //collection hereda de query. lleva 3 parametros el 1° es db, 2° nombre de la colection 3°string

        if(nombreCategoria) {
            // query lleva la coleccion + constraints (filtros, ordenamientos, limites, etc)
            const consulta = query(productosCollection,where("categoria","==",nombreCategoria));
            getDocs(consulta)
                .then( (resultado) => {
                    const docs = resultado.docs;
                    setLista(docs.map((doc) => ({ idAutogenerado: doc.id, ...doc.data()})));
                    /*
                    const listaProductos = docs.map((doc) => {
                        const docData = doc.data();
                        const producto = {
                            id: doc.id,
                            ...docData
                        }
                        return producto
                    })
                    setLista(listaProductos);
                    */
                }) 
                .catch((error)=> {
                    console.log(error);
                })
        } else {
             getDocs(productosCollection) //para traer todos los documentos
                .then(({docs})=> {  //resultado : seria una representacion de lo q hay en la DB segun esta consulta
                    setLista(docs.map((doc) => ({ idAutogenerado: doc.id, ...doc.data()})));
                })
                .catch((error)=> {
                    console.log(error);
                })
        }

        /*
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                // Si tengo un parametro en la URL
                if(nombreCategoria){
                    // Filtro los productos
                    res(productosIniciales.filter((elemento) => {
                        // Si el producto tiene categoria igual al parametro, retorno True para devolverla
                        if(elemento.categoria === nombreCategoria){
                            return true;
                        // Si no, no la devuelvo
                        } else {
                            return false;
                        }
                    }));
                // Si no tengo parametros en la URL, devuelvo todos
                } else { 
                    res(productosIniciales);
                }
            }, 2000);
        });
    
        promesa.then((productos) => {
            console.log("Todo ok");
            setLista(productos);
        })
        promesa.catch(() => {
            console.log("Todo mal")
        });
        */
    }, [ nombreCategoria ]);

    return (
        <>
            <h2>Bienvenida {props.greeting}!</h2>           
            <ItemList items={lista}/>
        </>
    )

}

export default ItemListContainer;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import { getDocs, query, collection, where } from "firebase/firestore";
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const [lista, setLista] = useState([]);
    const { nombreCategoria } = useParams();
   
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
                    setLista(docs.map((doc) => ({ id: doc.id, ...doc.data()})));
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
                    setLista(docs.map((doc) => ({ id: doc.id, ...doc.data()})));
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
        <ItemList items={lista}/>
    )

}

export default ItemListContainer;
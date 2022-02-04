import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import { getDocs, query, collection, where } from "firebase/firestore";
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const [lista, setLista] = useState([]);
    const { nombreCategoria } = useParams();
   
    useEffect(() => {

        const productosCollection = collection(db, "productos")

        if(nombreCategoria) {
            const consulta = query(productosCollection,where("categoria","==",nombreCategoria));
            getDocs(consulta)
                .then( (resultado) => {
                    const docs = resultado.docs;
                    setLista(docs.map((doc) => ({ id: doc.id, ...doc.data()})));
                }) 
                .catch((error)=> {
                    console.log(error);
                })
        } else {
             getDocs(productosCollection)
                .then(({docs})=> {
                    setLista(docs.map((doc) => ({ id: doc.id, ...doc.data()})));
                })
                .catch((error)=> {
                    console.log(error);
                })
        }

    }, [ nombreCategoria ]);

    return (
        <ItemList items={lista} />
    )
}

export default ItemListContainer;
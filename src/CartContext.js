import { createContext, useContext, useState } from "react";

const contextoCarrito = createContext();

const { Provider } = contextoCarrito;

export const useConsumirContexto = () => { 
    return useContext(contextoCarrito);
}

const CustomProvider = ({children})=>{
    const [cantidadTotal, setCantidadTotal] = useState(0);
    const [precioTotal, setPrecioTotal] = useState(0);
    const [carrito, setCarrito]= useState([]);

    const agregarAlCarrito = (cantidad,nuevoProducto)=> {
        const copiaCarrito = [...carrito]
        if(isInCart(nuevoProducto.id)){
            const match = copiaCarrito.find((p) => p.id === nuevoProducto.id)
            match.cantidad = match.cantidad + cantidad;
        }else{
            copiaCarrito.push(nuevoProducto);
        }
        setCarrito(copiaCarrito)
        setCantidadTotal(cantidadTotal + cantidad)
        setPrecioTotal(precioTotal + nuevoProducto.precio * nuevoProducto.cantidad)
    }

    const removerDelCarrito = (id)=>{
        const indexOfProducto = carrito.findIndex((producto) => {return producto.id === id})
        setCantidadTotal(cantidadTotal - carrito[indexOfProducto].cantidad)
        setPrecioTotal(precioTotal - carrito[indexOfProducto].cantidad * carrito[indexOfProducto].precio)
        setCarrito(carrito.filter( (producto) => producto.id !== id))
    }

    const removerTodo = () => {
        setCarrito([]);
        setCantidadTotal(0);
        setPrecioTotal(0);
    }

    function isInCart(id){
        if(carrito.find( (producto) => { return producto.id === id } )) {
            return true;
        }else{
            return false;
        }
    }

    const valorDelContexto = {
        cantidadTotal,
        carrito,
        precioTotal,
        agregarAlCarrito,
        removerDelCarrito,
        removerTodo,
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}


export default CustomProvider;

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
       if(isInCart(nuevoProducto.id)){
            const indexOfProducto = carrito.findIndex((producto) => {return producto.id === nuevoProducto.id})
            const cantidadAnterior = carrito[indexOfProducto].cantidad
            setCantidadTotal(cantidadTotal - cantidadAnterior + nuevoProducto.cantidad)
            setPrecioTotal(precioTotal - cantidadAnterior * nuevoProducto.precio + nuevoProducto.cantidad * nuevoProducto.precio)
            const copiaCarrito = [...carrito]
            copiaCarrito[indexOfProducto] = nuevoProducto
            setCarrito(copiaCarrito)
       }else{
            const copia = [...carrito]
            copia.push(nuevoProducto)
            setCarrito(copia)
            setCantidadTotal(cantidadTotal + cantidad)
            setPrecioTotal(precioTotal + nuevoProducto.precio * nuevoProducto.cantidad)
       }
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
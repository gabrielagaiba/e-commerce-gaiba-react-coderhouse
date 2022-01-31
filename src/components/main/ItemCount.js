import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    
  const [contador, setContador] = useState(initial)
  
  const sumar = () =>{
      if (contador < stock) {
        setContador(contador + 1);
      }
  }
    
  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  }

  const agregar = () => {
    if (contador <= stock && contador > 0) {
      onAdd(contador);
    } 
  } 

  return (
    <div className="contador-container">      
      <div className="sumar-restar">
        <button onClick={restar} className="btn boton-restar">-</button>
        <p className="contador">{contador}</p>
        <button onClick={sumar} className="btn boton-sumar">+</button>
      </div>
      <button onClick={agregar} className="btn boton-agregar">Agregar al carrito</button>
    </div>
  )
}

export default ItemCount;
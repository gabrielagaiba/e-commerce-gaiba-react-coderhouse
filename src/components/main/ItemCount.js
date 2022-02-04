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
        <button onClick={restar} className="btn btn-danger">-</button>
        <p className="contador">{contador}</p>
        <button onClick={sumar} className="btn btn-success">+</button>
      </div>
      <button onClick={agregar} className="btn btn-primary">Agregar al carrito</button>
    </div>
  )
}

export default ItemCount;
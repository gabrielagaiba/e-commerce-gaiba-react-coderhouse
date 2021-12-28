import { useState } from 'react'

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
    <>
      <p>Contador Actual: {contador}</p>
      <button onClick={sumar} className="boton-count boton-sumar">Sumar</button>      
      <button onClick={restar} className="boton-count boton-restar">Restar</button>
      <button onClick={agregar} className="boton-count boton-agregar">Agregar</button>
    </>
  )
}

export default ItemCount;
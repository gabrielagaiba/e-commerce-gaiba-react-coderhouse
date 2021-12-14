import ItemCount from './ItemCount'

const onAdd = (a) => {
    alert(`Se ha agregado al carrito ${a} items`);
  } 

const ItemListContainer =(props) => {
    return (
        <>
            <h2>Bienvenido {props.greeting}!</h2>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </>
    )
}

export default ItemListContainer;
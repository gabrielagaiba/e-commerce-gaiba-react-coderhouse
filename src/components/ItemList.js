import Item from './Item'

const ItemList = ({ items }) => {

    return (
        items.map((elemento, index) => <Item item={elemento} key={index} />)
    )
}

export default ItemList;
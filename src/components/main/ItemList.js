import Item from "./Item";

const ItemList = ({ items }) => {

    return (
        <div className="card-container">
            { items.map((elemento, index) => <Item item={elemento} key={index} />) }
        </div>
    )
}

export default ItemList;
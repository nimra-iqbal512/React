import { useContext } from "react";
import { cartContext } from "../context/Cart.jsx";

const Item = (props) => {
    const cart = useContext(cartContext);

    return (
        <div className="item-card">
            <h4>{props.name}</h4>
            <p>Price: ${props.price}</p>
            <button onClick={() => cart.setItems([...cart.items, { name: props.name, price: props.price }])}>Add to Cart</button>
        </div>
    )
}
export default Item;
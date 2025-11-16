import { useCart } from "../context/Cart.jsx";

const Cart = () => {
  const cart = useCart();
  const total = cart.items.reduce((acc, item) => acc + Number(item.price), 0);
  return (
    <div className="cart">
      <h1>Cart</h1>
      {
        cart && cart.items.map(item => <li>{item.name} - ${item.price}</li>)
      }

      <h5>Total Bill: ${total}</h5>
    </div>
  )
}   

export default Cart;
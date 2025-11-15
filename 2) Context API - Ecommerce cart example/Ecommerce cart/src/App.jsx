import Item from "./components/Item"
import Cart from "./components/Cart"

// ** NOTE ** //
// // We can only use/access/modify context in a component, if we add the below commented code in our component.
// import { useContext } from "react";
// import { cartContext } from "./context/Cart.jsx";

function App() {
  // const cart = useContext(cartContext);
  // console.log(cart);
  
  return (
    <>
      <div className="App">
        <Item name="MacBook Pro" price="100000" />
        <Item name="PenDrive" price="4000" />
        <Item name="Mobile" price="35000" />
        <Cart />
      </div>
    </>
  )
}

export default App
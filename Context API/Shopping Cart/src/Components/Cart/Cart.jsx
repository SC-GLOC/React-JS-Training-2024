import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const Cart = () => {
  const { items } = useContext(CartContext);
  const total = items.reduce((a, b) => a + b.price, 0);
  return (
    <div>
      <h1>Your Cart</h1>
      <section>
        <ul>
          {items.length &&
            items.map((item, index) => (
              <li key={index + 1}> {`${item.name} - ${item.price}`} </li>
            ))}
        </ul>
      </section>

      <div>Total Price - ₹{total}</div>
    </div>
  );
};

export default Cart;

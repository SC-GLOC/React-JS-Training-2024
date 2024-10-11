import React from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const Item = ({ name, price }) => {
  const { items, setItems } = useContext(CartContext);

  console.log(items);
  return (
    <div className="item-card">
      <h4>Item Name: {name}</h4>
      <p>Price:₹{price}</p>
      <button onClick={() => setItems([...items, { name, price }])}>
        Add To Cart
      </button>
    </div>
  );
};

export default Item;

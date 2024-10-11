import React from "react";
import Item from "./Components/Item/Item";
import Cart from "./Components/Cart/Cart";

const App = () => {
  return (
    <>
      <div>
        <Item name={"Macbook Pro"} price={122000} />
        <Item name={"Crucial SSD 500GB "} price={2199} />
        <Item name={"Deco Mini 7"} price={5700} />
      </div>

      <Cart />
    </>
  );
};

export default App;

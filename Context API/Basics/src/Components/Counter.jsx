import React, { useContext } from "react";
import { CounterContext } from "../Context/CounterContext";

const Counter = () => {
  const counterContext = useContext(CounterContext);
  const { count, setCount } = counterContext;
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment +</button>
      <button onClick={() => setCount(count - 1)}>Decrement -</button>
    </div>
  );
};

export default Counter;

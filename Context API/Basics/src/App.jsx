import React, { useContext } from "react";
import Counter from "./Components/Counter";
import {
  CounterContext,
  CounterContextProvider,
} from "./Context/CounterContext";

const App = () => {
  const { count } = useContext(CounterContext);
  return (
    <div>
      <h1>The Count Is {count}</h1>

      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
};

export default App;

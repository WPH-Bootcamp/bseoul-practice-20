import { useCounter } from "../../hooks/useCounter";

function CounterComponent() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <p>Hitungan : {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default CounterComponent;

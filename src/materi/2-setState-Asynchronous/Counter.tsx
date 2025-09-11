import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    console.log("After increment : ", count);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;

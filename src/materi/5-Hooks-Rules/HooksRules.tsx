import React, { useState, useEffect } from "react";

export const ConditionalHookExampleWrong = () => {
  const [count, setCount] = useState(0);

  if (count > 5) {
    const [message, setMessage] = useState("");
    setMessage("Count now is 5");
    console.log(message);
  }

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
};

export const ConditionalHookExampleRight = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (count > 5) {
      setMessage("Count is greater than 5!");
    } else {
      setMessage("");
    }
  }, [count]);

  return (
    <div>
      <h1>Count : {count}</h1>
      <p>{message}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
};

function regularFunction() {
  const [count, setCount] = useState(10);
  return { count, setCount };
}

export const InvalidHookUsage = () => {
  const { count, setCount } = regularFunction();
  console.log(count);
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </>
  );
};

import React from "react";

const RenderExample: React.FC = () => {
  return (
    <div>
      <h1>Yang Tidak Terender :</h1>
      <ul>
        <li>{true}</li>
        <li>{false}</li>
        <li>{null}</li>
        <li>{undefined}</li>
      </ul>

      <h1>Yang Terender :</h1>
      <ul>
        <li>{0}</li>
        <li>{"  "}</li>
        <li>{NaN}</li>
      </ul>
    </div>
  );
};

export default RenderExample;

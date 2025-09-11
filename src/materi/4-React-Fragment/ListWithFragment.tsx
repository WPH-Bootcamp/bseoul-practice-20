import React from "react";

const items: string[] = ["Apple", "Banana", "Orange"];

const ListWithFragment: React.FC = () => {
  return (
    <>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <li>{item}</li>
        </React.Fragment>
      ))}
    </>
  );
};

export default ListWithFragment;

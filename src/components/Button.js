import React from "react";

export const Button = ({ name }) => {
  return (
    <div>
      <button className="px-2 py-2 bg-gray-200 rounded-md m-2">{name}</button>
    </div>
  );
};

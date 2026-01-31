import React, { useState, useRef } from "react";

export const Demo2 = () => {
  let x = 0;
  const [y, setY] = useState(0);
  const ref = useRef(0)
  return (
    <div className="w-96 m-2 p-2 border border-l-2 border-cyan-800">
      <div>
        <button
          className="bg-red-600 w-36 m-2"
          onClick={() => {
            x = x + 1;
            console.log("x = ",x)
          }}
        >
          Increase x
        </button>
      </div>
      <span className="font-bold">x value - {x}</span>
       <div>
        <button
          className="bg-blue-600 w-36 m-2"
          onClick={() => {
          setY(y+1)
            console.log("y = ",y)
          }}
        >
          Increase Y
        </button>
      </div>
      <span className="font-bold">State Value Y - {y}</span>
       <div>
        <button
          className="bg-green-600 w-36 m-2"
          onClick={() => {
          ref.current = ref.current+1;
            console.log("Ref = ",ref.current)
          }}
        >
          Increase Y
        </button>
      </div>
      <span className="font-bold">Ref Value - {ref.current}</span>
    </div>
  );
};

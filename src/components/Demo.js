import React, { useMemo, useState } from 'react'
import { myFunction } from '../utils/helper';

export const Demo = () => {
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState(0)

//useMemo memoizes (caches) a computed value(result) and recomputes it only when its dependencies[text] change.
  const prime = useMemo(() => myFunction(text),[text])

  return (
    <div
      className={`w-96 border border-l-2 border-black ${
        toggle ? "bg-black" : "bg-white"
      }`}
    >
      <button
        className="m-2 bg-green-400"
        onClick={() => setToggle(!toggle)}
      >
        Toggle
      </button>
       <div>
        <input className='m-2 border border-l-2 border-black' type='number' value={text} onChange={(e) => setText(e.target.value)}/>
        
    </div>
    <div>
        Prime : {prime}
    </div>
    </div>
   
  );
};

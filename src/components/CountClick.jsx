import React, { useState } from "react";

export default function CountClick() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>{count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        tang
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        giam
      </button>
    </>
  );
}

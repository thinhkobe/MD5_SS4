import React, { useState } from "react";

export default function CounText() {
  const [text, setText] = useState("");

  const handelCountText = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <input
        value={text}
        onChange={handelCountText}
        type="text"
        name=""
        id=""
      />
      <p>số kí tự đã nhập{text.length}</p>
    </>
  );
}

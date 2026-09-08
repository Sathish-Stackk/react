import React, { useState } from "react";

function CaseConverter() {
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Character Case Converter</h2>

      <textarea
        value={text}
        placeholder="Enter text"
        onChange={(e) => setText(e.target.value)}
      />

      <br /><br />

      <button onClick={() => setText(text.toUpperCase())}>
        UPPERCASE
      </button>

      <button onClick={() => setText(text.toLowerCase())}>
        lowercase
      </button>

      <p>Result: {text}</p>
    </div>
  );
}

export default CaseConverter;

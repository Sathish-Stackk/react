import React, { useState } from "react";

function WordCounter() {
  const [text, setText] = useState("");

  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <div>
      <h2>Word Counter</h2>

      <textarea
        placeholder="Enter your text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>Words: {words}</p>
    </div>
  );
}

export default WordCounter;

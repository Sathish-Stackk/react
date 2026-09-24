import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  let words = text.trim() ? text.trim().split(/\s+/).length : 0;

  return (
    <div>
      <h2>Word Counter</h2>
      <textarea onChange={(e) => setText(e.target.value)} />
      <p>Words: {words}</p>
      <p>Characters: {text.length}</p>
    </div>
  );
}

export default App;

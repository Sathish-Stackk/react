import { useState } from "react";

function App() {
  const [color, setColor] = useState("#36BCF7");

  return (
    <div>
      <h2>Color Picker</h2>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <p>Selected Color: {color}</p>
      <div style={{ backgroundColor: color, height: "100px" }} />
    </div>
  );
}

export default App;

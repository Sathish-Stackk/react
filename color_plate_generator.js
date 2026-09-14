import { useState } from "react";

function ColorPalette() {
  const [colors, setColors] = useState([]);

  const generatePalette = () => {
    const newColors = [];

    for (let i = 0; i < 5; i++) {
      const color =
        "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");

      newColors.push(color);
    }

    setColors(newColors);
  };

  return (
    <div>
      <h2>Random Color Palette</h2>

      <button onClick={generatePalette}>Generate Palette</button>

      <div style={{ display: "flex", marginTop: "20px" }}>
        {colors.map((color, index) => (
          <div
            key={index}
            style={{
              backgroundColor: color,
              width: "100px",
              height: "100px",
              padding: "10px",
            }}
          >
            {color}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorPalette;

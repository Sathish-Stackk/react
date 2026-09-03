import React, { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (operator) => {
    let a = Number(num1);
    let b = Number(num2);

    if (operator === "+") setResult(a + b);
    if (operator === "-") setResult(a - b);
    if (operator === "*") setResult(a * b);
    if (operator === "/") {
      setResult(b !== 0 ? a / b : "Cannot divide by zero");
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="First number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br /><br />

      <button onClick={() => calculate("+")}>+</button>
      <button onClick={() => calculate("-")}>-</button>
      <button onClick={() => calculate("*")}>*</button>
      <button onClick={() => calculate("/")}>/</button>

      <h3>Result: {result}</h3>
    </div>
  );
}

export default Calculator;

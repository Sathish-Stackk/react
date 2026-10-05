import { useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");

  const share =
    bill && people ? (Number(bill) / Number(people)).toFixed(2) : 0;

  return (
    <div>
      <h2>Bill Splitter</h2>

      <input
        type="number"
        placeholder="Total bill"
        onChange={(e) => setBill(e.target.value)}
      />

      <input
        type="number"
        placeholder="Number of people"
        onChange={(e) => setPeople(e.target.value)}
      />

      <p>Each Person Pays: ₹{share}</p>
    </div>
  );
}

export default App;

import { useState } from "react";

export default function ExpenseSplit() {
  const [amount, setAmount] = useState("");
  const [people, setPeople] = useState("");

  const perPerson =
    amount && people && people > 0
      ? (Number(amount) / Number(people)).toFixed(2)
      : 0;

  return (
    <div>
      <h2>Expense Splitter</h2>

      <input
        type="number"
        placeholder="Total amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Number of people"
        value={people}
        onChange={(e) => setPeople(e.target.value)}
      />

      <h3>Each Person Pays: ₹{perPerson}</h3>
    </div>
  );
}

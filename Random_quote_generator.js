import { useState } from "react";

function App() {
  const quotes = ["Keep Learning", "Code Every Day", "Never Give Up"];
  const [quote, setQuote] = useState(quotes[0]);

  const changeQuote = () => {
    let i = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[i]);
  };

  return (
    <div>
      <h2>{quote}</h2>
      <button onClick={changeQuote}>New Quote</button>
    </div>
  );
}

export default App;

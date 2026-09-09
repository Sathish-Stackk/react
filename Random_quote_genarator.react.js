import React, { useState } from "react";

function RandomQuote() {
  const quotes = [
    "Believe in yourself.",
    "Never give up.",
    "Success comes with practice.",
    "Keep learning every day.",
    "Hard work beats talent."
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div>
      <h2>Random Quote Generator</h2>

      <p>"{quote}"</p>

      <button onClick={generateQuote}>
        New Quote
      </button>
    </div>
  );
}

export default RandomQuote;

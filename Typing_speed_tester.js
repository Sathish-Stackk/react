import { useState } from "react";

function TypingSpeedTest() {
  const sentence = "React makes frontend development interesting";

  const [text, setText] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [speed, setSpeed] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;

    if (!startTime) {
      setStartTime(Date.now());
    }

    setText(value);

    if (value === sentence) {
      const timeTaken = (Date.now() - startTime) / 60000;
      const words = sentence.split(" ").length;
      const wpm = Math.round(words / timeTaken);

      setSpeed(wpm);
    }
  };

  return (
    <div>
      <h2>Typing Speed Test</h2>

      <p>{sentence}</p>

      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Start typing..."
      />

      {speed && <h3>Your Speed: {speed} WPM</h3>}
    </div>
  );
}

export default TypingSpeedTest;
